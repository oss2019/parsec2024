import React from "react"
import { IoLocationSharp } from "react-icons/io5"
import { FaClock } from "react-icons/fa6"
function Cultural() {
  return (
    <div className="relative mx-auto max-w-page_lg md:px-8 px-4 pt-32 overflow-x-hidden overflow-y-hidden">
      {/* Card 1 */}
      <div>
        <div className="w-full max-w-[900px] mx-auto border border-yellow-500 rounded-xl bg-black/50 backdrop-blur-sm">
          <div className="w-full sm:flex rounded-xl p-4">
            <div className="w-full sm:w-7/12 min-h-[300px] my-2">
              <div className="flex flex-col-reverse justify-end sm:flex-row gap-2">
                <div className="w-full sm:w-1/4 justify-center p-2">
                  <div className="w-full max-w-[150px] h-[150px] p-1 bg-gradient-to-tr from-yellow-500 to-orange-500 mx-auto">
                    <div className="flex justify-center items-center h-full w-full bg-black p-1">
                      <span className="font-semibold text-[60px] text-yellow-500">
                        03
                      </span>
                    </div>
                  </div>
                  <div className="w-full text-center mt-4 font-semibold text-yellow-500 text-[30px]">
                    FEB
                  </div>
                </div>
                <div className="w-full sm:w-3/4">
                  <div className="text-[30px] w-full text-center text-yellow-500">
                    ZABAAN SAMBHALKE
                  </div>
                  <div className="sm:flex justify-around">
                    <span className="flex py-1 px-2 items-center my-2">
                      <IoLocationSharp />
                      <span className="ml-2">F-600, CLT, IIT-Dh</span>
                    </span>
                    <span className="flex py-1 px-2 items-center my-2">
                      <FaClock />
                      <span className="ml-2">4:30 PM Onwards</span>
                    </span>
                  </div>
                  <div></div>
                </div>
              </div>
              <div>
                <div className="w-full text-center font-semibold">
                  Book Tickets
                </div>
                <div className="flex justify-center">
                  <div className="flex gap-2 flex-wrap justify-evenly">
                    <div className="mt-1">
                      <a
                        href={
                          "https://docs.google.com/forms/d/e/1FAIpQLSd5Vuq4MzQY6UbjawkyBbVLJDZ0Ojop-DoMnKV5XYdFzNDwjA/viewform"
                        }
                        target="_blank"
                      >
                        <button
                          type="button"
                          className=" text-white bg-gradient-to-br from-yellow-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-800 rounded-lg text-sm px-5 py-2.5 text-center font-hero font-semibol"
                        >
                          Front Row
                        </button>
                      </a>
                    </div>
                    <div className="mt-1">
                      <a
                        href={
                          "https://docs.google.com/forms/d/e/1FAIpQLSdjDiN22URPajrX8yOAgwCgiqlYZBcYLUPh9BBT885CPE8LcQ/viewform"
                        }
                        target="_blank"
                      >
                        <button
                          type="button"
                          className=" text-white bg-gradient-to-br from-yellow-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-800 rounded-lg text-sm px-5 py-2.5 text-center font-hero font-semibol"
                        >
                          Middle Half
                        </button>
                      </a>
                    </div>
                    <div className="mt-1">
                      <a
                        href={
                          "https://docs.google.com/forms/d/e/1FAIpQLSc8YQOkI_cvnsq6YMGUddmWqIw-aClWJ79KgoumBrR4PhQ2Yw/viewform"
                        }
                        target="_blank"
                      >
                        <button
                          type="button"
                          className=" text-white bg-gradient-to-br from-yellow-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-800 rounded-lg text-sm px-5 py-2.5 text-center font-hero font-semibol"
                        >
                          Back Half
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="
              min-h-[300px] 
              w-full 
              sm:w-5/12
              relative
              max-[640px]:rounded-b-xl 
              sm:rounded-r-xl
              "
              style={{
                backgroundImage: `url(${"/Images/Cultural/standup_1.png"})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        </div>
      </div>
      {/* Card-2 */}
      <div className="mt-20">
        <div className="w-full max-w-[900px] mx-auto border border-yellow-500 rounded-xl bg-black/50 backdrop-blur-sm">
          <div className="w-full sm:flex rounded-xl p-4">
            <div className="w-full sm:w-7/12 min-h-[300px] my-2">
              <div className="flex flex-col-reverse justify-end sm:flex-row">
                <div className="w-full sm:w-1/4 justify-center p-2">
                  <div className="w-full max-w-[150px] h-[150px] p-1 bg-gradient-to-tr from-yellow-500 to-orange-500 mx-auto">
                    <div className="flex justify-center items-center h-full w-full bg-black">
                      <span className="font-semibold text-[60px] text-yellow-500">
                        04
                      </span>
                    </div>
                  </div>
                  <div className="w-full text-center mt-4 font-semibold text-yellow-500 text-[30px]">
                    FEB
                  </div>
                </div>
                <div className="w-full sm:w-3/4">
                  <div className="text-[30px] w-full text-center text-yellow-500">
                    BINARY BEATS
                  </div>
                  <div>
                    <span className="flex py-1 px-2 items-center my-2">
                      <IoLocationSharp />
                      <span className="ml-2">Helipad, IIT-Dh</span>
                    </span>
                    <span className="flex py-1 px-2 items-center my-2">
                      <FaClock />
                      <span className="ml-2">Food Court - 2:00 PM Onwards</span>
                    </span>
                    <span className="flex py-1 px-2 items-center my-2">
                      <FaClock />
                      <span className="ml-2">DJ - 5:00 PM Onwards</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="mt-1">
                  <a
                    href={"https://forms.gle/xa2F5HzvNeexreD78"}
                    target="_blank"
                  >
                    <button
                      type="button"
                      className=" text-white bg-gradient-to-br from-yellow-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 rounded-lg text-sm px-5 py-2.5 text-center font-hero font-semibold"
                    >
                      Book Passes
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="
              min-h-[300px] 
              w-full 
              sm:w-5/12
              relative
              max-[640px]:rounded-b-xl 
              sm:rounded-r-xl
              "
              style={{
                backgroundImage: `url(${"/Images/Cultural/BinaryBeatsPoster.png"})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[900px] mx-auto mt-8 text-center">
        <span className="font-bold text-blue-500">NOTE:</span> The above booking
        methods are applicable only for non IIT-Dh students.
      </div>
    </div>
  )
}

export default Cultural
