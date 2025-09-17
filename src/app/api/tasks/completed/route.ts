import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { subHours } from "date-fns";

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

interface CompletedTask {
  id: string;
  title: string;
}

const dataFilePath = path.join(process.cwd(), "src", "data", "data.json");

export async function GET() {
  try {
    const data = JSON.parse(fs.readFileSync(dataFilePath, "utf-8")) as TaskData;
    const twentyFourHoursAgo = subHours(new Date(), 24);

    // First sort the tasks, then map them to the simplified structure
    const completedTasks = data.tasks
      .filter((task) => {
        const createdAt = new Date(task.createdAt);
        return task.status === "completed" && createdAt > twentyFourHoursAgo;
      })
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .map((task): CompletedTask => ({
        id: task.id,
        title: task.title
      }));

    return NextResponse.json({ 
      success: true, 
      tasks: completedTasks 
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to fetch completed tasks" },
      { status: 500 }
    );
  }
}