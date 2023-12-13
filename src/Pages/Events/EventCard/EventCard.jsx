import { IoLocationSharp } from "react-icons/io5"
import { FaClock } from "react-icons/fa6"

export default function EventCard({ flipLayout = false, data, number }) {
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
                  Event Title
                </div>
                <div className="text-sm mt-2">
                  Step into the world of robotics with Rovernomics! Join our
                  exhilarating design competition and explore the vital role of
                  CAD designing in robotics. Teams will craft crucial components
                  for 3D printed robots, showcasing their innovation and
                  problem-solving prowess. From seasoned experts to aspiring
                  enthusiasts, Rovernomics invites you to unleash your
                  creativity and gain practical experience in designing for
                  robots. Get ready for an electrifying adventure that
                  celebrates the fusion of technology and imagination!
                </div>
                <div className="text-xs mt-4">
                  <div className="flex flex-wrap items-center">
                    <div>
                      <span className="flex py-1 px-2 items-center rounded-full bg-blue-500/90 my-2">
                        <IoLocationSharp />
                        <span className="ml-2">Central Lecture theatre</span>
                      </span>
                      <span className="flex py-1 px-2 items-center rounded-full bg-blue-500/90 my-2">
                        <FaClock />
                        <span className="ml-2">29th Feb, 3:00 PM - 5:00PM</span>
                      </span>
                    </div>
                  </div>

                  <div className="mt-1">
                    <a>
                      <button
                        type="button"
                        className="py-1 px-4 rounded-full font-hero text-sm font-semibold bg-gradient-to-r from-red-500 to-pink-500"
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
                backgroundImage: `url(${"/Images/Eventimage.png"})`,
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
