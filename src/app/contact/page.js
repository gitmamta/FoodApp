import { Mail, Phone, Camera} from "lucide-react";
export default function Contact() {
  return (
    <>
      <section className="min-h-screen bg-green-50 hover:bg-pink-50">
        <h5 className="text-3xl font-bold text-center py-4">Contact Us</h5>
        <p className="text-grey-300  transition-shadow mt-4 py-4">
          Have questions about our recipes or need help finding your next
          favorite dish? We'd love to hear from you! Share your feedback,
          suggestions, or cooking ideas with us. Let's make healthy vegetarian
          cooking more delicious together! 🌿
        </p>

        <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 mt-3 p-6 bg-white rounded-2xl">
          <div className="text-green-300 text-center rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
            <Mail size={36} className="text-red-700 mx-auto" />
            <h2>Email us</h2>
            <p>mamtarana11@gmail.com</p>
          </div>
          <div className="text-amber-300 text-center rounded-xl shadow-md p-6 mt-4 hover:shadow-xl transition-shadow">
            <Phone size={36} className="text-green-700 mx-auto" />
            <h2>Call us</h2>
            <p>8080129156</p>
          </div>
          <div className="text-amber-300 text-center rounded-xl shadow-md p-6 mt-4 hover:shadow-xl transition-shadow">
            <Camera size={36} className="text-green-700 mx-auto" />
            <h2>Follow us</h2>
            
          </div>

        </div>
      </section>
    </>
  );
}
