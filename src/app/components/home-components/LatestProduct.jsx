
import { getReceipes } from "@/app/api-services/receipeApi";
import ProductCard from "../common/ProductCard";

export default async function LatestProduct() {
    let latestRecipes = [];

    try {
        const data = await getReceipes();

        console.log("LatestProduct data:", data);
        console.log("Recipes count:", data?.length);

        if (Array.isArray(data)) {
            latestRecipes = data.slice(-4).reverse();
        }

    } catch (error) {
        console.error("LatestProduct error:", error);
    }

    return (
        <section className="bg-green-50 py-12 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-green-800">
                        Latest Recipes
                    </h1>
                    <p className="text-gray-500 mt-3 text-base sm:text-lg">
                        Discover our delicious and freshly prepared recipes.
                    </p>
                </div>

                {latestRecipes.length === 0 ? (
                    <p className="text-center text-gray-500 text-lg">
                        No recipes available right now!
                    </p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {latestRecipes.map((item) => (
                            <ProductCard
                                key={item._id}
                                product={item}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
