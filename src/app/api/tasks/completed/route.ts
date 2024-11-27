import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { subHours } from "date-fns";

const dataFilePath = path.join(process.cwd(), "src", "data", "data.json");

export async function GET() {
  try {
    const data = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));
    const twentyFourHoursAgo = subHours(new Date(), 24);

    const completedTasks = data.tasks
      .filter((task: any) => {
        const createdAt = new Date(task.createdAt);
        return task.status === "completed" && createdAt > twentyFourHoursAgo;
      })
      .map((task: any) => ({
        id: task.id,
        title: task.title
      }))
      .sort((a: any, b: any) => b.createdAt - a.createdAt);

    return NextResponse.json({ 
      success: true, 
      tasks: completedTasks 
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch completed tasks" },
      { status: 500 }
    );
  }
}