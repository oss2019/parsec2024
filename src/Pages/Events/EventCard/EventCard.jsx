import { IoLocationSharp } from "react-icons/io5"
import { FaClock } from "react-icons/fa6"

export default function EventCard({ flipLayout = false,data,displayImage="/Images/mascot.png" }) {
    return (
    <>
      <div className={`w-full flex my-12 ${flipLayout && "justify-end"}`}>
        {/**outer most full width container */}
        <div className="w-full min-[900px]:w-[900px]">
          <div className="w-full sm:flex rounded-xl">
            <div className="w-full sm:w-7/12 min-h-[300px] bg-gray-800/40 backdrop-blur-[12px] py-9 px-4 relative event-block">
              <div
                className={`absolute w-[600px] h-[600px] top-[-100px] left-[-100px]`}
                style={{
                  backgroundImage: "url('/Images/blue-purple.svg')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  transform: "rotate(180deg)",
                }}
              ></div>
              <div className="relative z-10">
                <div className="font-hero font-semibold text-xl">
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-500 to-purple-400 group-hover:from-red-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  {data.heading}
                  </span>
                  </button>
                </div>
                <div className="text-sm mt-2">
                  {data.content}
                </div>
                <div className="text-xs mt-4">
                  <div className="flex flex-wrap items-center">
                    <div>
                      <span className="flex py-1 px-2 items-center rounded-full bg-blue-500/90 my-2">
                        <IoLocationSharp />
                        <span className="ml-2">{data.location}</span>
                      </span>
                      <span className="flex py-1 px-2 items-center rounded-full bg-blue-500/90 my-2">
                        <FaClock />
                        <span className="ml-2">{data.timing}</span>
                      </span>
                    </div>
                  </div>

                  <div className="mt-1">
                    <a>
                      <button
                        type="button"
                        className="py-1 px-4 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 font-hero font-semibold "
                      >
                        Register
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`min-h-[300px] w-full sm:w-5/12 flex flex-col justify-center relative z-20 max-[640px]:rounded-b-xl sm:rounded-r-xl`}
              style={{
                backgroundImage: `url(${"/Images/mascot.png"})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
              }} 
            ></div>
          </div>
        </div>
      </div>
    </>
  )
}