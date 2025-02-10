import React from 'react'
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiOutlineSearch,
} from 'react-icons/ai'
import Places from './Places'
import Discover from './Discover'
import { Link } from 'react-router'
import { useNavigate } from 'react-router'
import Navbar from './Navbar'
const Home = () => {
  const navigate = useNavigate()
  return (
    <React.Fragment>
      <div className="w-full h-screen relative">
        <img
          src="images/mesuem.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <Navbar />

      <div className="absolute top-0 h-screen flex flex-col space-y-10 justify-center items-center bg-black opacity-75 xl:w-1/3 sm:w-1/2 z-0">
        <div className="text-white text-center space-y-5">
          <h2 className="text-2xl font-bold cursor-default">D I S C O V E R</h2>
          <h1 className="text-5xl font-bold cursor-default">I N D I A</h1>
          <p className="mx-10 text-gray-400 cursor-default">
            Where Every Street Tells a Story, Every Meal is an Experience, and
            Every Destination Feels Like Home.
          </p>
        </div>

        <div className="space-x-4">
          <button className="bg-gray-300 py-2 px-5 rounded-md hover:bg-white hover:duration-300">
            Road Map
          </button>
          <button
            className="text-gray-300 border rounded-md py-2 px-5 hover:bg-white hover:text-black hover:duration-300"
            onClick={() => navigate('/destination')}
          >
            Book a Trip
          </button>
        </div>

        <div className="text-white flex space-x-5">
          <AiFillFacebook size={'2rem'} className="cursor-pointer" />
          <AiFillInstagram size={'2rem'} className="cursor-pointer" />
          <AiFillTwitterSquare size={'2rem'} className="cursor-pointer" />
        </div>
      </div>
      <Places />
      <Discover />
    </React.Fragment>
  )
}

export default Home
