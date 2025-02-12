import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-gray-800">Contact Us</h2>
      <p className="text-center text-gray-600 mt-2">We&apos;d love to hear from you!</p>

      <div className="grid md:grid-cols-2 gap-10 mt-8">
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-blue-600 text-2xl" />
            <p className="text-gray-700">123 Tech Street, City, Country</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaPhoneAlt className="text-blue-600 text-2xl" />
            <p className="text-gray-700">+123 456 7890</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-blue-600 text-2xl" />
            <p className="text-gray-700">contact@yourcompany.com</p>
          </div>
        </div>

        <form  className="bg-white shadow-lg p-6 rounded-lg">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full mt-1 p-2 border rounded-lg"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full mt-1 p-2 border rounded-lg"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              required
              rows="4"
              className="w-full mt-1 p-2 border rounded-lg"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
