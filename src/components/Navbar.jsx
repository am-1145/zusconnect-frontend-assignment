import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineMenu, HiX } from 'react-icons/hi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full  mb-16">
      <nav className="w-full absolute top-0 p-3 flex justify-between items-center text-white z-10 ">
        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold cursor-pointer">भारत</h1>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? <HiX size={30} /> : <HiOutlineMenu size={30} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="flex space-x-5 font-bold cursor-pointer text-gray-300">
            <li className="hover:text-white">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-white">About India</li>
            <li className="hover:text-white">
              <Link to="/destination">Explore Destination</Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu (Slide-in) */}
        {isOpen && (
          <div className="md:hidden absolute top-14 left-0 w-full bg-neutral-500 text-white p-4">
            <ul className="flex flex-col space-y-4 font-bold cursor-pointer text-gray-300">
              <li className="hover:text-white">
                <Link to="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              </li>
              <li className="hover:text-white" onClick={() => setIsOpen(false)}>
                About India
              </li>

              <li className="hover:text-white">
                <Link to="/destination" onClick={() => setIsOpen(false)}>
                  Explore Destination
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar
