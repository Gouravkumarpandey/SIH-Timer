import CountdownTimer from './components/CountdownTimer'

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4" style={{backgroundColor: '#307349'}}>
      {/* Background poster image - contained and fully visible */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src="/sih-poster.jpg" 
          alt="SIH Poster Background" 
          className="max-w-full max-h-full object-contain opacity-95"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <CountdownTimer />
      </div>
    </div>
  )
}

export default App
