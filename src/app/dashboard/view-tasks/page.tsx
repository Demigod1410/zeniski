"use client";
import TaskCard from '@/components/task-card';
import { useEffect, useState } from 'react';

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

const ViewTasksPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('/api/tasks');
        if (!response.ok) throw new Error('Failed to fetch tasks');
        const data = await response.json();
        setTasks(data.data);
      } catch (err) {
        setError('Failed to load tasks');
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) return <div className="p-4">Loading tasks...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;

  return (
    <div className="items-center p-5 mx-auto sm:mx-10 lg:mx-20 xl:mx-40">
      <h1 className="text-3xl font-bold mb-6">Your Tasks</h1>
      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
        {tasks.length === 0 && (
          <p className="text-center text-gray-500">No tasks found</p>
        )}
      </div>
    </div>
  );
};

export default ViewTasksPage;