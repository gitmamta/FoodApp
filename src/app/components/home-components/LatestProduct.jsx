
import { getReceipes } from "@/app/api-services/receipeApi";
import ProductCard from "../common/ProductCard";

export default async function LatestProduct() {
    let latestRecipes = [];
    let errorMessage = "";

    try {
        const data = await getReceipes();

        console.log("PRODUCTION DATA:", data);
        console.log("DATA TYPE:", Array.isArray(data));
        console.log("TOTAL RECIPES:", data?.length);

        latestRecipes = Array.isArray(data)
            ? data.slice(-4).reverse()
            : [];

        console.log("SELECTED RECIPES:", latestRecipes);
        console.log("SELECTED COUNT:", latestRecipes.length);

    } catch (error) {
        errorMessage = error.message;
        console.error("LATEST PRODUCT ERROR:", error);
    }

    return (
        <section className="bg-green-50 py-12 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-green-800 text-center mb-6">
                    Latest Recipes
                </h1>

                <p className="text-center text-red-600 mb-4">
                    Debug: {errorMessage || `Received ${latestRecipes.length} recipes`}
                </p>

                {latestRecipes.length === 0 ? (
                    <p className="text-center text-gray-500">
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
