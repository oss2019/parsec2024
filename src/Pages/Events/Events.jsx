import "./Events.css"
import EventCard from "./EventCard/EventCard"
import EventsData from "./data"
function Events() {
  const eventData = {
    heading: "Event Heading",
    content: "Event Content",
    knowMoreLink: "https://example.com",
    image:'Images/Eventimage.png' ,
  };
  return (
      <div className="relative main-wrapper">
      <div className="main">
                 <EventCard
                    leftSideImage='Images/Eventimage.png' // Example value for leftSideImage
                    data={eventData} 
                    number={1} 
                  /> 
                  <EventCard
                    leftSideImage='Images/Eventimage.png' // Example value for leftSideImage
                    data={eventData} 
                    number={2} 
                  /> 
                  <EventCard
                    leftSideImage='Images/Eventimage.png' // Example value for leftSideImage
                    data={eventData} 
                    number={3} 
                  /> 
        </div>
      </div>            
  )
}

export default Events