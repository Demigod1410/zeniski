// src/components/ui/roadmap-loader-button.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

interface LoadingState {
  title: string;
  description: string;
}

// interface RoadmapLoaderButtonProps {
//   loadingStates: LoadingState[];
//   onComplete?: () => void;
//   className?: string;
// }

interface RoadmapLoaderButtonProps {

  loadingStates: { title: string; description: string }[];

  onStart?: () => Promise<void>;

  onComplete?: () => void;

  className?: string;
}

export function RoadmapLoaderButton({
  loadingStates,
  onComplete,
  onStart,
  className
}: RoadmapLoaderButtonProps) {
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const startLoading = () => {
    setLoading(true);
    setCurrentIndex(0);

    // Progress through states
    loadingStates.forEach((_, index) => {
      setTimeout(() => {
        setCurrentIndex(index);
        if (index === loadingStates.length - 1) {
          setTimeout(() => {
            setLoading(false);
            onComplete?.();
          }, 2000);
        }
      }, index * 2000);
    });
  };

  return (
    <>
        <Button 
            variant="outline"
            className="bg-white hover:bg-gray-400 text-gray-800 transition-all"
            onClick={startLoading}
        >
            <MapPin className="w-4 h-4 mr-2" />
            Create Roadmap
        </Button>

      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* <button
                onClick={() => setLoading(false)}
                className="absolute top-2 right-2 text-white/80 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button> */}

              <div className="space-y-4 p-6">
                {loadingStates.map((state, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: index <= currentIndex ? 1 : 0.3,
                      y: 0,
                    }}
                    className={`flex flex-col gap-1 ${
                      index < currentIndex
                        ? "text-green-400"
                        : index === currentIndex
                        ? "text-white"
                        : "text-white/50"
                    }`}
                  >
                    <h3 className="font-medium">{state.title}</h3>
                    <p className="text-sm opacity-80">{state.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

