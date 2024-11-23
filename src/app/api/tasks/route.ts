import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), "src", "data", "data.json");

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const newTask = {
      ...body,
      id: Date.now().toString(), // Generate a unique ID for the task
      createdAt: new Date(),
    };

    // Read existing data
    const data = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));

    // Add new task to data
    data.tasks.push(newTask);

    // Write updated data back to file
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));

    return NextResponse.json({ success: true, data: newTask });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to add task" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Read existing data
    const data = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));

    return NextResponse.json({ success: true, data: data.tasks });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch tasks" },
      { status: 500 }
    );
  }
}