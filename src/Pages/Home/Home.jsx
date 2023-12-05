import "./Home.css"
function Home() {
  return (
    <>
      <div className="mx-auto max-w-page_lg md:px-8 px-4">
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
            </div>
          </div>
          <div className="relative">
            <div className="max-w-[1000px] text-xl rounded-2xl mx-auto my-28 p-8 bg-black bg-opacity-80">
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
              <div className="font-hero text-5xl">About us</div>
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
          <div id="animate-3" className="w-full h-[600px]"></div>
        </section>

        <section id="hero-section-3" className="section-main">
          <div className="hero-content-wrapper">
            <div className="hero-main">
              <h1>Sponsors</h1>
              <div className={"hero-quote-wrapper"}>
                <div className={"hero-quote"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-main">
          <div className="hero-content-wrapper">
            <div className="hero-main">
              <h1>Lorem ipsum dolor sit amet</h1>
              <div className={"hero-quote-wrapper"}>
                <div className={"hero-quote"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-main">
          <div className="hero-content-wrapper">
            <div className="hero-main">
              <h1>Lorem ipsum dolor sit amet</h1>
              <div className={"hero-quote-wrapper"}>
                <div className={"hero-quote"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
