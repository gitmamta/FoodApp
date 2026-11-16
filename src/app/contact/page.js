
import { Mail, Phone, Camera, MapPin } from "lucide-react";

export default function Contact() {
    const contacts = [
        {
            icon: Mail,
            title: "Email Us",
            detail: "mamtarana11@gmail.com",
            color: "text-red-600",
            bg: "bg-red-50",
        },
        {
            icon: Phone,
            title: "Call Us",
            detail: "8080129156",
            color: "text-green-600",
            bg: "bg-green-50",
        },
        {
            icon: Camera,
            title: "Follow Us",
            detail: "@vegfoodie",
            color: "text-pink-600",
            bg: "bg-pink-50",
        },
    ];

    return (
        <main className="min-h-screen bg-green-50 px-4 py-12 sm:px-8">

            <div className="max-w-5xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-green-800">
                        Contact Us
                    </h1>

                    <p className="text-green-600 mt-3 text-lg">
                        We'd Love to Hear From You!
                    </p>
                </div>

                {/* Introduction */}
                <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 mb-10
                    transition-all duration-300 hover:shadow-xl">

                    <p className="text-gray-600 text-base sm:text-lg leading-8 text-center">
                        Have questions about our recipes or need help finding
                        your next favorite dish? We'd love to hear from you!
                        Share your feedback, suggestions, or cooking ideas
                        with us. Let's make healthy vegetarian cooking more
                        delicious together! 🌿
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {contacts.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="bg-white rounded-2xl shadow-md p-7 text-center
                                transition-all duration-300
                                hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className={`w-16 h-16 mx-auto rounded-full ${item.bg}
                                    flex items-center justify-center
                                    transition-transform duration-300 hover:scale-110`}>

                                    <Icon size={32} className={item.color} />
                                </div>

                                <h2 className="text-xl font-bold text-gray-800 mt-5">
                                    {item.title}
                                </h2>

                                <p className="text-gray-500 mt-3 break-words">
                                    {item.detail}
                                </p>
                            </div>
                        );
                    })}

                </div>

                {/* Location / Message */}
                <div className="mt-10 bg-green-800 text-white rounded-2xl p-8
                    text-center shadow-lg transition-all duration-300 hover:shadow-2xl">

                    <MapPin size={36} className="mx-auto mb-4 text-green-200" />

                    <h2 className="text-2xl font-bold">
                        Let's Connect!
                    </h2>

                    <p className="text-green-100 mt-3 leading-7">
                        Your suggestions and feedback help us make Veg-Foodie
                        better. Thank you for being part of our food-loving
                        community!
                    </p>

                </div>

            </div>
        </main>
    );
}
