"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const ZeniskiContent = [
    {
      title: 'Unleash Your Productivity: A Journey to Achievement and Growth',
      description:
        'Transform your daily tasks into meaningful milestones with Zeniski. Our AI-powered task management system adapts to your unique needs, offering personalized recommendations and insights to help you achieve your goals. Every task completed is a step toward leveling up your productivity and enhancing your life.',
    },
    {
      title: 'Gamify Your Goals: Turning To-Dos Into Triumphs',
      description:
        'Say goodbye to mundane task lists! Zeniski uses gamification to make completing tasks exciting and rewarding. Earn experience points, unlock achievements, and level up your productivity as you progress through your journey. Watch as your efforts turn into a fulfilling and engaging experience.',
    },
    {
      title: 'Stay Connected: Social Engagement at Your Fingertips',
      description:
        'Boost your social presence effortlessly by sharing your achievements directly to LinkedIn or X. Zeniski’s built-in AI generates professional posts to showcase your journey, inspiring others while keeping you active and visible on your favorite platforms—all without leaving the app.',
    },
    {
      title: 'Real-Time AI Support & Checkpoints',
      description:
        'Simplify your workflow with AI-created checkpoints that break down tasks into manageable steps. Get real-time support and suggestions tailored to your task, making the path to completion smoother. These optional checkpoints provide bonus points and ensure you stay on track without overwhelming your schedule.',
    },
    {
      title: 'Seamless Integration with Google Calendar',
      description:
        'Stay ahead of deadlines with Zeniski’s integration with Google Calendar. Automatically set reminders for tasks, get notified five minutes before starting, and never miss a beat. Experience effortless synchronization that keeps you on schedule and stress-free.',
    },
    
  ];

function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={ZeniskiContent} />
    </div>
  )
}

export default WhyChooseUs