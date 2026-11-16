
import Link from "next/link";

export default function ProductCard({ product }) {
    return (
        <article className="w-full max-w-sm bg-white rounded-2xl overflow-hidden
            shadow-md transition-all duration-300
            hover:-translate-y-2 hover:shadow-xl group">

            {/* Image */}
            <div className="overflow-hidden">
                <img
                    src={product.image || "/placeholder.png"}
                    alt={product.name}
                    className="w-full h-56 object-cover
                    transition-transform duration-500
                    group-hover:scale-110"
                />
            </div>

            {/* Content */}
            <div className="p-5">

                <h2 className="text-xl font-bold text-gray-800 truncate">
                    {product.name}
                </h2>

                <p className="text-sm text-gray-500 mt-2 line-clamp-2 leading-6">
                    {product.description}
                </p>

                {/* Price */}
                <div className="flex items-center justify-between mt-4 pt-4
                    border-t border-gray-100">

                    <span className="text-xl font-extrabold text-emerald-600">
                        ₹{product.price ?? "N/A"}
                    </span>

                    {product.category && (
                        <span className="text-xs font-semibold text-orange-700
                            bg-orange-100 px-3 py-1 rounded-full">
                            {product.category}
                        </span>
                    )}

                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-5">

                    <Link
                        href={`/recipe/${product._id}`}
                        className="flex-1 text-center bg-orange-500
                        hover:bg-orange-600 text-white font-semibold
                        py-3 rounded-xl transition-all duration-300
                        hover:shadow-md active:scale-95"
                    >
                        View Details
                    </Link>

                    <button
                        type="button"
                        className="flex-1 bg-emerald-600 hover:bg-emerald-700
                        text-white font-semibold py-3 rounded-xl
                        transition-all duration-300
                        hover:shadow-md active:scale-95"
                    >
                        + Add
                    </button>

                </div>

            </div>
        </article>
    );
}
