import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        type="button"
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="relative h-12 w-12 p-1 grid place-items-center rounded-xl shadow-lg ring-1 ring-black/5 bg-gradient-to-br from-indigo-600 to-purple-600 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-white"
      >
        <span className={`block h-0.5 w-7 bg-white transition-all duration-300 ${open ? 'translate-y-1 rotate-45' : '-translate-y-1'}`}></span>
        <span className={`block h-0.5 w-7 bg-white transition-all duration-300 ${open ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`block h-0.5 w-7 bg-white transition-all duration-300 ${open ? '-translate-y-1 -rotate-45' : 'translate-y-1'}`}></span>
      </button>
      {open && (
        <ul className="absolute right-0 mt-3 w-52 overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/20 bg-gradient-to-b from-indigo-600 to-purple-700">
          <li>
            <NavLink to="/" className={({ isActive }) => `${isActive ? 'bg-white/10 text-yellow-300' : 'text-white'} block px-4 py-3`} onClick={() => setOpen(false)}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/hero" className={({ isActive }) => `${isActive ? 'bg-white/10 text-yellow-300' : 'text-white'} block px-4 py-3`} onClick={() => setOpen(false)}>Hero</NavLink>
          </li>
          <li>
            <NavLink to="/hero2" className={({ isActive }) => `${isActive ? 'bg-white/10 text-yellow-300' : 'text-white'} block px-4 py-3`} onClick={() => setOpen(false)}>hero2</NavLink>
          </li>
             <li>
            <NavLink to="/hero3" className={({ isActive }) => `${isActive ? 'bg-white/10 text-yellow-300' : 'text-white'} block px-4 py-3`} onClick={() => setOpen(false)}>hero3</NavLink>
          </li>
          <li>
            <NavLink to="/hero4" className={({ isActive }) => `${isActive ? 'bg-white/10 text-yellow-300' : 'text-white'} block px-4 py-3`} onClick={() => setOpen(false)}>hero4</NavLink>
          </li>
        </ul>
      )}
    </div>
  )
}