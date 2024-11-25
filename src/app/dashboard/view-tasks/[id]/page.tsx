// src/app/dashboard/view-tasks/[id]/page.tsx
"use client";
import { useEffect, useState } from 'react';
import TaskCard from '@/components/task-card';
import { useParams } from 'next/navigation';

interface Task {
    id: string;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
    status: 'queued' | 'pending' | 'completed';
    exp?: number;
}

export default function TaskPage() {
    const params = useParams();
    const [task, setTask] = useState<Task | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const response = await fetch(`/api/tasks/${params.id}`);
                if (!response.ok) throw new Error('Failed to fetch task');
                const data = await response.json();
                setTask(data);
            } catch (err) {
                setError('Failed to load task');
            } finally {
                setLoading(false);
            }
        };

        fetchTask();
    }, [params.id]);

    if (loading) return <div className="p-4">Loading task...</div>;
    if (error) return <div className="p-4 text-red-500">{error}</div>;
    if (!task) return <div className="p-4">Task not found</div>;

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Task Details</h1>
            <TaskCard task={task} />
        </div>
    );
}