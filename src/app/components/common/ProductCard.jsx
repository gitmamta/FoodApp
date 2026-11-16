import Link from "next/link";
export default function ProductCard({product}) {
  return (
    <>
      <div className=" w-full max-w-sm shadow-md bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow ">
        <img src={product.image} alt={product.name} className="h-56 w-full object-contain" />
        <div className="p-4">

        <h1 className="text-2xl text-center">{product.name}</h1>
        <p className="text-sm text-gray-500 text-center mt-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-4 border-t border-gray-200">
          <span className="text-green-700 text-xl font-bold">{product.price?`${product.price}`:""}</span>
          <Link href={`/recipe/${product.id}`} className="font-bold sm:text-base rounded-md sm:px-4 text-white px-3 py-2 bg-blue-600 mt-3 transition-all">View</Link>
          <button className="text-xl hover:bg-green-400 rounded-lg px-4 py-2">+Add</button>

        </div>
      </div>
      
      </div>
    </>
  );
}
