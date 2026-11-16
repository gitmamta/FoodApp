
import { getReceipes } from "../api-services/receipeApi";
import Link from "next/link";

export default async function Recipe() {
    let data = [];

    try {
        data = await getReceipes();
    } catch (error) {
        console.log("Recipe Fetch Error:", error);
    }

    return (
        <div className="p-5">

            <h1 className="text-3xl font-bold text-center mb-6">
                Recipe Page
            </h1>

            {data.length === 0 ? (
                <h2 className="text-center text-red-500">
                    No Food Data Found!
                </h2>
            ) : (

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">

                    {data.map((item) => (

                        <div
                            key={item._id}
                            className="border rounded-xl p-4 shadow-md"
                        >

                            <img
                                src={item.image || "/placeholder.png"}
                                alt={item.name}
                                className="w-full h-52 object-cover rounded-lg"
                            />

                            <h2 className="font-bold text-xl mt-3">
                                {item.name}
                            </h2>

                            <p className="text-gray-600 mt-2">
                                {item.description}
                            </p>

                            <p className="font-bold mt-2">
                                ₹{item.price}
                            </p>

                            <p>
                                Category: {item.category}
                            </p>

                            <Link
                                href={`/recipe/${item._id}`}
                                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md mt-3"
                            >
                                View
                            </Link>

                        </div>

                    ))}

                </div>
            )}

        </div>
    );
}
