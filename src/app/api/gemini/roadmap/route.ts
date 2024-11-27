// src/app/api/gemini/roadmap/route.ts
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    if (!body.description) {
      return NextResponse.json(
        { error: "Task description is required" },
        { status: 400 }
      );
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = `
      Act as a task breakdown expert. Create a roadmap for the following task by breaking it into 3-5 smaller subtasks.
      
      Task Information:
      Description: ${body.description}
      Start: ${body.startDate} at ${body.startTime}
      End: ${body.endDate} at ${body.endTime}

      IMPORTANT: Respond ONLY with a valid JSON array of objects. Each object must have exactly these fields:
      - "title": string (short name of subtask)
      - "description": string (detailed steps)
      - "estimatedTime": number (minutes to complete)

      Example format:
      [
        {
          "title": "Subtask 1",
          "description": "Detailed steps...",
          "estimatedTime": 30
        }
      ]
    `;

    const result = await model.generateContent(prompt);
    const response = result.response.text().trim();
    
    // Remove any potential markdown code block syntax
    const cleanResponse = response.replace(/```json\n?|\n?```/g, '');
    
    try {
      const parsedResponse = JSON.parse(cleanResponse);
      
      // Validate response structure
      if (!Array.isArray(parsedResponse)) {
        throw new Error('Response is not an array');
      }

      // Validate each item
      parsedResponse.forEach((item, index) => {
        if (!item.title || !item.description || typeof item.estimatedTime !== 'number') {
          throw new Error(`Invalid item at index ${index}`);
        }
      });

      return NextResponse.json({ 
        success: true, 
        roadmap: parsedResponse 
      });
    } catch (parseError) {
      console.error("Parse error:", parseError, "Raw response:", response);
      return NextResponse.json(
        { error: "Failed to parse AI response into valid roadmap format" },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error("Roadmap generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate roadmap" },
      { status: 500 }
    );
  }
}