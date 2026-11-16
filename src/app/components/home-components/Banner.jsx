"use client";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function Banner(){
    const[modal,setModel]=useState(false);
    let enquireModel=()=>{
        console.log("model is clicked");
    }

    return(
    <>
    






{modal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

    <div className="w-[350px] bg-white p-6 rounded shadow-md">

      <h1 className="font-bold text-xl relative mb-6">
        Enquire Now

        <button
          type="button"
          onClick={() => setModel(false)}
          className="absolute top-0 right-0 text-2xl"
        >
          <IoClose />
        </button>
      </h1>

      <form className="space-y-4 bg-white rounded-xl shadow-lg">

        <label htmlFor="name" className="text-sm block">
          Name
        </label>

        <input
          type="text"
          id="name"
          className="w-full border p-2 rounded"
        />

        <label htmlFor="email" className="text-sm block">
          Email
        </label>

        <input
          type="email"
          id="email"
          className="w-full border p-2 rounded"
        />
<label htmlFor="phone" className="text-sm block">
          Phone no
        </label>

        <input
          type="number"
          id="phone"
          className="w-full border p-2 rounded"
        />
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="4" placeholder="type your message" className="w-full border rounded"></textarea>

      </form>

    </div>
  </div>
)}




    
<section className="h-[500px] bg-[url('/images/bannerimage.png')] bg-cover bg-center">
<div className="max-w-[1280px] flex flex-col  gap-4 items-center justify-center mx-auto h-full px-4 hover:-translate-y-1 cursor-pointer">
<h1 className="text-center text-green-800 sm:text-3xl md:text-4xl ">Fresh • Healthy • Homemade</h1>
<p className="text-center text-amber-500 sm:text-3xl md:text-4xl">Discover Delicious Recipes</p>
<p className="text-center text-stone-400 sm:text-2xl md:text-4xl">Find your favorite dishes and make every meal special.</p>
<button className="bg-white max-w-xs p-3 px-6 py-3 rounded-lg hover:bg-green-500" onClick={()=>setModel(true)}>Enquire Now</button>

</div>
 
    </section>
    
    
    
    
    
    
    
    
    </>)
}