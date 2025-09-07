import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function CountdownTimer() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(6 * 60 * 60); // 6 hours in seconds (21600)

  useEffect(() => {
    let interval = undefined;
    if (isRunning && time > 0) {
      interval = window.setInterval(() => setTime((prev) => prev - 1), 1000);
    } else if (time === 0) {
      setIsRunning(false);
    }
    return () => interval && clearInterval(interval);
  }, [isRunning, time]);

  const formatTime = () => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return [
      hours.toString().padStart(2, "0"),
      minutes.toString().padStart(2, "0"),
      seconds.toString().padStart(2, "0"),
    ].join(":");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Timer Box - Compact version */}
      <div className="bg-white border-2 border-gray-300 rounded-xl shadow-lg p-4 mb-3 max-w-xs w-full">
        {/* Countdown Display */}
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-gray-800 font-mono tracking-wider mb-3">
            {formatTime()}
          </div>
          
          {/* Status */}
          {isRunning ? (
            <div className="bg-gradient-to-r from-green-500 to-orange-500 text-white px-4 py-2 rounded-full font-semibold text-sm flex items-center justify-center">
              <span className="mr-1">🔥</span>
              Hackathon in Progress!
              <span className="ml-1">🔥</span>
            </div>
          ) : (
            <Button
              onClick={() => setIsRunning(true)}
              className="w-full py-2 text-sm bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600 transition-all duration-300 text-white rounded-full shadow-lg font-semibold"
            >
              <Play className="mr-1 h-4 w-4" /> Start Hackathon
            </Button>
          )}
        </div>
      </div>

      {/* Motivational Text - Smaller */}
      <div className="text-center">
        <p className="text-gray-600 text-sm font-medium">
          {Math.floor(time / 3600)} hours to turn your ideas into reality!
        </p>
      </div>
    </div>
  );
}
