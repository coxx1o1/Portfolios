import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './home/hero1.jsx'
import Hero2 from './home/hero2.jsx'

function App() {
  return (
    <div className="min-h-svh flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/hero" element={<HeroSection />} />
          <Route path="/hero2" element={<Hero2 />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
