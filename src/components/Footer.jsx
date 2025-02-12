
const Footer = () => {
  return (
    <footer className=" bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-2">CourseFlow</h2>
            <p className="text-sm lg:w-5/6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              vitae elit libero, a pharetra augue.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-2">Quick Links</h2>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-lg font-bold mb-2">Contact Us</h2>
            <p className="text-sm mb-2">Email: info@company.com</p>
            <p className="text-sm mb-2">Phone: +1 234 567 890</p>
            <p className="text-sm mb-2">Address: 123 Street, City, Country</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} CourseFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
