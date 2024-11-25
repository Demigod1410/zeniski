"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { format, isBefore, isToday } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  title: z.string().min(1, "Title must be at least a character."),
  description: z.string().min(10, "Description must be at least 10 characters."),
  startDate: z.date({
    required_error: "Please select start date.",
  }),
  endDate: z.date({
    required_error: "Please select end date.",
  }),
  startTime: z.string().min(1, "Please select start time."),
  endTime: z.string().min(1, "Please select end time."),
}).refine((data) => {
  const now = new Date();
  const [currentHours, currentMinutes] = [now.getHours(), now.getMinutes()];
  
  const [startHours, startMinutes] = data.startTime.split(":").map(Number);
  const [endHours, endMinutes] = data.endTime.split(":").map(Number);
  
  const startDateTime = new Date(data.startDate);
  startDateTime.setHours(startHours, startMinutes, 0);
  
  const endDateTime = new Date(data.endDate);
  endDateTime.setHours(endHours, endMinutes, 0);

  if (isToday(data.startDate)) {
    const currentTotalMinutes = currentHours * 60 + currentMinutes;
    const startTotalMinutes = startHours * 60 + startMinutes;
    
    if (startTotalMinutes <= currentTotalMinutes) {
      return false;
    }
  }
  
  return endDateTime > startDateTime;
}, {
  message: "Invalid date/time selection. Please select a valid date/time.",
  path: ["startTime"],
});

export default function AddTaskPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      startTime: "",
      endTime: "",
      startDate: undefined,
      endDate: undefined,
    },
  });

  const { toast } = useToast();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const currentDateTime = new Date();
    const taskStartDateTime = new Date(values.startDate);
    const [startHours, startMinutes] = values.startTime.split(":").map(Number);
    taskStartDateTime.setHours(startHours, startMinutes, 0);
    
    const taskEndDateTime = new Date(values.endDate);
    const [endHours, endMinutes] = values.endTime.split(":").map(Number);
    taskEndDateTime.setHours(endHours, endMinutes, 0);
  
    let status = "queued";
    if (isBefore(taskEndDateTime, currentDateTime)) {
      status = "pending";
    }
  
    const taskData = {
      ...values,
      status,
    };
  
    try {
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
      });
  
      if (!response.ok) throw new Error('Failed to add task');
  
      toast({
        title: "Success",
        description: "Task added successfully!",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add task. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="mx-auto p-6 sm:max-w-full sm:mx-10 lg:mx-20 xl:mx-48">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Add New Task</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Task Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter task title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter task description"
                    {...field}
                    className="min-h-[100px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="startDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Start Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick start date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date < new Date(new Date().setHours(0, 0, 0, 0))
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="endDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>End Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick end date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date < new Date(new Date().setHours(0, 0, 0, 0))
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="startTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Start Time</FormLabel>
                  <FormControl>
                    <Input type="time" step="60" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="endTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>End Time</FormLabel>
                  <FormControl>
                    <Input type="time" step="60" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="w-full md:w-auto hover:opacity-50">Add Task</Button>
        </form>
      </Form>
    </div>
  );
}