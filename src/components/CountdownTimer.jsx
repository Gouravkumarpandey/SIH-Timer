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
    <div className="min-h-screen bg-hackathon-dark flex flex-col items-center justify-start p-4 pt-8">
      <div className="max-w-3xl w-full flex flex-col items-center">
        <div className="animate-pulse-slow flex flex-col items-center">
          <img src="/title.png" alt="Hackathon Logo" className="h-80 md:h-96 object-contain mb-0" />
          <div className="-mt-4">
            <TypewriterText text="Where Innovation Meets Reality!" />
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-hackathon-purple/20 to-hackathon-blue/20 
          backdrop-blur-sm p-8 rounded-xl shadow-xl border border-white/10 w-full max-w-md">
          
          <div className="text-6xl md:text-7xl font-bold text-white text-center font-mono tracking-wider mb-6">
            {formatTime()}
          </div>

          {!isRunning ? (
            <Button
              onClick={() => setIsRunning(true)}
              className="w-full py-6 text-lg bg-gradient-to-r from-hackathon-purple to-hackathon-blue hover:opacity-90 transition-all duration-300 animate-pulse-slow"
            >
              <Play className="mr-2" /> Start Hackathon
            </Button>
          ) : (
            <p className="text-center text-white/80 text-lg">
              Your hackathon is underway! Good luck!
            </p>
          )}
        </div>

        <div className="mt-10 text-center text-white/60 max-w-lg">
          <p className="text-lg">6 hours to turn your ideas into reality!</p>
        </div>
      </div>
    </div>
  );
}
