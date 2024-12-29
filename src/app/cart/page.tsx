"use client";
import Image from 'next/image'
import { useState, useEffect } from "react";
import Link from "next/link";

// Ensure that your cart is saved with correct image type
const Cart = () => {
  const [cart, setCart] = useState<{ id: number; title: string; price: number; image: string }[]>([]);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart)); // Ensure that this is parsing correctly
    }
  }, []);

  const removeFromCart = (productId: number) => {
    // Remove product from the cart
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save updated cart to localStorage
  };

  return (
    <div className="container mx-auto p-6 pt-[70px]">
      <h1 className="text-4xl text-center font-bold mb-8">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-lg text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id} className="flex items-center justify-between bg-white p-4 mb-4 rounded-lg shadow-md">
              <div className="flex items-center">
                {/* Correct handling of image */}
                <Image
                  src={product.image} // This will now work if the correct image path is stored
                  alt={product.title}
                  className="w-16 h-16 object-cover rounded-lg mr-4"
                  width={64}  // Set the width and height for consistency
                  height={64}
                />
                <div>
                  <h3 className="font-semibold text-lg">{product.title}</h3>
                  <p className="text-gray-600">${product.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(product.id)}
                className="py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 text-center">
        <Link href="/">
          <p className="py-2 px-6 bg-blue-500 text-white rounded-lg">
            Continue Shopping
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Cart;