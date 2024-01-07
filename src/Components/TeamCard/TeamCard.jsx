import { BsInstagram, BsLinkedin } from "react-icons/bs"
import { FiMail } from "react-icons/fi"
const TeamCard = ({ data }) => {
  return (
    <div
      className="
        max-w-[210px] 
        w-full
        mx-4 
        my-8 
        relative
        rounded-xl
        bg-[hsl(var(--default-dark)/0.2)]
        shadow-medium
        backdrop-blur-[8px]
        backdrop-saturate-[1.8]
        outline
        outline-2
        outline-[transparent]
      "
    >
      {/* <div
        className="absolute inset-0 h-[300px] w-[300px] top-2/3 left-1/2"
        style={{
          transform: "translate(-50%, -50%)",
          backgroundImage: "url(/Images/blue-purple.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></div> */}
      {data.subtitle && (
        <div className="absolute w-full text-center bottom-[-40px] font-hero">
          Subtitle
        </div>
      )}

      <div
        className="
          flex 
          flex-col 
          justify-center 
          p-3 
          rounded-xl 
          w-full 
          relative 
          z-30 
        "
      >
        <div>
          <div className="w-full h-full">
            <div
              className="w-full pt-[100%] rounded-lg outline outline-2 outline-transparent shadow-medium"
              style={{
                backgroundImage: `url(${data.image})`,
                backgroundPosition: "center top",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        </div>
        <div className="text-center font-semibold mt-4">{data.name}</div>
        <div>
          <div className="flex justify-around mt-4 mb-2 px-4">
            {data.email && data.email !== "" && (
              <a
                target="_blank"
                className="text-xl hover:scale-110"
                href={`mailto:${data.email}`}
              >
                <span className="text-red-500 cursor-pointer">
                  <FiMail />
                </span>
              </a>
            )}
            {data.linkedin && data.linkedin !== "" && (
              <a
                target="_blank"
                className="text-xl hover:scale-110"
                href={data.linkedin}
              >
                <span className="text-blue-500 cursor-pointer">
                  <BsLinkedin />
                </span>
              </a>
            )}
            {data.instagram && data.instagram !== "" && (
              <a
                target="_blank"
                className="text-xl hover:scale-110"
                href={data.instagram}
              >
                <span className="text-pink-500 cursor-pointer">
                  <BsInstagram />
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamCard
