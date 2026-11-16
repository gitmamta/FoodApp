import connectDB from "@/lib/db";
import Food from "@/models/Food";
import Link from "next/link";

export default async function Recipe() {
  let data = [];

  try {
    await connectDB();

    const foods = await Food.find({
      foodType: "Veg",
    }).lean();

    data = foods.map((item) => ({
      ...item,
      _id: item._id.toString(),
    }));
  } catch (error) {
    console.error("Recipe Fetch Error:", error);
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 sm:px-6 lg:px-10">
      {/* Heading */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-3">
          Delicious Veg Recipes
        </h1>

        <p className="text-center text-gray-500 mb-10">
          Explore our delicious and fresh vegetarian food.
        </p>

        {data.length === 0 ? (
          <h2 className="text-center text-red-500 text-xl font-semibold">
            No Food Data Found!
          </h2>
        ) : (
          /* Food Cards */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {data.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-2xl overflow-hidden shadow-md
                                transition-all duration-500 hover:shadow-2xl
                                hover:-translate-y-2 group"
              >
                {/* Image */}
                <div className="overflow-hidden relative">
                  <img
                    src={item.image || "/placeholder.png"}
                    alt={item.name}
                    className="w-full h-56 object-cover
                                        transition-transform duration-700
                                        group-hover:scale-110"
                  />

                  <span
                    className="absolute top-4 left-4
                                    bg-green-600 text-white text-xs font-semibold
                                    px-3 py-2 rounded-full shadow"
                  >
                    VEG
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h2
                    className="font-bold text-xl text-gray-800
                                    truncate"
                  >
                    {item.name}
                  </h2>

                  <p
                    className="text-gray-500 text-sm mt-2
                                    line-clamp-2 leading-6"
                  >
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between mt-4">
                    {/* Price */}
                    <span className="text-xl font-extrabold text-emerald-600">
                      ₹{item.price}
                    </span>

                    {/* Category */}
                    <span className="text-xs font-semibold bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>

                  {/* Action Buttons */}
<div className="flex gap-3 mt-5">

    {/* View Details */}
    <Link
        href={`/recipe/${item._id}`}
        className="flex-1 text-center bg-orange-500 hover:bg-orange-600
        text-white font-semibold py-3 rounded-xl
        transition-all duration-300 hover:shadow-lg"
    >
        View Details
    </Link>

    {/* Add to Cart */}
    <button
        className="flex-1 bg-emerald-600 hover:bg-emerald-700
        text-white font-semibold py-3 rounded-xl
        transition-all duration-300 hover:shadow-lg"
    >
        + Add
    </button>

</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
