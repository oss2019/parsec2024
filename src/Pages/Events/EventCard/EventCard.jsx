import './EventCard.module.css';

export default function EventCard({ leftSideImage, data, number }) {
  return (
    <>
      <section className={`bg-white dark:bg-gray-900 event-${number}`}>
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-3xl dark:text-white">Event</h1>
              {data && <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">{data.content}</p>}
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                  Location
                  <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="#B8BDBF" fillRule="evenodd" d="M893,108 C889.134158,108 886.00001,111.145455 886.00001,115.026364 C885.998199,116.705455 886.246323,117.869091 887.196257,119.395455 C888.146191,120.920909 893,128 893,128 C893,128 897.853809,120.920909 898.803743,119.395455 C899.753677,117.869091 900.001801,116.705455 899.99999,115.026364 C899.99999,111.145455 896.865842,108 893,108 L893,108 Z M893.015749,118.636364 L892.999999,118.636364 L892.984249,118.636364 C891.057501,118.636364 889.497378,117.162864 889.500003,115.131989 C889.502628,113.100239 891.067126,111.636364 892.994749,111.636364 L892.999999,111.636364 L893.006124,111.636364 C894.932871,111.636364 896.497369,113.100239 896.499994,115.131989 C896.503494,117.162864 894.942496,118.636364 893.015749,118.636364 L893.015749,118.636364 Z" transform="translate(-881 -106)"/></svg>
              </a>
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                  21:00
                  <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="#555" d="M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M9.06976744,5.58139535 C8.6844525,5.58139535 8.37209302,5.89375483 8.37209302,6.27906977 L8.37209302,6.27906977 L8.37209302,11.8604651 C8.37209302,12.2457801 8.6844525,12.5581395 9.06976744,12.5581395 L9.06976744,12.5581395 L14.6511628,12.5581395 C15.0364777,12.5581395 15.3488372,12.2457801 15.3488372,11.8604651 C15.3488372,11.4751502 15.0364777,11.1627907 14.6511628,11.1627907 L14.6511628,11.1627907 L9.76744186,11.1627907 L9.76744186,6.27906977 C9.76744186,5.89375483 9.45508238,5.58139535 9.06976744,5.58139535 Z"/></svg>
              </a>
              <button type="button" className="text-red-700 ml-3 my-2 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Register</button>
            </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex rounded-lg">
              <img src={leftSideImage} alt="mockup" className="rounded-lg"/>
          </div>                
      </div>
</section>
    </>
  )
}
