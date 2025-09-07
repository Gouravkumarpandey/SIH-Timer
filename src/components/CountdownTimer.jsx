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
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative">
      {/* Position timer in the center-bottom area where "2025" would be */}
      <div className="flex flex-col items-center justify-center mt-48 md:mt-56 lg:mt-64">
        
        {/* Timer positioned to align with poster layout */}
        <div className="bg-black/80 backdrop-blur-md p-4 md:p-6 rounded-lg shadow-2xl border border-white/20 mb-4">
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center font-mono tracking-wider mb-3 py-2">
            {formatTime()}
          </div>

          {!isRunning ? (
            <Button
              onClick={() => setIsRunning(true)}
              className="w-full py-3 text-base md:text-lg bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600 transition-all duration-300 text-white rounded shadow-lg"
            >
              <Play className="mr-2 h-4 w-4" /> Start Hackathon
            </Button>
          ) : (
            <p className="text-center text-white text-base md:text-lg font-semibold">
              Hackathon in Progress! 🚀
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
