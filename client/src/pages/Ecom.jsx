import { useState } from "react";
import { ShoppingCart, Search, X, Minus, CheckCircle  } from "lucide-react";
import p1Img from "../assets/Ecom_Products/p1.png";
import p2Img from "../assets/Ecom_Products/p2.png";
import p3Img from "../assets/Ecom_Products/p3.png";
import p4Img from "../assets/Ecom_Products/p4.png";
import p5Img from "../assets/Ecom_Products/p5.png";
import p6Img from "../assets/Ecom_Products/p6.png";
import p7Img from "../assets/Ecom_Products/p7.png";
import p8Img from "../assets/Ecom_Products/p8.png";
import p9Img from "../assets/Ecom_Products/p9.png";
import p10Img from "../assets/Ecom_Products/p10.png";
import p11Img from "../assets/Ecom_Products/p11.png";
import p12Img from "../assets/Ecom_Products/p12.png";
import p13Img from "../assets/Ecom_Products/p13.png";
import p14Img from "../assets/Ecom_Products/p14.png";
import p15Img from "../assets/Ecom_Products/p15.png";



const productsData = [
  { id: 1, name: "Pepper Spray", price: 299, discount: 20, image: p1Img },
  { id: 2, name: "Personal Alarm", price: 499, discount: 15, image: p2Img },
  { id: 3, name: "Stun Gun", price: 1499, discount: 10, image: p3Img },
  { id: 4, name: "Safety Keychain", price: 199, discount: 25, image: p4Img },
  { id: 5, name: "Hidden Camera Detector", price: 999, discount: 30, image: p5Img },
  { id: 6, name: "Door Stop Alarm", price: 349, discount: 20, image: p6Img },
  { id: 7, name: "GPS Tracker", price: 1999, discount: 18, image: p7Img },
  { id: 8, name: "Emergency Torch", price: 399, discount: 22, image: p8Img },
  { id: 9, name: "Safety Bracelet", price: 599, discount: 12, image: p9Img },
  { id: 10, name: "Whistle Alarm", price: 149, discount: 30, image: p10Img },
  { id: 11, name: "Mini Knife Tool", price: 699, discount: 15, image: p11Img },
  { id: 12, name: "Self Defense Stick", price: 899, discount: 20, image: p12Img },
  { id: 13, name: "Smart Ring Alert", price: 1299, discount: 10, image: p13Img },
  { id: 14, name: "Car Safety Hammer", price: 249, discount: 35, image: p14Img },
  { id: 15, name: "Flashlight Stun Baton", price: 2499, discount: 15, image: p15Img }
];

export default function EcommercePage() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filteredProducts = productsData.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const [orderPlaced, setOrderPlaced] = useState(false)

    return (
    <div className="min-h-screen bg-pink-50 p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Raksha - Women Safety Store</h1>

        <div className="flex items-center gap-4">
          <div className="flex items-center border rounded-lg px-3 py-1 bg-white">
            <Search className="w-4 h-4 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="outline-none"
            />
          </div>

          <button onClick={() => setShowCart(true)} className="relative">
            <ShoppingCart />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filteredProducts.length === 0 ? (
          <p>No products found</p>
        ) : (
          filteredProducts.map((p) => {
            const finalPrice = Math.round(
              p.price - (p.price * p.discount) / 100
            );

            return (
              <div
                key={p.id}
                className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
              >
                {/* Image */}
                <div className="w-full h-40 flex items-center justify-center bg-gray-100 rounded-lg mb-3 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Title */}
                <h2 className="font-semibold text-sm md:text-base">
                  {p.name}
                </h2>

                {/* Price */}
                <div className="text-sm mt-1">
                  <span className="line-through text-gray-400 mr-2">
                    ₹{p.price}
                  </span>
                  <span className="text-green-600 font-bold">
                    ₹{finalPrice}
                  </span>
                </div>

                {/* Discount */}
                <p className="text-xs text-red-500">{p.discount}% OFF</p>

                {/* Button */}
                <button
                  onClick={() => addToCart(p)}
                  className="mt-3 w-full bg-pink-500 hover:bg-pink-600 transition text-white py-1.5 rounded-lg text-sm"
                >
                  Add to Cart
                </button>
              </div>
            );
          })
        )}
      </div>

{/* CART MODAL */}
{showCart && (
  <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-40">

    <div className="bg-white p-6 rounded-xl w-96 relative shadow-xl">

      {/* CLOSE BUTTON */}
      <button
        onClick={() => setShowCart(false)}
        className="absolute top-3 right-3 text-gray-500 hover:text-black"
      >
        <X size={20} />
      </button>

      <h2 className="text-xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div className="space-y-3 max-h-60 overflow-y-auto">

          {cart.map((item, i) => (
            <div key={i} className="flex justify-between items-center border-b pb-2">

              <span className="text-sm">{item.name}</span>

              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold">₹{item.price}</span>

                {/* REMOVE ITEM */}
                <button
                  onClick={() => {
                    const updated = cart.filter((_, index) => index !== i)
                    setCart(updated)
                  }}
                  className="text-red-500 hover:text-red-700"
                >
                  <Minus size={16} />
                </button>
              </div>

            </div>
          ))}

        </div>
      )}

      <div className="mt-4 font-bold text-lg">Total: ₹{total}</div>

      {/* CHECKOUT BUTTON */}
      <button
        onClick={() => {
          if (cart.length === 0) return
          setCart([])
          setOrderPlaced(true)
        }}
        className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-green-600 transition"
      >
        <CheckCircle size={18} />
        Checkout
      </button>

    </div>
  </div>
)}

{/* SUCCESS MODAL */}
{orderPlaced && (
  <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

    <div className="bg-white p-8 rounded-2xl w-80 text-center shadow-2xl animate-scaleIn">

      {/* GREEN TICK */}
      <div className="flex justify-center mb-4">
        <div className="bg-green-100 p-4 rounded-full">
          <CheckCircle className="text-green-600 w-10 h-10" />
        </div>
      </div>

      <h2 className="text-xl font-bold text-green-600">
        Order Placed!
      </h2>

      <p className="text-gray-600 mt-2 text-sm">
        Your order has been successfully placed 🎉
      </p>

      <p className="text-xs text-gray-400 mt-1">
        Order ID: #{Math.floor(Math.random() * 1000000)}
      </p>

      {/* CONTINUE BUTTON */}
      <button
        onClick={() => {
          setOrderPlaced(false)
          setShowCart(false)
        }}
        className="mt-6 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
      >
        Continue Shopping
      </button>

    </div>
  </div>
)}
    </div>
  );
}
