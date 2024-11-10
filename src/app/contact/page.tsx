import React from 'react'

function Contact() {
  return (
    <div>
      <h1 className='text-2xl text-center font-bold mt-5'>Contact Me</h1>
      <section className=" body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe
        width="100%"
        height="100%"
        className="absolute inset-0"
        frameBorder={0}
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924237.7091839124!2d66.49598340315225!3d25.192983725749375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1728617876287!5m2!1sen!2s" 
        style={{ filter: " contrast(1.2) opacity(0.4)" }}
      />
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-black tracking-widest text-sm">
            Karachi Sindh, Pakistan
          </h2>
      
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-bold text-gray-900 tracking-widest text-xs">
            EMAIL
          </h2>
          <a className="text-black leading-relaxed">rahmansiddiqui331@gmail.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-sm mt-4">
            PHONE
            <p className='mt-1 text-xs text-gray-900 title-font font-semibold '>0335-8732567</p>
          </h2>
        </div>
      </div>
    </div>
    
    
    
    <div className="lg:w-1/3 md:w-1/2 bg-gray-200 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 rounded-lg">

    <form action="https://formspree.io/f/mdkoklyv" method='POST'>
      <h2 className="text-black text-2xl mb-1 font-bold title-font text-center">
        Send Your Message
      </h2>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-md text-black">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-md text-black">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-md text-black">
           Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <button className="text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Send 
      </button>
      </form>
    </div>
    
  </div>
  
  
</section>

    </div>
    
  )
}

export default Contact




