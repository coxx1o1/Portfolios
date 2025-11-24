import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './home/hero1.jsx'
import Hero2 from './home/hero2.jsx'
import Hero3 from './home/hero3.jsx'
import Hero4 from './home/hero4.jsx'

function App() {
  return (
    <div className="min-h-svh flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/hero" element={<HeroSection />} />
          <Route path="/hero2" element={<Hero2 />} />
          <Route path="/hero3" element={<Hero3 />} />
          <Route path="/hero4" element={<Hero4 />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
