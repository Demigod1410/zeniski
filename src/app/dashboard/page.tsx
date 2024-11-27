"use client";
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock, List, Star } from 'lucide-react'
import Link from 'next/link';
import { Zap } from 'lucide-react';

export default function OverviewPage() {
  const [score, setScore] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [recentTasks, setRecentTasks] = useState<Array<{ id: string; title: string }>>([]);
  const [completedTasks, setCompletedTasks] = useState<Array<{ id: string; title: string }>>([]);
  const [pendingTasks, setPendingTasks] = useState<Array<{ id: string; title: string }>>([]);


  useEffect(() => {
    const fetchRecentTasks = async () => {
      try {
        const response = await fetch('/api/tasks/recent');
        const data = await response.json();
        if (data.success) {
          setRecentTasks(data.tasks);
        }
      } catch (error) {
        console.error('Failed to fetch recent tasks:', error);
      }
    };
  
    fetchRecentTasks();
  }, []);

  useEffect(() => {
    const fetchScore = async () => {
      try {
        const response = await fetch('/api/score');
        const data = await response.json();
        if (data.success) {
          setScore(data.score);
        }
      } catch (error) {
        console.error('Failed to fetch score:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchScore();
  }, []);

  useEffect(() => {
    const fetchCompletedTasks = async () => {
      try {
        const response = await fetch('/api/tasks/completed');
        const data = await response.json();
        if (data.success) {
          setCompletedTasks(data.tasks);
        }
      } catch (error) {
        console.error('Failed to fetch completed tasks:', error);
      }
    };
  
    fetchCompletedTasks();
  }, []);

  useEffect(() => {
    const fetchPendingTasks = async () => {
      try {
        const response = await fetch('/api/tasks/pending');
        const data = await response.json();
        if (data.success) {
          setPendingTasks(data.tasks);
        }
      } catch (error) {
        console.error('Failed to fetch pending tasks:', error);
      }
    };
  
    fetchPendingTasks();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold m-6">Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-6">
      <Card className="border-2 border-neutral-800 hover:border-neutral-700 transition-all duration-200">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 mb-2">
          <CardTitle className="text-sm font-medium">Recent Tasks</CardTitle>
          <List className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[200px] overflow-y-auto pr-2">
            {recentTasks.length > 0 ? (
              recentTasks.map((task) => (
                <Link 
                  key={task.id}
                  href={`/dashboard/view-tasks/${task.id}`}
                  className="p-2 rounded-md bg-neutral-900/50 hover:bg-neutral-800 
                          border border-neutral-800 hover:border-neutral-700
                          text-sm text-neutral-200 hover:text-white
                          transition-all duration-200"
                >
                  {task.title}
                </Link>
              ))
            ) : (
              <p className="text-sm text-muted-foreground col-span-2">No recent tasks</p>
            )}
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Tasks created in the last 24 hours
          </p>
        </CardContent>
      </Card>
      <Card className="border-2 border-neutral-800 hover:border-neutral-700 transition-all duration-200">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 mb-2">
          <CardTitle className="text-sm font-medium">Completed Tasks</CardTitle>
          <CheckCircle className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[200px] overflow-y-auto pr-2">
            {completedTasks.length > 0 ? (
              completedTasks.map((task) => (
                <Link 
                  key={task.id}
                  href={`/dashboard/view-tasks/${task.id}`}
                  className="p-2 rounded-md bg-neutral-900/50 hover:bg-neutral-800 
                          border border-neutral-800 hover:border-neutral-700
                          text-sm text-neutral-200 hover:text-white
                          transition-all duration-200
                          flex items-center gap-2"
                >
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  {task.title}
                </Link>
              ))
            ) : (
              <p className="text-sm text-muted-foreground col-span-2">No completed tasks</p>
            )}
          </div>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-xs text-muted-foreground">
              Tasks completed in the last 24 hours
            </p>
            <Link 
              href="/dashboard/view-tasks" 
              className="text-xs text-blue-500 hover:text-blue-400 transition-colors"
            >
              View All
            </Link>
          </div>
        </CardContent>
      </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 mb-2">
            <CardTitle className="text-sm font-medium">User Score</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold flex items-center gap-2">
              <span><Zap className='h-7' /></span>
              {loading ? "Loading..." : `${score} XP`}
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Total experience points from completed tasks
            </p>
          </CardContent>
        </Card>
        <Card className="border-2 border-neutral-800 hover:border-neutral-700 transition-all duration-200 flex flex-col h-[300px]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="flex flex-col flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[200px] overflow-y-auto pr-2">
              {pendingTasks.length > 0 ? (
                pendingTasks.map((task) => (
                  <Link 
                    key={task.id}
                    href={`/dashboard/view-tasks/${task.id}`}
                    className="p-2 rounded-md bg-neutral-900/50 hover:bg-neutral-800 
                            border border-neutral-800 hover:border-neutral-700
                            text-sm text-neutral-200 hover:text-white
                            transition-all duration-200
                            flex items-center gap-2"
                  >
                    <Clock className="h-4 w-4 text-yellow-500" />
                    {task.title}
                  </Link>
                ))
              ) : (
                <p className="text-sm text-muted-foreground col-span-2">No pending tasks</p>
              )}
            </div>
            <div className="mt-4 pt-4 border-t border-neutral-800 flex items-center justify-between">
              <p className="text-xs text-muted-foreground">
                Tasks past their due date
              </p>
              <Link 
                href="/dashboard/view-tasks" 
                className="text-xs text-blue-500 hover:text-blue-400 transition-colors"
              >
                View All
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
