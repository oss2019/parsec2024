import "./Events.css"
import EventCard from "./EventCard/EventCard"
import EventsData from "./data"
function Events() {
  const eventData = {
    heading: "Event Heading",
    content: "Event Content",
    knowMoreLink: "https://example.com",
    image: "Images/Eventimage.png",
  }
  return (
    <div className="relative mx-auto max-w-page_lg md:px-8 px-4 pt-32 overflow-x-hidden overflow-y-hidden">
      <div className="font-hero text-center font-semibold text-4xl">Events</div>
      <div className="mt-8">
        <EventCard />
        <EventCard flipLayout={true} />
        <EventCard />
      </div>
    </div>
  )
}

export default Events
