import { getSingleReceipe } from "../../api-services/receipeApi";

export default async function RecipeDetails({ params }) {

    const { id } = await params;

    const data = await getSingleReceipe(id);

    if (!data) {
        return <h1>Food Not Found</h1>;
    }

    return (
        <div className="p-5">

            <h1 className="text-3xl font-bold">
                {data.name}
            </h1>

            <img
                src={data.image}
                alt={data.name}
                width="300"
                className="rounded-lg mt-4"
            />

            <p className="mt-3">
                {data.description}
            </p>

            <h2 className="text-xl font-bold mt-3">
                Price: ₹{data.price}
            </h2>

            <p>Category: {data.category}</p>

            <p>Food Type: {data.foodType}</p>

            <p>
                Availability: {data.isAvailable ? "Available" : "Not Available"}
            </p>

        </div>
    );
}