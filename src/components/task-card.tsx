// src/components/task-card.tsx
import { useRouter } from 'next/navigation';

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

    return (
        <div 
            onClick={() => router.push(`/dashboard/view-tasks/${task.id}`)}
            className="p-4 mb-4 border rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
        >
            {/* Rest of your existing card content */}
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold truncate flex-1 mr-4">{task.title}</h3>
                <div className="flex items-center gap-4 flex-shrink-0">
                    <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                        <span>{task.exp || 100} pts</span>
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm text-white ${statusStyles[task.status]}`}>
                        {task.status}
                    </span>
                </div>
            </div>

            <p className="text-gray-600 mb-3 line-clamp-2">{task.description}</p>

            <div className="text-sm text-gray-500 grid grid-cols-2 gap-4">
                <div>
                    <p>Start: {task.startDate}</p>
                    <p>Time: {task.startTime}</p>
                </div>
                <div>
                    <p>End: {task.endDate}</p>
                    <p>Time: {task.endTime}</p>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;