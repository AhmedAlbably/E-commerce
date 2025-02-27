const MainSection = () => {
  // Sample Data for Cards
  const products = [
    {
      id: 1,
      title: "Smartphone",
      description: "Latest 5G smartphone with powerful features.",
      price: "$699",
      image: "https://shop.orange.eg/content/images/thumbs/0011717_iphone-16-pro-max_550.jpeg",
    },
    {
      id: 2,
      title: "Laptop",
      description: "High-performance laptop for work and gaming.",
      price: "$999",
      image: "https://shop.orange.eg/content/images/thumbs/0011717_iphone-16-pro-max_550.jpeg",
    },
    {
      id: 3,
      title: "Smartwatch",
      description: "Track your fitness and notifications on the go.",
      price: "$199",
      image: "https://shop.orange.eg/content/images/thumbs/0011717_iphone-16-pro-max_550.jpeg",
    },
    {
      id: 4,
      title: "Headphones",
      description: "Noise-canceling headphones with premium sound.",
      price: "$149",
      image: "https://shop.orange.eg/content/images/thumbs/0011717_iphone-16-pro-max_550.jpeg",
    },

    {
      id: 5,
      title: "Tablet",
      description: "Powerful tablet for entertainment and productivity.",
      price: "$399",
      image: "https://shop.orange.eg/content/images/thumbs/0011717_iphone-16-pro-max_550.jpeg",
    },
    {
      id: 6,
      title: "Camera",
      description: "Capture moments with stunning quality.",
      price: "$599",
      image: "https://shop.orange.eg/content/images/thumbs/0011717_iphone-16-pro-max_550.jpeg",
      },


      {
        id: 7,
        title: "Headphones",
        description: "Noise-canceling headphones with premium sound.",
        price: "$149",
        image: "https://shop.orange.eg/content/images/thumbs/0011717_iphone-16-pro-max_550.jpeg",
      },

      {
        id: 8,
        title: "Camera",
        description: "Capture moments with stunning quality.",
        price: "$599",
        image: "https://shop.orange.eg/content/images/thumbs/0011717_iphone-16-pro-max_550.jpeg",
      },

      {
        id: 9,
        title: "Headphones",
        description: "Noise-canceling headphones with premium sound.",
        price: "$149",
        image: "https://shop.orange.eg/content/images/thumbs/0011717_iphone-16-pro-max_550.jpeg",
      },

      {
        id: 10,
        title: "Headphones",
        description: "Noise-canceling headphones with premium sound.",
        price: "$149",
        image: "https://shop.orange.eg/content/images/thumbs/0011717_iphone-16-pro-max_550.jpeg",
      },

      {
        id: 11,
        title: "Headphones",
        description: "Noise-canceling headphones with premium sound.",
        price: "$149",
        image: "https://shop.orange.eg/content/images/thumbs/0011717_iphone-16-pro-max_550.jpeg",
      },

      {
        id: 12,
        title: "Headphones",
        description: "Noise-canceling headphones with premium sound.",
        price: "$149",
        image: "https://shop.orange.eg/content/images/thumbs/0011717_iphone-16-pro-max_550.jpeg",
      },
  
  ];

  return (
    <main className="container mx-auto px-6 py-12 ">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Featured Products
      </h2>

      {/* Grid Layout for Cards */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <article
            key={product.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900">
                {product.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">{product.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold text-blue-600">
                  {product.price}
                </span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  Buy Now
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default MainSection;
