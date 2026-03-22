const About = () => {
  return (
    <section className="grid md:grid-cols-2 p-10 gap-10 items-center ">
      <div className="flex flex-col gap-6">
        <h1 className="font-serif font-bold text-[clamp(1.5rem,3vw,5.2rem)] leading-[1.2]">About Brew's</h1>
        <img src="./AboutBg.png" alt="Barista Crafting Coffee" className="rounded-[2.5rem] shadow-sm w-full object-cover" />
      </div>
      
      <div className="space-y-12">
        <div>
          <h1 className="font-serif font-bold text-[clamp(1.2rem,2.5vw,2rem)] leading-[1.2] mb-3">Brew’s café</h1>
          <p className="text-stone-700 leading-relaxed text-lg">
            At Brew’s, we believe the perfect cup is a blend of technical precision and artistic passion. 
            Our space is designed as a sanctuary for those who appreciate a minimal aesthetic paired 
            with a premium sensory experience.
          </p>
        </div>

        <div>
          <h1 className="font-serif font-bold text-[clamp(1.2rem,2.5vw,2rem)] leading-[1.2] mb-3">Bean sourcing</h1>
          <p className="text-stone-700 leading-relaxed text-lg">
            We partner with independent farmers to source fair-trade, organic beans. Each batch is 
            meticulously roasted to highlight its unique origin profile, ensuring that every 
            sip tells a story of sustainable craftsmanship.
          </p>
        </div>

        <div>
          <h1 className="font-serif font-bold text-[clamp(1.2rem,2.5vw,2rem)] leading-[1.2] mb-3">Community vibe</h1>
          <p className="text-stone-700 leading-relaxed text-lg">
            Beyond the espresso, we are a hub for local creators. Whether you're debugging code 
            or sketching your next project, our cozy atmosphere and warm community are 
            built to inspire your best work.
          </p>
        </div>

        <button className="btn border-none bg-[#6F4E37] hover:bg-[#5D402E] text-white rounded-full px-8 md:px-10 h-14 md:h-16 text-lg capitalize font-medium transition-all hover:scale-105 shadow-lg mt-4">
          View Menu
        </button>
      </div>
    </section>
  )
}

export default About