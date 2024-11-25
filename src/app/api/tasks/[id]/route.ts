// src/app/api/tasks/[id]/route.ts
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import fs from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), "src", "data", "data.json");

export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const { id } = await context.params;
    
    // Read from local JSON instead of MongoDB
    const data = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));
    
    const task = data.tasks.find((task: any) => task.id === id);
    
    if (!task) {
      return NextResponse.json(
        { error: 'Task not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(task);
    
  } catch (error) {
    console.error('Error fetching task:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}