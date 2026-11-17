
import { getReceipes } from "@/app/api-services/receipeApi";
import ProductCard from "../common/ProductCard";

export default async function LatestProduct() {
    let latestRecipes = [];

    try {
        const data = await getReceipes();

        latestRecipes = data
            .sort((a, b) =>
                new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
            )
            .slice(0, 4);

    } catch (error) {
        console.error("Latest Recipes Error:", error);
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
                            <div key={item._id}>
                                <ProductCard product={item} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
