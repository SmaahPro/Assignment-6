import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const productData = [
  { id: 1, name: "AI Writer", description: "Generate content instantly", price: 49, period: "monthly", tag: "Popular", features: ["100+ templates", "PDF Export", "AI tools"], icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
  { id: 2, name: "Design Toolkit", description: "Create graphics", price: 29, period: "monthly", tag: "New", features: ["Icons", "Templates", "PNG Export"], icon: "https://cdn-icons-png.flaticon.com/512/685/685655.png" },
  { id: 3, name: "SEO Tool", description: "Rank higher", price: 99, period: "yearly", tag: "Best", features: ["Keywords", "Backlinks", "Reports"], icon: "https://cdn-icons-png.flaticon.com/512/2910/2910761.png" },
  { id: 4, name: "Video Editor", description: "Edit videos", price: 59, period: "monthly", tag: "Popular", features: ["4K Export", "Templates", "Effects"], icon: "https://cdn-icons-png.flaticon.com/512/619/619034.png" },
  { id: 5, name: "Analytics", description: "Data dashboard", price: 79, period: "monthly", tag: "New", features: ["Charts", "Reports", "Export"], icon: "https://cdn-icons-png.flaticon.com/512/2910/2910763.png" },
  { id: 6, name: "Project Manager", description: "Manage team", price: 39, period: "monthly", tag: "Best", features: ["Tasks", "Timeline", "Reports"], icon: "https://cdn-icons-png.flaticon.com/512/1250/1250615.png" }
];

const Products = ({ cartItems, addToCart, removeFromCart, proceedToCheckout }) => {
  const [tab, setTab] = useState("products");
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="py-16 px-50 font-[Martian_Mono]">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Premium Digital Tools</h2>
        <p className="text-xs text-gray-600 mt-3">Choose premium products to boost productivity</p>
      </div>

      <div className="flex justify-center gap-5 mb-10">
        <button onClick={() => setTab("products")} className={`px-6 py-2 rounded-full ${tab === "products" ? "bg-violet-600 text-white" : "bg-gray-200"}`}>
          Products
        </button>
        <button onClick={() => setTab("cart")} className={`px-6 py-2 rounded-full ${tab === "cart" ? "bg-violet-600 text-white" : "bg-gray-200"}`}>
          Cart ({cartItems.length})
        </button>
      </div>

      {tab === "products" && (
        <div className="grid md:grid-cols-3 gap-7">
          {productData.map((product) => {
            const added = cartItems.find((item) => item.id === product.id);

            return (
              <div key={product.id} className="bg-white p-6 rounded-2xl shadow flex flex-col gap-3">
                <img src={product.icon} className="w-12" />
                <h3 className="font-bold">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
                <p className="font-bold">${product.price}/{product.period}</p>
                <ul className="text-xs text-gray-500">
                  {product.features.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>
                <button
                  onClick={() => { addToCart(product); toast.success("Added to cart"); }}
                  className={`mt-auto py-2 rounded-xl transition ${added ? "bg-green-600 text-white" : "bg-violet-600 text-white hover:bg-black"}`}
                >
                  {added ? "Added to Cart" : "Buy Now"}
                </button>
              </div>
            );
          })}
        </div>
      )}

      {tab === "cart" && (
        <div className="max-w-xl mx-auto flex flex-col gap-4">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 py-20">Cart Empty</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between bg-white p-4 rounded-xl shadow">
                  <div className="flex gap-3">
                    <img src={item.icon} className="w-10" />
                    <p>{item.name}</p>
                  </div>
                  <div className="flex gap-5">
                    <p>${item.price}</p>
                    <button onClick={() => { removeFromCart(item.id); toast.error("Removed"); }} className="text-red-500">
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex justify-end font-bold">Total : ${total}</div>
              <button
                onClick={() => { proceedToCheckout(); toast.success("Checkout Done"); }}
                className="bg-black text-white py-3 rounded-xl"
              >
                Proceed to Checkout
              </button>
            </>
          )}
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default Products;