import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './home/hero1.jsx'
import Test from './home/test.jsx'

function App() {
  return (
    <div className="min-h-svh flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/hero" element={<HeroSection />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
