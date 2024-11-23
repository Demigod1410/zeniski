"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
import { Zap, Pencil, Trash2 } from 'lucide-react';

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

const statusStyles = {
  queued: 'bg-gray-600',
  pending: 'bg-red-500',
  completed: 'bg-green-500'
};

const TaskCard = ({ task }: { task: Task }) => {
  const router = useRouter();
  const [showActions, setShowActions] = useState(false);

  return (
    <div 
      className="relative p-4 mb-4 border rounded-lg shadow-sm hover:shadow-md transition-all"
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      {/* Title, Exp, and Status row */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold truncate flex-1 mr-4">{task.title}</h3>
        <div className="flex items-center gap-4 flex-shrink-0">
          <span className="flex items-center gap-1 bg-gray-400 px-2 py-1 rounded">
            <Zap className="h-4 w-4" />
            <span>{task.exp || 100} pts</span>
          </span>
          <span className={`px-3 py-1 rounded-full text-sm ${statusStyles[task.status]}`}>
            {task.status}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-3 line-clamp-2">{task.description}</p>

      {/* Dates and Times */}
      <div className="text-sm text-gray-500 grid grid-cols-2 gap-4">
        <div>
          <p>Start: {format(new Date(task.startDate), 'PPP')}</p>
          <p>Time: {task.startTime}</p>
        </div>
        <div>
          <p>End: {format(new Date(task.endDate), 'PPP')}</p>
          <p>Time: {task.endTime}</p>
        </div>
      </div>

      {/* Action Buttons */}
      {showActions && (
        <div className="absolute top-2 right-2 flex gap-2">
          <button
            onClick={() => router.push(`/view-tasks/${task.id}`)}
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            <Pencil className="h-4 w-4" />
          </button>
          <button className="p-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
};

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
    <div className="items-center p-5">
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