import React from "react";

const ContactForm = () => {
  return (
    <section id="contact" className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-20 pb-20 z-[20]">
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/encryption-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
      <div className="w-[90%] md:w-[50%] z-[20]">
        <h1 className="text-4xl font-bold text-white text-center mb-10">
          Contact Me
        </h1>
        <form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-2 rounded-lg border border-gray-400 bg-gray-800 text-white focus:outline-none focus:border-purple-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-2 rounded-lg border border-gray-400 bg-gray-800 text-white focus:outline-none focus:border-purple-500"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="px-4 py-2 rounded-lg border border-gray-400 bg-gray-800 text-white focus:outline-none focus:border-purple-500"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-purple-600 text-white font-bold hover:bg-purple-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;