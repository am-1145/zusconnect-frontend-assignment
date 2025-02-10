import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import Recommendations from './Recommendation'

const Places = () => {
  return (
    <div className="w-4/5 m-auto cursor-default">
      <div className="w-full xl:w-1/2 m-auto text-center my-10 space-y-5">
        <h1 className="text-4xl font-bold">Places not to be missed</h1>
        <p>
          Discover stunning landscapes, vibrant cities, and hidden gems around
          the world. From serene beaches to towering peaks, each destination
          offers a unique experience. Let your wanderlust guide you to
          unforgettable adventures!{' '}
        </p>
      </div>

      <div className="inline md:grid grid-rows-3 lg:grid-rows-2 grid-flow-col gap-4 w-full lg:h-[450px] pb-10 border-b space-y-6 md:space-y-0">
        <div className="row-span-1 col-span-2">
          <img
            className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="images/img5.jpg"
            alt=""
          />
        </div>
        <div className="lg:row-span-1 lg:col-span-1 md:col-span-2">
          <img
            className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="images/img3.jpg"
            alt=""
          />
        </div>
        <div className="lg:row-span-1 lg:col-span-1 md:col-span-2">
          <img
            className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="images/img2.jpg"
            alt=""
          />
        </div>
        <div className="lg:row-span-2 lg:col-span-1 md:col-span-2 md:row-span-1">
          <img
            className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="images/img1.jpg"
            alt=""
          />
        </div>
        <div className="lg:row-span-1 lg:col-span-1 md:col-span-2">
          <img
            className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="images/img4.jpg"
            alt=""
          />
        </div>
        <div className="lg:row-span-1 lg:col-span-1 md:col-span-2">
          <img
            className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="images/img6.jpg"
            alt=""
          />
        </div>
      </div>

      {/* <div className="my-10 text-center">
        <h1 className="text-4xl font-bold">Our Recomendation</h1>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-10 my-10 justify-items-center items-center pb-10 border-b">
          <div className="drop-shadow-2xl text-left rounded space-y-2 bg-white cursor-pointer opacity-80 hover:opacity-100 duration-200">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="images/image-8.jpg"
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">Lorem, ipsum.</p>
                <p className="font-bold">$500</p>
              </div>
              <p className="font-semibold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facere!
              </p>
              <div className="flex justify-between items-center">
                <h2>15 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>4.8</span>
                </p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-2xl text-left rounded space-y-2 bg-white cursor-pointer opacity-80 hover:opacity-100 duration-200">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="images/image-3.jpg"
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">Lorem, ipsum.</p>
                <p className="font-bold">$500</p>
              </div>
              <p className="font-semibold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facere!
              </p>
              <div className="flex justify-between items-center">
                <h2>15 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>4.8</span>
                </p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-2xl text-left rounded space-y-2 bg-white cursor-pointer opacity-80 hover:opacity-100 duration-200">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="images/image-2.jpg"
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">Lorem, ipsum.</p>
                <p className="font-bold">$500</p>
              </div>
              <p className="font-semibold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facere!
              </p>
              <div className="flex justify-between items-center">
                <h2>15 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>4.8</span>
                </p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-2xl text-left rounded space-y-2 bg-white cursor-pointer opacity-80 hover:opacity-100 duration-200">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="images/image-7.jpg"
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">Lorem, ipsum.</p>
                <p className="font-bold">$500</p>
              </div>
              <p className="font-semibold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facere!
              </p>
              <div className="flex justify-between items-center">
                <h2>15 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>4.8</span>
                </p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-2xl text-left rounded space-y-2 bg-white cursor-pointer opacity-80 hover:opacity-100 duration-200">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="images/image-8.jpg"
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">Lorem, ipsum.</p>
                <p className="font-bold">$500</p>
              </div>
              <p className="font-semibold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facere!
              </p>
              <div className="flex justify-between items-center">
                <h2>15 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>4.8</span>
                </p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-2xl text-left rounded space-y-2 bg-white cursor-pointer opacity-80 hover:opacity-100 duration-200">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="images/image-3.jpg"
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">Lorem, ipsum.</p>
                <p className="font-bold">$500</p>
              </div>
              <p className="font-semibold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facere!
              </p>
              <div className="flex justify-between items-center">
                <h2>15 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>4.8</span>
                </p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-2xl text-left rounded space-y-2 bg-white cursor-pointer opacity-80 hover:opacity-100 duration-200">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="images/image-2.jpg"
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">Lorem, ipsum.</p>
                <p className="font-bold">$500</p>
              </div>
              <p className="font-semibold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facere!
              </p>
              <div className="flex justify-between items-center">
                <h2>15 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>4.8</span>
                </p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-2xl text-left rounded space-y-2 bg-white cursor-pointer opacity-80 hover:opacity-100 duration-200">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="images/image-7.jpg"
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">Lorem, ipsum.</p>
                <p className="font-bold">$500</p>
              </div>
              <p className="font-semibold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facere!
              </p>
              <div className="flex justify-between items-center">
                <h2>15 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>4.8</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div> */}
      <Recommendations />
    </div>
  )
}

export default Places
