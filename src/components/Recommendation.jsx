import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import mockData from '../mockData' // Import mock data

const Recommendations = () => {
  return (
    <div className="my-10 text-center">
      <h1 className="text-4xl font-bold">Our Recommendation</h1>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-10 my-10 justify-items-center items-center pb-10 border-b">
        {mockData.map((place) => (
          <div
            key={place.id}
            className="drop-shadow-2xl text-left rounded space-y-2 bg-white cursor-pointer opacity-80 hover:opacity-100 duration-200"
          >
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src={place.image}
              alt={place.title}
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">{place.category}</p>
                <p className="font-bold">{place.price}</p>
              </div>
              <p className="font-semibold">{place.title}</p>
              <div className="flex justify-between items-center">
                <h2>{place.duration}</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>{place.rating}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Recommendations
