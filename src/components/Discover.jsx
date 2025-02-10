import React from 'react'

const Discover = () => {
  return (
    <div className="w-4/5 m-auto cursor-default">
      <h1 className="text-4xl font-bold text-center">Discover</h1>
      <div className="w-full m-auto flex flex-col md:flex-row space-y-10 md:space-x-10 justify-between items-center py-10">
        <div className="w-full space-y-5">
          <img
            className="w-full drop-shadow-2xl rounded-lg border-8 border-stones-700 cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVtYmFpfGVufDB8fDB8fHww"
            alt=""
          />
          <div>
            <h2 className="font-bold">Mumbai.</h2>
            <h1 className="text-2xl font-bold">
              The city that never sleeps, where dreams take flight.
            </h1>
          </div>
          <p className="text-sm">
            Mumbai, the bustling heart of India, is a vibrant mix of heritage,
            culture, and modernity. From the iconic Gateway of India to the
            serene Marine Drive, the city offers a unique blend of history and
            urban charm. Explore the lively streets of Colaba, savor local
            delicacies like Vada Pav, and experience the Bollywood magic.
            Whether it's the beaches, nightlife, or shopping, Mumbai never fails
            to mesmerize.
          </p>
        </div>
        <div className="w-full space-y-4 text-left">
          <h2 className="font-bold">Kerala.</h2>
          <h1 className="font-bold text-2xl">
            Cruise Kerala's blissful backwaters.
          </h1>
          <p className="text-sm">
            A maze of small canals, brackish lagoons and silvery rivers draining
            into the Arabian Sea, the backwaters of Kerala offer a completely
            different view of India. You can choose your own adventure as you
            make your way through this tangle of channels and lakes, dropping in
            on communities that fish and farm along the waterlogged channels.
          </p>
          <img
            className="drop-shadow-2xl border-8 border-stones-700 rounded-lg cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="https://images.unsplash.com/photo-1645974459912-43beab59eebf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2VyYWxhJTIwYmFja3dhdGVyfGVufDB8fDB8fHww"
            alt=""
          />
        </div>
      </div>

      <div className="w-full h-[400px] my-10 relative">
        <img
          className="w-full h-full object-cover "
          src="images/image-8.jpg"
          alt=""
        />
        <div className="w-full h-full absolute top-0 flex justify-center items-center">
          <h1 className="text-4xl text-white font-bold px-5 py-2 border cursor-pointer hover:bg-white hover:text-gray-500 hover:duration-300">
            View Details
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Discover
