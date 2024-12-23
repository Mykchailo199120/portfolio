import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="text-gray-300 py-8 border-t border-gray-500">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Навігація */}
                <div>
                    <h3 className="font-Allura text-gray-500 text-2xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="font-Allura text-gray-500 text-2xl hover:text-white transition-colors">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="font-Allura text-gray-500 text-2xl hover:text-white transition-colors">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="font-Allura text-gray-500 text-2xl hover:text-white transition-colors">
                                Products
                            </a>
                        </li>
                        <li>
                            <a href="#" className="font-Allura text-gray-500 text-2xl hover:text-white transition-colors">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Соціальні мережі */}
                <div>
                    <h3 className="font-Allura text-gray-500 text-2xl  font-semibold mb-4">Follow Us</h3>
                    <ul className="flex space-x-4">
                        <li>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white"
                            >
                                <i className="fa-brands fa-facebook text-2xl"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white"
                            >
                                <i className="fa-brands fa-instagram text-2xl"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white"
                            >
                                <i className="fa-brands fa-twitter text-2xl"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white"
                            >
                                <i className="fa-brands fa-youtube text-2xl"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Підписка на email */}
                <div>
                    <h3 className="font-Allura text-gray-500 text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
                    <form>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="p-2 rounded-l-md bg-gray-800 border-none focus:ring-2 focus:ring-gray-700 focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="font-Allura text-white text-3xl p-2 bg-gray-500 rounded-r-md hover:bg-gray-500 transition-colors"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center mt-8 border-gray-700 pt-4">
                <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
