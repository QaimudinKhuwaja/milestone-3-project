"use client";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

const Card = () => {
  const [cart, setCart] = useState<{ id: number; title: string; price: number; image: string }[]>([]);
  const [products, setProducts] = useState<{ id: number; title: string; price: number; image: string; slug: string }[]>([]);

  // Load cart from localStorage if available
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

    // Fetch product data from API
    const fetchProducts = async () => {
      const res = await fetch('/api/cardsData');
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const addToCart = (product: { id: number; title: string; price: number; image: string }) => {
    const newCart = [...cart, product];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));  // Save to localStorage
  
  };

  return (
    <div className=" pt-[70px] place-items-center">
      <h1 className="text-4xl text-center font-bold mb-8 underline text-[#D84727]">Featured Products</h1>

      {/* Product Cards */}
      <div className="grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7">
        {products.map((product) => (
     <div key={product.id}>
            <ProductCard
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              addToCart={addToCart}
            />
      </div>
        ))}
      </div>
<Link href="/cart"><div className="bg-green-400 hover:bg-green-500 text-white text-center py-2 px-6 mt-4 mb-4 rounded">Go to cart ({cart.length})</div></Link>
    </div>
  );
};

export default Card;
