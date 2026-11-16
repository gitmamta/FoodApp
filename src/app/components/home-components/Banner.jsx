
"use client";

import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function Banner() {
    const [modal, setModal] = useState(false);

    const closeModal = () => setModal(false);

    return (
        <>
            {/* Enquiry Modal */}
            {modal && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center
                    bg-black/60 backdrop-blur-sm p-4"
                    onClick={closeModal}
                >
                    <div
                        className="w-full max-w-md bg-white rounded-2xl p-6 sm:p-8
                        shadow-2xl relative
                        transition-all duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-green-800">
                                Enquire Now
                            </h2>

                            <button
                                type="button"
                                onClick={closeModal}
                                aria-label="Close enquiry form"
                                className="text-gray-500 hover:text-red-500
                                hover:rotate-90 transition-all duration-300"
                            >
                                <IoClose size={28} />
                            </button>
                        </div>

                        {/* Form */}
                        <form className="space-y-4">

                            <div>
                                <label htmlFor="name"
                                    className="block text-sm font-semibold text-gray-700 mb-1">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your name"
                                    className="w-full border border-gray-300 rounded-lg
                                    p-3 outline-none focus:border-green-600
                                    focus:ring-2 focus:ring-green-100 transition"
                                />
                            </div>

                            <div>
                                <label htmlFor="email"
                                    className="block text-sm font-semibold text-gray-700 mb-1">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="w-full border border-gray-300 rounded-lg
                                    p-3 outline-none focus:border-green-600
                                    focus:ring-2 focus:ring-green-100 transition"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone"
                                    className="block text-sm font-semibold text-gray-700 mb-1">
                                    Phone Number
                                </label>

                                <input
                                    type="tel"
                                    id="phone"
                                    placeholder="Enter your phone number"
                                    className="w-full border border-gray-300 rounded-lg
                                    p-3 outline-none focus:border-green-600
                                    focus:ring-2 focus:ring-green-100 transition"
                                />
                            </div>

                            <div>
                                <label htmlFor="message"
                                    className="block text-sm font-semibold text-gray-700 mb-1">
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    rows="4"
                                    placeholder="Write your message..."
                                    className="w-full border border-gray-300 rounded-lg
                                    p-3 outline-none resize-none
                                    focus:border-green-600 focus:ring-2
                                    focus:ring-green-100 transition"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-green-700 hover:bg-green-800
                                text-white font-bold py-3 rounded-lg
                                transition-all duration-300 hover:shadow-lg
                                active:scale-95"
                            >
                                Submit Enquiry
                            </button>

                        </form>
                    </div>
                </div>
            )}

            {/* Hero Banner */}
            <section className="relative min-h-[450px] sm:min-h-[550px]
                bg-[url('/images/bannerimage.png')] bg-cover bg-center">

                {/* Background Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                <div className="relative z-10 max-w-7xl mx-auto min-h-[450px]
                    sm:min-h-[550px] flex flex-col items-center
                    justify-center gap-5 px-4 text-center">

                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl
                        font-extrabold transition-transform duration-300
                        hover:scale-105">
                        Fresh • Healthy • Homemade
                    </h1>

                    <p className="text-green-200 text-2xl sm:text-3xl md:text-4xl
                        font-bold">
                        Discover Delicious Recipes
                    </p>

                    <p className="text-white text-base sm:text-xl md:text-2xl
                        max-w-2xl leading-relaxed">
                        Find your favorite dishes and make every meal special.
                    </p>

                    <button
                        type="button"
                        onClick={() => setModal(true)}
                        className="mt-3 bg-green-600 hover:bg-green-700
                        text-white font-bold px-8 py-3 rounded-xl
                        shadow-lg transition-all duration-300
                        hover:-translate-y-1 hover:shadow-2xl
                        active:scale-95"
                    >
                        Enquire Now →
                    </button>

                </div>
            </section>
        </>
    );
}
