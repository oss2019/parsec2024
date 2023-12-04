import "./Home.css"
function Home() {
  return (
    <>
      <div className="mx-auto max-w-page_lg px-8">
        <section id="hero-section-1">
          <div className="relative h-screen w-full">
            <div className="text-5xl mt-8 md:text-8xl max-[350px]:text-4xl md:mt-[-100px] font-semibold font-hero absolute top-1/2">
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
            <div className="max-w-[1000px] text-xl rounded-2xl mx-auto my-16 p-8 bg-black bg-opacity-60">
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

        <section id="hero-section-2">
          <div className="section-main">
            <div className="hero-content-wrapper">
              <div className="hero-main">
                <h1>ABOUT US</h1>
                <div className={"hero-quote-wrapper"}>
                  <div className={"hero-quote"}>
                    Parsec 2024 is the fourth edition of the Science and
                    Technology festival of IIT Dharwad.Parsec is an unparalleled
                    opportunity for budding technologists to showcase their
                    technical prowess and acts as the perfect launchpad for
                    brilliant ideas.<br></br>
                    Parsec boasts a wide array of events, competitions,
                    workshops and lectures designed to rekindle the passion for
                    technology and business among the brightest minds of the
                    nation. The fest will also host lectures by experts from a
                    multitude of fields.<br></br>
                    In addition to the plethora of technical events, Parsec
                    promises to be a fun enthused extravaganza with numerous
                    cultural events for the participants to enjoy. We welcome
                    everyone to be a part of this technocultural festival!!
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="home-animate-2" className="buffer-space"></div>
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
