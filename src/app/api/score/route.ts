// src/app/api/score/route.ts
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

interface Task {
  id: string;
  title: string;
  status: 'queued' | 'pending' | 'completed';
  exp?: number;
  [key: string]: unknown;  // For other properties that might exist
}

interface TaskData {
  tasks: Task[];
  [key: string]: unknown;  // For other properties that might exist in data.json
}

const dataFilePath = path.join(process.cwd(), "src", "data", "data.json");

export async function GET() {
  try {
    const data = JSON.parse(fs.readFileSync(dataFilePath, "utf-8")) as TaskData;
    
    const totalScore = data.tasks
      .filter((task) => task.status === "completed")
      .reduce((sum: number, task) => sum + (task.exp || 0), 0);

    return NextResponse.json({ 
      success: true, 
      score: totalScore 
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to calculate score" },
      { status: 500 }
    );
  }
}