import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: Request) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      console.error('GEMINI_API_KEY not configured');
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    const body = await req.json();
    if (!body.prompt || !body.type || !body.timeframe) {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `
      Based on the following task details, assign experience points from this range: 50-500.
      Consider both task complexity and time commitment.
      
      Task Description: ${body.prompt}
      
      Time Details:
      - Duration: ${body.timeframe.durationHours.toFixed(1)} hours
      - Start: ${new Date(body.timeframe.startDate).toLocaleString()}
      - End: ${new Date(body.timeframe.endDate).toLocaleString()}
      
      Guidelines:
      - Simple tasks in long timeframes may deserve low points
      - Complex tasks in short timeframes may deserve high points
      - Consider both time investment and task complexity
      - 500 points is reserved for the most challenging tasks ONLY. NOT TO BE ASSIGNED TO ANY TASK THAT IS NOT EXTREMELY CHALLENGING.
      - Assign 50 points to tasks that are trivial and require minimal effort.
      
      Return ONLY the numeric value from the array above.
    `;

    const result = await model.generateContent(prompt);
    const text = result.response.text().trim();
    const exp = parseInt(text.match(/\d+/)?.[0] || '100');

    // Validate exp is in allowed range
    // const validExps = [50, 100, 150, 200, 300, 500];
    // const finalExp = validExps.includes(exp) ? exp : 100;

    return NextResponse.json({ exp: exp });

  } catch (error) {
    console.error('Gemini API error:', error);
    return NextResponse.json({ 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 });
  }
}