import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import TypewriterText from "../components/TypewriterText";

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
      {/* Position timer in the center-bottom area where "2025" is */}
      <div className="flex flex-col items-center justify-center mt-64 md:mt-80">
        
        {/* Timer positioned under the "2025" text */}
        <div className="bg-black/70 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-2xl border border-white/20 mb-8">
          <div className="text-4xl md:text-6xl font-bold text-white text-center font-mono tracking-wider mb-4">
            {formatTime()}
          </div>

          {!isRunning ? (
            <Button
              onClick={() => setIsRunning(true)}
              className="w-full py-4 text-base md:text-lg bg-gradient-to-r from-green-600 to-orange-500 hover:from-green-700 hover:to-orange-600 transition-all duration-300 animate-pulse"
            >
              <Play className="mr-2" /> Start Hackathon
            </Button>
          ) : (
            <p className="text-center text-white text-base md:text-lg font-semibold">
              Hackathon in Progress! 🚀
            </p>
          )}
        </div>

        {/* Motivational text */}
        <div className="text-center text-white bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">
          <TypewriterText text="6 hours to turn your ideas into reality!" />
        </div>
      </div>
    </div>
  );
}
