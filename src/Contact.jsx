const Contact = () => {
  return (
    <section className=" py-20 px-6 md:px-20 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-serif font-bold text-[clamp(2rem,5vw,3.5rem)] mb-12 text-center lg:text-left">
          Get in Touch
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-stone-100">
            <form className="space-y-6">
              <div className="form-control">
                <label className="label"><span className="label-text font-semibold">Full Name</span></label>
                <input type="text" placeholder="Brew Haven" className="input input-bordered bg-stone-50 focus:border-[#6F4E37] focus:outline-none" />
              </div>

              <div className="form-control">
                <label className="label"><span className="label-text font-semibold">Email Address</span></label>
                <input type="email" placeholder="brew@example.com" className="input input-bordered bg-stone-50 focus:border-[#6F4E37] focus:outline-none" />
              </div>

              <div className="form-control">
                <label className="label"><span className="label-text font-semibold">Your Message</span></label>
                <textarea className="textarea textarea-bordered h-32 bg-stone-50 focus:border-[#6F4E37] focus:outline-none" placeholder="Tell us about your coffee preferences..."></textarea>
              </div>

              <button className="btn w-full bg-[#6F4E37] hover:bg-[#5D402E] border-none text-white rounded-full h-14 text-lg capitalize shadow-md transition-all hover:scale-[1.02]">
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT SIDE: Info & Map Placeholder */}
          <div className="space-y-10 py-4">
            <div>
              <h2 className="text-2xl font-serif font-bold mb-4">Visit Our Haven</h2>
              <p className="text-stone-600 leading-relaxed max-w-sm">
                Located in the heart of Toronto, we offer a cozy atmosphere for creators and coffee lovers alike.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-[#6F4E37]/10 p-3 rounded-full text-[#6F4E37]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>123 Coffee St, Toronto, Canada</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#6F4E37]/10 p-3 rounded-full text-[#6F4E37]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span>Mon - Sun: 8:00 AM - 10:00 PM</span>
              </div>
            </div>

            <div className="h-60 w-full rounded-[2rem] overflow-hidden shadow-inner border border-stone-200">
              <iframe
                title="Toronto Coffee Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.2642426998634!2d-79.3831843!3d43.6455246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d2a37303c5%3A0x90998522fee97f86!2sUnion%20Station!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                className="w-full h-full border-0 grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;