import React, { useState } from 'react'
import mockDestinations from '../mockDestination'
import { Link, useNavigate } from 'react-router-dom'
import {
  AiOutlineCheck,
  AiOutlineCheckCircle,
  AiOutlineSearch,
} from 'react-icons/ai'
import { HiOutlineMenu, HiX } from 'react-icons/hi'
const Destination = () => {
  const [selectedDestination, setSelectedDestination] = useState(null)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [priceRange, setPriceRange] = useState('')
  const [showBuyNow, setShowBuyNow] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const navigate = useNavigate()

  const filteredDestinations = mockDestinations.filter((dest) => {
    return (
      (search === '' ||
        dest.name.toLowerCase().includes(search.toLowerCase())) &&
      (category === '' || dest.category === category) &&
      (priceRange === '' ||
        (priceRange === 'low' && dest.price < 10000) ||
        (priceRange === 'medium' &&
          dest.price >= 10000 &&
          dest.price < 18000) ||
        (priceRange === 'high' && dest.price >= 18000))
    )
  })

  return (
    <div className="">
      <div className="w-full bg-slate-500 mb-16">
        <nav className="w-full absolute top-0 p-3 flex justify-between items-center text-white z-10 bg-neutral-500">
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
                <li
                  className="hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
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
      <div className="container mx-auto p-5">
        <h1 className="text-4xl font-bold text-center mb-6">
          Explore Destinations
        </h1>

        {/* Search & Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search destinations..."
            className="border p-2 rounded w-60"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="border p-2 rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Beach">Beach</option>
            <option value="City">City</option>
            <option value="Mountain">Mountain</option>
            <option value="Backwaters">Backwaters</option>
            <option value="Adventure">Adventure</option>
            <option value="Spiritual">Spiritual</option>
            <option value="Historic">Historic</option>
            <option value="Wildlife">Wildlife</option>
            <option value="Hill Station">Hill Station</option>
            <option value="Luxury">Luxury</option>
          </select>

          <select
            className="border p-2 rounded"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="">All Prices</option>
            <option value="low">Below Rs.10000</option>
            <option value="medium">Rs.10000 - 18000</option>
            <option value="high">Above Rs.18000</option>
          </select>
        </div>

        {/* Destination Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-10 my-10 justify-items-center items-center pb-10 border-b">
          {filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              className="shadow-lg rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setSelectedDestination(dest)}
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-1/2 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <div className="flex justify-between">
                  <h3 className="text-lg font-semibold">{dest.name}</h3>
                  <p className="text-gray-500 font-bold">{dest.duration}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-500">{dest.category}</p>
                  <p className="text-red-500 font-bold">Rs.{dest.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedDestination && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-96">
              <img
                src={selectedDestination.image}
                alt={selectedDestination.name}
                className="w-full h-1/2 object-cover rounded-lg"
              />
              <h2 className="text-2xl font-bold mt-2">
                {selectedDestination.name}
              </h2>
              <p className="text-gray-500">{selectedDestination.category}</p>
              <p className="text-red-500 font-bold text-lg">
                Rs.{selectedDestination.price}
              </p>
              <p className="mt-2 text-sm text-gray-600">
                {selectedDestination.description ||
                  'This is a beautiful destination with amazing sights to explore.'}
              </p>
              <div className="flex justify-between mt-4">
                <button
                  className="bg-gray-400 text-white px-4 py-2 rounded"
                  onClick={() => setSelectedDestination(null)}
                >
                  Close
                </button>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded relative"
                  onClick={() => {
                    setShowBuyNow(true)
                    setTimeout(() => setShowBuyNow(false), 2000) // Hide after 2 seconds
                    setTimeout(() => setSelectedDestination(null), 2000) // Hide after 2 seconds
                  }}
                >
                  Buy Now
                </button>

                {showBuyNow && (
                  <div className="absolute  top-1/4  left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-row bg-green-900 p-4 rounded-lg shadow-lg border">
                    <p className="text-lg font-semibold color text-white flex gap-1 ">
                      <AiOutlineCheckCircle className="text-white text-xl top-2 mt-1 " />
                      <p className="">Purchase Successful!</p>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Destination
