import React, { useState } from 'react';
import ProductCard from '../components/productcard';
import SearchBar from '../components/Searchbar';

const sampleProducts = [
  { id: 1, name: "Nike Air Max", price: 120, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Adidas Ultraboost", price: 150, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Puma Suede", price: 90, image: "https://via.placeholder.com/150" },
  { id: 4, name: "Converse All Star", price: 70, image: "https://via.placeholder.com/150" },
  { id: 5, name: "Vans Old Skool", price: 80, image: "https://via.placeholder.com/150" },
  { id: 6, name: "Reebok Classic", price: 100, image: "https://via.placeholder.com/150" },
  { id: 7, name: "New Balance 990", price: 130, image: "https://via.placeholder.com/150" },
  { id: 8, name: "Jordan 1 Retro", price: 200, image: "https://via.placeholder.com/150" },
  { id: 9, name: "Fila Disruptor", price: 85, image: "https://via.placeholder.com/150" },
  { id: 10, name: "Under Armour Charged", price: 110, image: "https://via.placeholder.com/150" },
  { id: 11, name: "ASICS Gel", price: 95, image: "https://via.placeholder.com/150" },
  { id: 12, name: "Sketchers GoWalk", price: 60, image: "https://via.placeholder.com/150" },
  { id: 13, name: "Timberland Boots", price: 150, image: "https://via.placeholder.com/150" },
  { id: 14, name: "Dr. Martens", price: 160, image: "https://via.placeholder.com/150" },
  { id: 15, name: "Crocs Classic", price: 40, image: "https://via.placeholder.com/150" },
  { id: 16, name: "Birkenstock Sandals", price: 90, image: "https://via.placeholder.com/150" },
  { id: 17, name: "Gucci Ace Sneakers", price: 600, image: "https://via.placeholder.com/150" },
  { id: 18, name: "Balenciaga Triple S", price: 800, image: "https://via.placeholder.com/150" },
  { id: 19, name: "Yeezy Boost 350", price: 220, image: "https://via.placeholder.com/150" },
  { id: 20, name: "Louis Vuitton Trainer", price: 900, image: "https://via.placeholder.com/150" },
  { id: 21, name: "Tommy Hilfiger Sneaker", price: 130, image: "https://via.placeholder.com/150" },
  { id: 22, name: "Lacoste Lerond", price: 100, image: "https://via.placeholder.com/150" },
  { id: 23, name: "Diesel S-Kby", price: 150, image: "https://via.placeholder.com/150" },
  { id: 24, name: "Armani Exchange", price: 140, image: "https://via.placeholder.com/150" },
  { id: 25, name: "Boss Saturn Low", price: 170, image: "https://via.placeholder.com/150" },
  { id: 26, name: "Zara Casual Shoe", price: 60, image: "https://via.placeholder.com/150" },
  { id: 27, name: "H&M Sneakers", price: 45, image: "https://via.placeholder.com/150" },
  { id: 28, name: "Pull & Bear Kicks", price: 55, image: "https://via.placeholder.com/150" },
  { id: 29, name: "River Island Trainers", price: 70, image: "https://via.placeholder.com/150" },
  { id: 30, name: "Primark Basics", price: 35, image: "https://via.placeholder.com/150" }
];

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = sampleProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Our Products</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} emma={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
