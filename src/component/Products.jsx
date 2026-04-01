import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const productData = [
  { id: 1, name: "AI Writer", description: "Generate content instantly", price: 49, period: "monthly", tag: "Popular", tagType: "popular", features: ["100+ templates", "PDF Export", "AI tools"], icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
  { id: 2, name: "Design Toolkit", description: "Create graphics", price: 29, period: "monthly", tag: "New", tagType: "new", features: ["Icons", "Templates", "PNG Export"], icon: "https://cdn-icons-png.flaticon.com/512/685/685655.png" },
  { id: 3, name: "SEO Tool", description: "Rank higher", price: 99, period: "yearly", tag: "Best Seller", tagType: "best", features: ["Keywords", "Backlinks", "Reports"], icon: "https://cdn-icons-png.flaticon.com/512/2910/2910761.png" },
  { id: 4, name: "Video Editor", description: "Edit videos", price: 59, period: "monthly", tag: "Popular", tagType: "popular", features: ["4K Export", "Templates", "Effects"], icon: "https://cdn-icons-png.flaticon.com/512/619/619034.png" },
  { id: 5, name: "Analytics", description: "Data dashboard", price: 79, period: "monthly", tag: "New", tagType: "new", features: ["Charts", "Reports", "Export"], icon: "https://cdn-icons-png.flaticon.com/512/2910/2910763.png" },
  { id: 6, name: "Project Manager", description: "Manage team", price: 39, period: "monthly", tag: "Best Seller", tagType: "best", features: ["Tasks", "Timeline", "Reports"], icon: "https://cdn-icons-png.flaticon.com/512/1250/1250615.png" },
];

const Products = ({ cartItems, addToCart, removeFromCart, proceedToCheckout }) => {
  const [tab, setTab] = useState("products");
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="py-10 md:py-16 px-6 md:px-20 lg:px-60 font-[Martian_Mono]">

      <style>
        {`
          .Toastify__toast-container { width: 220px !important; left: auto !important; right: 0 !important;}
          .Toastify__toast { min-height: 40px; font-size: 12px; border-radius: 8px; margin-right: 15px; }
        `}
      </style>

      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold">Premium Digital Tools</h2>
        <p className="text-[10px] md:text-xs text-gray-600 mt-3 px-4">
          Choose from our curated collection of premium digital products designed <br className="hidden md:block" /> to boost your productivity and creativity.
        </p>
      </div>

      <div className="flex justify-center gap-3 md:gap-5 mb-10">
        <button
          onClick={() => setTab("products")}
          className={`px-5 py-2 rounded-full text-xs md:text-base transition ${tab === "products" ? "bg-violet-600 text-white shadow-md" : "bg-gray-200 hover:bg-gray-300"}`}
        >
          Products
        </button>
        <button
          onClick={() => setTab("cart")}
          className={`px-5 py-2 rounded-full text-xs md:text-base transition ${tab === "cart" ? "bg-violet-600 text-white shadow-md" : "bg-gray-200 hover:bg-gray-300"}`}
        >
          Cart ({cartItems.length})
        </button>
      </div>

      {tab === "products" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {productData.map((product) => {
            const added = cartItems.find((item) => item.id === product.id);

            return (
              <div key={product.id} className="relative bg-white p-5 md:p-6 rounded-2xl shadow flex flex-col gap-3 overflow-hidden border border-gray-100">
                <span className="absolute top-4 right-4 bg-violet-100 text-violet-600 px-3 py-1 rounded-full text-[10px] font-bold">
                  {product.tag}
                </span>

                <img src={product.icon} className="w-10 md:w-12" alt={product.name} />
                <h3 className="font-bold text-sm md:text-base">{product.name}</h3>
                <p className="text-xs md:text-sm text-gray-600">{product.description}</p>
                <p className="font-bold text-sm md:text-base">${product.price}/{product.period}</p>
                <ul className="text-[10px] md:text-xs text-gray-500">
                  {product.features.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>
                <button
                  onClick={() => { addToCart(product); toast.success("Added to cart"); }}
                  className={`mt-auto py-2 rounded-xl transition text-xs md:text-sm active:scale-95 ${added ? "bg-green-600 text-white" : "bg-violet-600 text-white hover:bg-black"}`}
                >
                  {added ? "Added to Cart" : "Buy Now"}
                </button>
              </div>
            );
          })}
        </div>
      )}

      {tab === "cart" && (
        <div className="max-w-xl mx-auto flex flex-col gap-4 min-h-[400px]">

          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-bold">Your Cart</h3>
            <span className="text-xs bg-gray-200 px-3 py-1 rounded-full">
              {cartItems.length} Items
            </span>
          </div>

          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl shadow-sm border border-dashed border-gray-200">
              <img
                src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
                className="w-20 h-20 opacity-20 mb-4 grayscale"
                alt="Empty Cart"
              />
              <p className="text-gray-500 text-sm font-medium">Your cart is empty</p>
              <p className="text-[10px] text-gray-400 mt-1">Looks like you haven't added anything yet!</p>
              <button
                onClick={() => setTab("products")}
                className="mt-6 text-violet-600 text-xs font-bold hover:underline"
              >
                Browse Products
              </button>
            </div>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100 transition hover:shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="bg-gray-50 p-2 rounded-lg">
                      <img src={item.icon} className="w-8 md:w-10" alt={item.name} />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm font-bold">{item.name}</p>
                      <p className="text-[10px] text-gray-400">{item.period} plan</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-xs md:text-sm font-bold text-violet-600">${item.price}</p>
                    <button
                      onClick={() => { removeFromCart(item.id); toast.error("Removed from cart"); }}
                      className="p-2 hover:bg-red-50 rounded-full transition group"
                    >
                      <span className="text-red-400 group-hover:text-red-600 text-[10px] md:text-xs font-bold">
                        Remove
                      </span>
                    </button>
                  </div>
                </div>
              ))}

              <div className="mt-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-4 text-sm md:text-base">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-bold">${total}</span>
                </div>
                <button
                  onClick={() => { proceedToCheckout(); toast.success("Checkout Done"); }}
                  className="w-full bg-black text-white py-3.5 rounded-xl text-sm md:text-base font-bold active:scale-95 transition shadow-lg hover:bg-gray-900"
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      )}
      
      <ToastContainer position="top-right" autoClose={1500} hideProgressBar={true} />
    </div>
  );
};

export default Products;