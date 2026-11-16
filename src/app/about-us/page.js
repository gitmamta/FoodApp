
export default function About() {
    const features = [
        {
            icon: "🥗",
            title: "Fresh & Flavorful",
            description: "Discover delicious recipes made with wholesome ingredients.",
        },
        {
            icon: "🍳",
            title: "Easy to Cook",
            description: "Find simple recipes suitable for everyday cooking.",
        },
        {
            icon: "💚",
            title: "Healthy Living",
            description: "Explore vegetarian meal ideas for a balanced lifestyle.",
        },
        {
            icon: "👨‍🍳",
            title: "Made for Everyone",
            description: "From beginners to passionate home cooks, there's something for everyone.",
        },
    ];

    return (
        <main className="min-h-screen bg-green-50 px-4 py-12 sm:px-8">

            <div className="max-w-5xl mx-auto space-y-8">

                {/* Header */}
                <header className="text-center transition-all duration-500 hover:scale-105">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-green-800">
                        About Veg-Foodie
                    </h1>

                    <p className="text-green-600 mt-3 text-lg">
                        Eat Fresh, Live Healthy, Love Food!
                    </p>
                </header>

                {/* Introduction */}
                <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-md
                    transition-all duration-300 hover:shadow-xl hover:-translate-y-1">

                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Bringing Good Food to Your Table
                    </h2>

                    <p className="text-gray-600 leading-8">
                        Welcome to <strong className="text-green-700">Veg-Foodie</strong>,
                        your little corner of the internet for delicious vegetarian
                        recipes and healthy food inspiration.

                        We believe that eating healthy should be simple, enjoyable,
                        and full of flavor. Whether you're looking for a quick
                        breakfast, a comforting lunch, or a special dinner,
                        Veg-Foodie helps you discover recipes that make every
                        meal memorable.
                    </p>
                </section>

                {/* Mission */}
                <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-md
                    transition-all duration-300 hover:shadow-xl hover:-translate-y-1">

                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Our Mission
                    </h2>

                    <p className="text-gray-600 leading-8">
                        Our mission is to make vegetarian cooking easy, creative,
                        and accessible to everyone. We want to inspire people to
                        explore new flavors, use fresh ingredients, and enjoy
                        the happiness that comes from homemade food.
                    </p>
                </section>

                {/* Features */}
                <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-md">

                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        What Makes Us Special?
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="bg-green-50 p-5 rounded-xl border border-green-100
                                transition-all duration-300
                                hover:bg-green-100 hover:-translate-y-2
                                hover:shadow-lg hover:border-green-300"
                            >
                                <span className="text-3xl">
                                    {feature.icon}
                                </span>

                                <h3 className="text-lg font-bold text-green-800 mt-3">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-600 mt-2 leading-7">
                                    {feature.description}
                                </p>
                            </div>
                        ))}

                    </div>
                </section>

                {/* Passion */}
                <section className="bg-green-800 text-white p-6 sm:p-10 rounded-2xl
                    shadow-lg transition-all duration-300 hover:shadow-2xl">

                    <h2 className="text-2xl font-bold mb-4">
                        Our Passion for Food
                    </h2>

                    <p className="text-green-50 leading-8">
                        At Veg-Foodie, food is more than just something we eat.
                        It's a way to bring people together, share traditions,
                        and create beautiful memories.

                        Join us on our journey to make vegetarian food exciting,
                        delicious, and part of a healthier lifestyle.
                    </p>

                    <h3 className="text-xl sm:text-2xl font-extrabold mt-6 text-center">
                        Veg-Foodie — Eat Fresh, Live Healthy, Love Food!
                    </h3>

                </section>

            </div>
        </main>
    );
}
