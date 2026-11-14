
import { useState } from 'react'
import { Menu, X, UserRound, ShoppingCart } from 'lucide-react'
import logo from '../assets/CooledturedLogo.svg'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="relative z-50 bg-[#1C2653] text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Brand */}
        <a href="/" className="flex items-center gap-3">
            <img
             src={logo}
             alt="Cooledtured logo"
             className="h-10 w-10 object-contain"
            />
            <a href="#" className="text-xl font-extrabold tracking-tight">
                cooledtured
                <span className="text-blue-300"> 'n clean</span>
            </a>
        </a> 

       

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#services" className="hover:text-blue-300 transition">
            Services
          </a>
          <a href="#how-it-works" className="hover:text-blue-300 transition">
            How It Works
          </a>
          <a href="#pricing" className="hover:text-blue-300 transition">
            Pricing
          </a>
          <a href="#about" className="hover:text-blue-300 transition">
            About Us
          </a>
        </div>

        {/* Account and Booking */}
        <div className="hidden items-center gap-4 md:flex">
          <button className="flex items-center gap-2 hover:text-blue-300">
            <UserRound size={19} />
            Log In
          </button>

          <a
            href="#booking"
            className="rounded-lg bg-[#3655C7] px-5 py-3 font-semibold hover:bg-blue-600 transition"
          >
            Schedule Pickup
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="flex flex-col gap-5 border-t border-white/10 px-6 py-6 md:hidden">
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How It Works</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
          <a href="#booking" onClick={() => setMenuOpen(false)}>
            Schedule Pickup
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
