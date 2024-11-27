// src/app/api/tasks/pending/route.ts
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), "src", "data", "data.json");

export async function GET() {
  try {
    const data = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));

    const pendingTasks = data.tasks
      .filter((task: any) => task.status === "pending")
      .map((task: any) => ({
        id: task.id,
        title: task.title
      }))
      .sort((a: any, b: any) => b.createdAt - a.createdAt);

    return NextResponse.json({ 
      success: true, 
      tasks: pendingTasks 
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch pending tasks" },
      { status: 500 }
    );
  }
}