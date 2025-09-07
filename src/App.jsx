import CountdownTimer from './components/CountdownTimer'

function App() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: 'url(/sih-poster.jpg)',
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <CountdownTimer />
      </div>
    </div>
  )
}

export default App
