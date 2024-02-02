import "./Home.css"
import Sponcer from "../../Components/Sponcers/Sponcer"
import SponcerCard from "../../Components/Sponcers/SponcerCard"

function Home() {
  return (
    <>
      <div className="mx-auto max-w-page_lg md:px-8 px-4 overflow-hidden">
        <section id="animate-1">
          <div className="relative h-screen w-full">
            <div className="text-5xl mt-8 md:text-8xl max-[350px]:text-4xl md:mt-[-100px] font-semibold font-hero absolute top-1/2 left-0">
              <div>Parsec 4.0</div>
            </div>
            <div className="text-5xl max-[350px]:text-3xl md:mt-12 mt-24 md:text-7xl font-medium absolute top-1/2">
              <div>Annual techfest, </div>
              <div>
                <span className="gradient-text">IIT</span> Dharwad
              </div>
              <div className="text-2xl mt-4">2nd Feb - 4th Feb, 2024</div>
            </div>
          </div>
          <div className="relative">
            <div className="max-w-[1000px] text-xl rounded-2xl mx-auto my-28 p-8 bg-[#000006] bg-opacity-80">
              Witness the collision of genius minds and cutting-edge technology
              at IIT Dharwad's most electrifying{" "}
              <span className="gradient-text">Technical Fest - Parsec 4.0</span>
              , a rendevous with the future! Get ready to dive into the sea of
              circuits & algorithms, machines & robots, bytes and bits, zeroes &
              ones. Let your imagination and innovation take flight in this
              celebration of brilliance and creativity.
            </div>
          </div>
        </section>

        <section>
          <div className="relative w-full" id="animate-2">
            <div className="w-full h-28"></div>
            <div className="w-full md:w-1/2">
              <div className="font-hero text-4xl font-semibold md:text-5xl text-center md:text-left">
                About us
              </div>
              <div className="text-xl mt-4 rounded-2xl p-8 bg-black bg-opacity-80">
                <div>
                  Parsec provides an excellent platform for aspiring
                  technologists to showcase their skills and serves as an ideal
                  launchpad for innovative ideas. With a diverse range of
                  events, competitions, workshops, and expert lectures, the
                  festival aims to reignite the enthusiasm for technology and
                  business among the nation's brightest minds. Beyond the
                  technical aspects, Parsec ensures a vibrant and enjoyable
                  experience with a variety of cultural events. All are invited
                  to join this technocultural festival for a blend of learning
                  and fun!
                </div>
              </div>
            </div>
            <div className="w-full h-28"></div>
          </div>
          <div className="w-full h-[200px]" id="animate-3"></div>
          <div className="w-full h-[800px]"></div>
        </section>

        <section className="relative">
          <div id="animate-4">
            <div className="text-4xl md:text-5xl font-semibold font-hero text-center">
              Our Sponsors
            </div>
            <div className="mt-10">
              <Sponcer title={"Main Sponsors"}>
                <SponcerCard
                  imageUrl={"/Images/sponsors/big_mishra_logo.png"}
                />
                <SponcerCard imageUrl={"/Images/sponsors/myle_logo).png"} />
                {/* <SponcerCard imageUrl={"/Images/sponsors/github.png"} />
                <SponcerCard imageUrl={"/Images/sponsors/codingNinjas.png"} /> */}
              </Sponcer>
            </div>
          </div>
        </section>

        <section className="relative">
          <div id="animate-5" className="w-full h-[800px]"></div>
          <div className="w-full h-[200px]"></div>
          <div id="animate-6">
            <div className="w-full relative">
              <div className="font-hero top-[50px] text-4xl text-center font-semibold relative max-[880px]:top-[348px]">
                What you get
              </div>
              <div className="flex flex-wrap justify-around mt-96 px-8">
                <div
                  className="max-w-[400px] 
                    rounded-lg 
                    p-4 my-8 
                    relative
                    bg-pink-600/80
                    pink-shadow
                  "
                >
                  <div className="font-hero text-xl font-semibold text-center">
                    Experience
                  </div>
                  <div className="mt-8 text-[1.1rem]">
                    Participate in events designed to bring out the best in you
                  </div>
                </div>
                <div
                  className="
                    max-w-[400px] 
                    rounded-lg  
                    p-4 
                    my-8 
                    relative 
                    overflow-hidden
                    bg-amber-500/80
                    yellow-shadow
                  "
                >
                  <div className="font-hero text-xl font-semibold text-center">
                    Networking
                  </div>
                  <div className="mt-8 text-[1.1rem]">
                    Connect with and exchange ideas with participants and also
                    the tech speakers
                  </div>
                </div>
                <div
                  className="
                    max-w-[400px] 
                    rounded-lg 
                    p-4 
                    my-8 
                    relative
                    bg-violet-600/80
                    violet-shadow 
                  "
                >
                  <div className="font-hero text-xl font-semibold text-center">
                    Goodies
                  </div>
                  <div className="mt-8 text-[1.1rem]">
                    Each participant gets goodies! If you manage to win an
                    event, you can get even better ones!
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[100px]"></div>
        </section>
      </div>
    </>
  )
}

export default Home
