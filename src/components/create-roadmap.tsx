"use client";
import React, { useState } from "react";
import { RoadmapLoaderButton } from "@/components/ui/roadmap-loader-button";


// Example usage:
const loadingStates = [
    {
      title: "Analyzing Task",
      description: "Breaking down task requirements..."
    },
    {
      title: "Generating Milestones",
      description: "Creating achievable checkpoints..."
    },
    {
      title: "Finalizing Roadmap",
      description: "Organizing timeline and dependencies..."
    }
  ];

export function Roadmap() {
  return (
    <RoadmapLoaderButton
  loadingStates={loadingStates}
  onComplete={() => {
    // Handle completion
    console.log("Roadmap creation complete");
  }}
/>
  );
}
