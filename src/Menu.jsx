const Menu = () => {
  const coffeeItems = [
    {
      id: 1,
      name: "Caramel Macchiato",
      category: "Hot",
      description:
        "Rich espresso with milk and vanilla syrup, topped with caramel.",
      price: "$5.50",
      image:
        "https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Classic Cappuccino",
      category: "Hot",
      description:
        "Perfect balance of espresso, steamed milk, and foam.",
      price: "$4.75",
      image:
        "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Vanilla Latte",
      category: "Hot",
      description:
        "Smooth espresso with steamed milk and vanilla sweetness.",
      price: "$5.00",
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Iced Americano",
      category: "Cold",
      description:
        "Refreshing cold espresso diluted with chilled water.",
      price: "$4.25",
      image:
        "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Mocha Latte",
      category: "Hot",
      description:
        "Chocolate flavored espresso with silky milk.",
      price: "$5.75",
      image:
        "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 6,
      name: "Cold Brew",
      category: "Cold",
      description:
        "Slow-steeped coffee with bold and smooth taste.",
      price: "$4.90",
      image:
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-12 px-6 md:px-16 lg:px-24 bg-base-100 text-base-content">
      
      {/* Top Divider */}
      <div className="w-full flex items-center gap-4 mb-10">
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#5D402E] /40 to-transparent"></div>
        <span className="text-sm text-base-content/50 tracking-widest">MENU</span>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#5D402E] /40 to-transparent"></div>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <h1 className="font-serif font-bold text-[clamp(2rem,5vw,3.5rem)]">
          Featured Menu
        </h1>
        <p className="text-base-content/70 max-w-md text-sm md:text-base">
          Enjoy our handcrafted coffee made with passion and premium beans.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {coffeeItems.map((item) => (
          <div
            key={item.id}
            className="card bg-base-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-base-300"
          >
            {/* Image */}
            <figure className="px-4 pt-4 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="rounded-2xl h-56 w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </figure>

            {/* Content */}
            <div className="card-body">
              
              {/* Category */}
              <span className="badge badge-outline w-fit mb-1">
                {item.category}
              </span>

              {/* Title + Price */}
              <div className="flex justify-between items-start">
                <h2 className="card-title font-serif text-lg md:text-xl">
                  {item.name}
                </h2>
                <span className="font-bold text-lg ">
                  {item.price}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-base-content/70 leading-relaxed">
                {item.description}
              </p>

              {/* Button */}
              <div className="card-actions justify-end mt-3">
                <button className="btn btn-sm hover:bg-[#5D402E] border-none bg-[#6F4E37] text-white rounded-full px-6">
                  Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Bottom Divider */}
      <div className="w-full flex items-center gap-4 mt-14">
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#5D402E] /40 to-transparent"></div>
        <span className="text-xs text-base-content/40 tracking-widest">
          CONTACT BREW
        </span>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#5D402E] /40 to-transparent"></div>
      </div>
    </section>
  );
};

export default Menu;