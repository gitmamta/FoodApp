import { getReceipes } from "@/app/api-services/receipeApi";
import ProductCard from "../common/ProductCard";
export default async function LatestProduct() {
  const data = await getReceipes();
  const latestRecipes = data.slice(0, 4);

  return (
    <>
      <section className="text-lime:500 py-10">
        <h1 className="text-red-500 text-center text-4xl mb-4">
          Latest Recipes
        </h1>
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {latestRecipes.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </>
  );
}
