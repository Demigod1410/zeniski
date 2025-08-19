// src/app/dashboard/view-tasks/[id]/page.tsx
"use client";
import TaskCard from '@/components/task-card';
import { Button } from "@/components/ui/button";
import { RoadmapLoaderButton } from "@/components/ui/roadmap-loader-button";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Pencil, Trash2 } from "lucide-react";
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Check } from "lucide-react";
import { isBefore, parseISO } from "date-fns";
import { cn } from '@/lib/utils';

interface RoadmapItem {
  title: string;
  description: string;
  estimatedTime: number;
}

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

const loadingStates = [
  { title: "Analyzing Task", description: "Breaking down your task..." },
  { title: "Creating Milestones", description: "Generating achievable steps..." },
  { title: "Finalizing Roadmap", description: "Organizing timeline..." }
];

export default function TaskPage() {
    const router = useRouter();
    const params = useParams();
    const [task, setTask] = useState<Task | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [timeRemaining, setTimeRemaining] = useState<string>("Loading...");
    const [roadmap, setRoadmap] = useState<RoadmapItem[] | null>(null);
    const [isGenerating, setIsGenerating] = useState(false);
    const [isCompleting, setIsCompleting] = useState(false);


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

    
    useEffect(() => {
        if (!task?.endDate || !task?.endTime || !task?.startDate || !task?.startTime) {
          setTimeRemaining("No deadline set");
          return;
        }
      
        try {
          const startDateTime = new Date(task.startDate);
          const [startHours, startMinutes] = task.startTime.split(':').map(Number);
          startDateTime.setHours(startHours, startMinutes, 0);
      
          const endDateTime = new Date(task.endDate);
          const [endHours, endMinutes] = task.endTime.split(':').map(Number);
          endDateTime.setHours(endHours, endMinutes, 0);
      
          if (isNaN(startDateTime.getTime()) || isNaN(endDateTime.getTime())) {
            setTimeRemaining("Invalid date format");
            return;
          }
      
          const updateTimer = () => {
            const now = new Date();
            
            // Check if task is queued and hasn't started yet
            if (task.status === "queued" && startDateTime > now) {
              const diffToStart = Math.floor((startDateTime.getTime() - now.getTime()) / 1000);
              const hours = Math.floor(diffToStart / 3600);
              const minutes = Math.floor((diffToStart % 3600) / 60);
              const seconds = diffToStart % 60;
              
              setTimeRemaining(
                `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
              );
              return;
            }
      
            // Regular countdown to end time
            const diffToEnd = Math.floor((endDateTime.getTime() - now.getTime()) / 1000);
            
            if (diffToEnd < 0) {
              setTimeRemaining("Time's up!");
              return;
            }
      
            const hours = Math.floor(diffToEnd / 3600);
            const minutes = Math.floor((diffToEnd % 3600) / 60);
            const seconds = diffToEnd % 60;
            
            setTimeRemaining(
              `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
            );
          };
      
          updateTimer();
          const timer = setInterval(updateTimer, 1000);
          return () => clearInterval(timer);
        } catch (error) {
          console.error('Error calculating time:', error);
          setTimeRemaining("Invalid date");
        }
      }, [task]);
      
    const toast = useToast();

    const handleCompleteTask = async () => {
      // Show confirmation dialog
      if (!window.confirm('Are you sure you want to mark this task as completed?')) {
        return;
      }
    
      setIsCompleting(true);
      try {
        const response = await fetch(`/api/tasks/?id=${params.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status: 'completed' }),
        });
    
        if (!response.ok) throw new Error('Failed to update task');
    
        toast.toast({
          id: Date.now().toString(),
          title: "Success",
          description: "Task marked as completed!",
        });
    
        // Update local task state
        setTask(prev => prev ? { ...prev, status: 'completed' } : null);
    
      } catch (error) {
        toast.toast({
          id: Date.now().toString(),
          title: "Error",
          description: "Failed to complete task",
          variant: "destructive",
        });
      } finally {
        setIsCompleting(false);
      }
    };

    const handleEdit = () => {
        router.push(`/dashboard/view-tasks/edit/${params.id}`);
    };

    const handleDelete = async () => {
        try {
          // Confirm deletion
          if (!window.confirm('Are you sure you want to delete this task?')) {
            return;
          }
      
          const response = await fetch(`/api/tasks/?id=${params.id}`, {
            method: 'DELETE',
          });
      
          if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Failed to delete task');
          }
      
          toast.toast({
            id: Date.now().toString(),
            title: "Success",
            description: "Task deleted successfully",
          });
      
          // Redirect to tasks list
          router.push('/dashboard/view-tasks');
      
        } catch (error) {
          console.error('Delete error:', error);
          toast.toast({
            id: Date.now().toString(),
            title: "Error",
            description: error instanceof Error ? error.message : 'Failed to delete task',
            variant: "destructive"
          });
        }
      };

      const handleCreateRoadmap = async () => {
        setIsGenerating(true);
        try {
          if (!task) {
            throw new Error('Task data not available');
          }
      
          const response = await fetch('/api/gemini/roadmap', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              description: task.description,
              startDate: task.startDate,
              endDate: task.endDate,
              startTime: task.startTime,
              endTime: task.endTime,
            }),
          });
      
          if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to generate roadmap');
          }
      
          const data = await response.json();
          setRoadmap(data.roadmap);
        } catch (error) {
          console.error('Roadmap error:', error);
          toast.toast({
            id: Date.now().toString(),
            title: "Error",
            description: error instanceof Error ? error.message : "Failed to generate roadmap",
            variant: "destructive"
          });
        } finally {
          setIsGenerating(false);
        }
      };

    if (loading) return <div className="p-4">Loading task...</div>;
    if (error) return <div className="p-4 text-red-500">{error}</div>;
    if (!task) return <div className="p-4">Task not found</div>;

    return (
        <div className="items-center p-5 mx-auto sm:mx-10 lg:mx-20 xl:mx-40">
            <h1 className="text-2xl font-bold mb-6">Task Details</h1>
            <div className="relative">
            <TaskCard task={task} />
            <div className="mt-4 flex justify-between items-center">
                <div className="text-lg font-mono px-4 py-2 rounded-md">
                {timeRemaining}
                </div>
                <div className="flex gap-2">
                <RoadmapLoaderButton
                  loadingStates={loadingStates}
                  onComplete={handleCreateRoadmap}
                />
                <Button
                    variant="outline"
                    className="bg-white hover:bg-gray-400 text-gray-800 transition-all"
                    onClick={handleEdit}
                >
                    <Pencil className="w-4 h-4 mr-2" />
                    Edit
                </Button>
                <Button
                    variant="outline"
                    className="bg-white hover:bg-red-50 text-red-600 hover:text-red-700 transition-all"
                    onClick={handleDelete}
                >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete
                </Button>
                </div>
            </div>
            {isGenerating && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-8 flex flex-col items-center space-y-4"
              >
                <div className="w-8 h-8 border-4 border-t-blue-500 border-r-transparent border-b-blue-500 border-l-transparent rounded-full animate-spin" />
                <p className="text-sm text-gray-400">Generating roadmap...</p>
              </motion.div>
            )}
            {!isGenerating && roadmap && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-8"
              >
                <h2 className="text-xl font-semibold mb-4">Task Roadmap</h2>
                <div className="space-y-4">
                  {roadmap.map((item, index) => (
                    <div 
                      key={index}
                      className="bg-white/5 backdrop-blur-sm rounded-lg p-4"
                    >
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-sm text-gray-300 mt-1">{item.description}</p>
                      <span className="text-xs text-gray-400 mt-2 block">
                        Estimated time: {item.estimatedTime} minutes
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
            {!isGenerating && (
              <div className="mt-8 flex justify-center">
                <Button
                  variant="outline"
                  className={cn(
                    "bg-white/10 hover:bg-white/20 text-white transition-all px-8 py-5",
                    task?.status === 'completed' && "opacity-50 cursor-not-allowed"
                  )}
                  disabled={
                    isGenerating || 
                    task?.status === 'completed' ||
                    isBefore(new Date(), parseISO(`${task?.startDate}T${task?.startTime}`))
                  }
                  onClick={handleCompleteTask}
                >
                  {isCompleting ? (
                    <div className="w-6 h-6 border-2 border-t-transparent border-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Check className="w-5 h-5 mr-2" />
                      {task?.status === 'completed' ? 'Completed' : 'Complete Task'}
                    </>
                  )}
                </Button>
              </div>
            )}
      </div>
    </div>
    );
}