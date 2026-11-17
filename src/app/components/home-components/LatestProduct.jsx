
import { getReceipes } from "@/app/api-services/receipeApi";
import ProductCard from "../common/ProductCard";

export default async function LatestProduct() {
    const data = await getReceipes();
    // const latestRecipes = data.slice(0, 4);
    const latestRecipes = (Array.isArray(data) ? data : data?.recipes || data?.data || []).slice(0, 4);

    return (
        <section className="bg-green-50 py-12 px-4 sm:px-8">

            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-green-800">
                        Latest Recipes
                    </h1>

                    <p className="text-gray-500 mt-3 text-base sm:text-lg">
                        Discover our delicious and freshly prepared recipes.
                    </p>
                </div>

                {/* Recipe Grid */}
                {latestRecipes.length === 0 ? (
                    <p className="text-center text-gray-500 text-lg">
                        No recipes available right now!
                    </p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        {latestRecipes.map((item) => (
                            <div
                                key={item._id}
                                className="transition-all duration-300
                                hover:-translate-y-2 hover:shadow-xl rounded-2xl"
                            >
                                <ProductCard product={item} />
                            </div>
                        ))}

                    </div>
                )}

            </div>
        </section>
    );
}
