const Menu = () => {
  const coffeeItems = [
    {
      id: 1,
      name: "Caramel Macchiato",
      description: "Rich espresso combined with milk and vanilla-flavored syrup, topped with caramel.",
      price: "$5.50",
      image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Classic Cappuccino",
      description: "A perfect balance of espresso, steamed milk, and a deep layer of foam.",
      price: "$4.75",
      image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Vanilla Latte",
      description: "Our signature espresso with steamed milk and a touch of sweet vanilla syrup.",
      price: "$5.00",
      image: "coffee3.png",
    }
  ];

  return (
    <section className="py-20 px-6 md:px-20 lg:px-32 ">
      <div className="flex justify-between items-center mb-12">
        <h1 className="font-serif font-bold text-[clamp(2rem,5vw,3.5rem)] text-xl">
          Featured Menu
        </h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {coffeeItems.map((item) => (
          <div key={item.id} className="card bg-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border border-stone-100">
            <figure className="px-4 pt-4">
              <img
                src={item.image}
                alt={item.name}
                className="rounded-2xl h-64 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <div className="flex justify-between items-start">
                <h2 className="card-title font-serif text-2xl ">{item.name}</h2>
                <span className="text-[#6F4E37] font-bold text-lg">{item.price}</span>
              </div>
              <p className=" text-sm leading-relaxed">
                {item.description}
              </p>
              <div className="card-actions justify-end mt-4">
                <button className="btn bg-[#6F4E37] hover:bg-[#5D402E] border-none text-white rounded-full px-6 capitalize shadow-md">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;