import React from 'react';
import { Link } from 'react-router-dom';


const products = [

  { id: 1, name: "Wireless Headphones", price: 59.99, image: "/images/hedphone.jpg" },
  { id: 2, name: "Tommy Hilfiger Sneaker", price: 130, image: "/images/th.jpg" },
  { id: 3, name: "Lacoste Lerond", price: 100, image: "/images/shh.jpg" },
  { id: 4, name: "Diesel S-Kby", price: 150, image: "https://via.placeholder.com/150" },
  { id: 5, name: "Boss Saturn Low", price: 170, image: "https://via.placeholder.com/150" },
  { id: 6, name: "Zara Casual Shoe", price: 60, image: "https://via.placeholder.com/150" },
  { id: 7, name: "H&M Sneakers", price: 45, image: "https://via.placeholder.com/150" },
  { id: 8, name: "Pull & Bear Kicks", price: 55, image: "https://via.placeholder.com/150" },
  { id: 9, name: "River Island Trainers", price: 70, image: "https://via.placeholder.com/150" },
  { id: 10, name: "Primark Basics", price: 35, image: "https://via.placeholder.com/150" }
];


const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to E-Shop</h1>
        <p className="text-lg mb-6">Your one-stop shop for modern tech online</p>
        <Link to="/products">
          <button className="bg-white text-blue-600 px-6 py-2 rounded hover:bg-gray-100">
            Browse Products
          </button>
        </Link>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Best Sellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white border rounded-lg shadow-md p-4 hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-60 h-64 object-cover rounded mb-4 mx-auto"
              />
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600 mb-2">${item.price.toFixed(2)}</p>
               <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
                Buy Now
              </button>
              <br />
              <br />
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-10">
        &copy; {new Date().getFullYear()} E-Shop. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
