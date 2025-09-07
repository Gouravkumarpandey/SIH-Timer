import CountdownTimer from './components/CountdownTimer'

function App() {
  return (
    <div className="h-screen bg-white overflow-hidden">
      <div className="h-full flex flex-col justify-between py-4">
        {/* Top Section with Code & Compute Society logo */}
        <div className="flex justify-end items-center px-4 py-2">
          <div className="flex items-center bg-gray-900 rounded-lg p-2">
            <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center mr-2">
              <span className="text-gray-900 font-bold text-sm">CS</span>
            </div>
            <div className="text-green-400">
              <p className="text-xs font-bold leading-tight">CODE &</p>
              <p className="text-xs font-bold leading-tight">COMPUTE</p>
              <p className="text-xs font-bold leading-tight">SOCIETY</p>
            </div>
          </div>
        </div>

        {/* Main Content - Compact Layout */}
        <div className="flex flex-col items-center justify-center space-y-4 px-4">
          {/* ARKA JAIN Logo - Smaller */}
          <div className="text-center">
            <img 
              src="/AJU.jpg" 
              alt="ARKA JAIN University" 
              className="h-12 md:h-14 object-contain mx-auto"
            />
          </div>

          {/* School Header Image - Smaller */}
          <div className="text-center">
            <img 
              src="/School.jpg" 
              alt="School of Engineering & IT organises" 
              className="h-8 md:h-10 object-contain mx-auto"
            />
          </div>

          {/* Main Poster Content Area - Compact */}
          <div className="text-center">
            {/* Smart India Hackathon Title - Smaller text */}
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-green-600">SMART</span> <span className="text-orange-500">INDIA</span>
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold">
                <span className="text-orange-500">INTERNAL</span> <span className="text-green-600">HACKATHON</span>
              </h3>
              <h4 className="text-3xl md:text-4xl font-bold text-gray-700">
                2025
              </h4>
            </div>
          </div>

          {/* Countdown Timer - Compact */}
          <CountdownTimer />
        </div>
      </div>
    </div>
  )
}

export default App
