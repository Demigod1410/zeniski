import { NextResponse, NextRequest } from "next/server";
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

export async function DELETE(request: NextRequest) {
  try {
    // Get id from search params
    const id = request.nextUrl.searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Task ID is required" },
        { status: 400 }
      );
    }

    // Read current data
    const data = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));

    // Find task index
    const taskIndex = data.tasks.findIndex((task: any) => task.id === id);

    if (taskIndex === -1) {
      return NextResponse.json(
        { success: false, error: "Task not found" },
        { status: 404 }
      );
    }

    // Remove task
    data.tasks.splice(taskIndex, 1);

    // Write updated data back to file
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));

    return NextResponse.json({
      success: true,
      message: "Task deleted successfully"
    });

  } catch (error) {
    console.error('Delete task error:', error);
    return NextResponse.json(
      { success: false, error: "Failed to delete task" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    // Get id from search params
    const id = request.nextUrl.searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Task ID is required" },
        { status: 400 }
      );
    }

    // Get update data from request body
    const body = await request.json();
    
    if (!body.status) {
      return NextResponse.json(
        { success: false, error: "Status is required" },
        { status: 400 }
      );
    }

    // Read current data
    const data = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));

    // Find task index
    const taskIndex = data.tasks.findIndex((task: any) => task.id === id);

    if (taskIndex === -1) {
      return NextResponse.json(
        { success: false, error: "Task not found" },
        { status: 404 }
      );
    }

    // Update task status
    data.tasks[taskIndex] = {
      ...data.tasks[taskIndex],
      status: body.status,
      updatedAt: new Date().toISOString()
    };

    // Write updated data back to file
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));

    return NextResponse.json({
      success: true,
      message: "Task status updated successfully",
      task: data.tasks[taskIndex]
    });

  } catch (error) {
    console.error('Update task error:', error);
    return NextResponse.json(
      { success: false, error: "Failed to update task" },
      { status: 500 }
    );
  }
}