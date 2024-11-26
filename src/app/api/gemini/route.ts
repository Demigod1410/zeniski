import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
    GenerativeModel,
    GenerationConfig,
    ChatSession,
  } from "@google/generative-ai";
  
  const apiKey: string = process.env.GEMINI_API_KEY as string;
  
  if (!apiKey) {
    throw new Error("API key is missing. Please set GEMINI_API_KEY in the environment variables.");
  }
  
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model: GenerativeModel = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig: GenerationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(): Promise<void> {
    const chatSession: ChatSession = model.startChat({
      generationConfig,
      history: [],
    });
  
    try {
      const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
      console.log(result.response.text());
    } catch (error) {
      console.error("Error while sending message:", error);
    }
  }
  
  run();
  