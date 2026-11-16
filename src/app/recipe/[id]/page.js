
import { getSingleReceipe } from "../../api-services/receipeApi";

export default async function RecipeDetails({ params }) {
    const { id } = await params;
    const data = await getSingleReceipe(id);

    if (!data) {
        return (
            <div className="min-h-screen grid place-items-center bg-gray-50">
                <h1 className="text-2xl font-bold text-gray-600">
                    Food Not Found
                </h1>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-gray-100 p-4 sm:p-8">

            <div className="max-w-5xl mx-auto">

                <div className="bg-white rounded-3xl shadow-lg overflow-hidden
                    grid md:grid-cols-2
                    animate-[fadeIn_0.8s_ease-out]
                    transition-all duration-500
                    hover:shadow-2xl">

                    {/* Food Image */}
                    <div className="p-4 sm:p-6">
                        <div className="overflow-hidden rounded-2xl group">
                            <img
                                src={data.image || "/placeholder.png"}
                                alt={data.name}
                                className="w-full h-64 sm:h-80 md:h-[400px]
                                object-cover
                                transition-transform duration-700 ease-in-out
                                group-hover:scale-110"
                            />
                        </div>
                    </div>

                    {/* Food Details */}
                    <div className="p-5 sm:p-8 flex flex-col justify-center">

                        <span className="text-sm font-semibold text-orange-600 uppercase
                            tracking-wider animate-[fadeIn_1s_ease-out]">
                            {data.category}
                        </span>

                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-3
                            transition-colors duration-300 hover:text-orange-600">
                            {data.name}
                        </h1>

                        <p className="text-gray-500 leading-7 mt-4">
                            {data.description}
                        </p>

                        {/* Price */}
                        <h2 className="text-3xl font-extrabold text-emerald-600 mt-6
                            transition-transform duration-300 hover:scale-105 origin-left">
                            ₹{data.price}
                        </h2>

                        {/* Food Information */}
                        <div className="bg-gray-50 rounded-2xl p-5 mt-6 space-y-4
                            transition-all duration-300 hover:bg-gray-100">

                            <div className="flex justify-between items-center">
                                <span className="text-gray-500">Category</span>
                                <span className="font-semibold text-gray-800">
                                    {data.category}
                                </span>
                            </div>

                            <hr />

                            <div className="flex justify-between items-center">
                                <span className="text-gray-500">Food Type</span>
                                <span className="font-semibold text-gray-800">
                                    {data.foodType}
                                </span>
                            </div>

                            <hr />

                            <div className="flex justify-between items-center">
                                <span className="text-gray-500">Availability</span>

                                <span className={`text-sm font-semibold px-3 py-1 rounded-full
                                    transition-all duration-300 ${
                                    data.isAvailable
                                        ? "bg-green-100 text-green-700"
                                        : "bg-red-100 text-red-600"
                                }`}>
                                    {data.isAvailable ? "Available" : "Not Available"}
                                </span>
                            </div>

                        </div>

                        {/* Add to Cart */}
                        <button
                            disabled={!data.isAvailable}
                            className="w-full mt-6 py-4 rounded-xl font-bold text-white
                            bg-emerald-600 hover:bg-emerald-700
                            hover:shadow-xl hover:-translate-y-1
                            active:scale-95
                            disabled:bg-gray-400 disabled:cursor-not-allowed
                            disabled:hover:translate-y-0
                            transition-all duration-300"
                        >
                            + Add to Cart
                        </button>

                    </div>
                </div>
            </div>
        </main>
    );
}
