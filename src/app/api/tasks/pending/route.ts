// src/app/api/tasks/pending/route.ts
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

interface Task {
  id: string;
  title: string;
  status: 'queued' | 'pending' | 'completed';
  createdAt: string;
  updatedAt?: string;
  [key: string]: unknown;  // For other properties that might exist
}

interface TaskData {
  tasks: Task[];
  [key: string]: unknown;
}

interface PendingTask {
  id: string;
  title: string;
}

const dataFilePath = path.join(process.cwd(), "src", "data", "data.json");

export async function GET() {
  try {
    const data = JSON.parse(fs.readFileSync(dataFilePath, "utf-8")) as TaskData;

    // Sort first with full data, then map to simplified structure
    const pendingTasks = data.tasks
      .filter((task) => task.status === "pending")
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .map((task): PendingTask => ({
        id: task.id,
        title: task.title
      }));

    return NextResponse.json({ 
      success: true, 
      tasks: pendingTasks 
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to fetch pending tasks" },
      { status: 500 }
    );
  }
}