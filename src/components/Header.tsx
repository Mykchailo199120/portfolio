import { useState, useEffect, useRef } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
    const [language, setLanguage] = useState("En");
    const [menuOpen, setMenuOpen] = useState(false);
    const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const languageMenuRef = useRef<HTMLDivElement | null>(null);

    const handleLanguageChange = (lang: string) => {
        setLanguage(lang);
        setLanguageMenuOpen(false);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleLanguageMenu = () => {
        setLanguageMenuOpen(!languageMenuOpen);
    };

    // Закриваємо меню при кліку поза його областю
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            const target = event.target as Node;
            if (
                menuRef.current &&
                !menuRef.current.contains(target) &&
                menuOpen
            ) {
                setMenuOpen(false);
            }
            if (
                languageMenuRef.current &&
                !languageMenuRef.current.contains(target) &&
                languageMenuOpen
            ) {
                setLanguageMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, [menuOpen, languageMenuOpen]);

    return (
        <header className="fixed top-0 left-0 px-2 justify-between items-center bg-opacity-50 bg-gray-200 shadow-sm w-full z-50">
            <div className="flex items-center justify-between">
                {/* Ліва частина - Бутерброд меню */}
                <div className="flex items-center space-x-4">
                    <div
                        className="cursor-pointer"
                        onClick={toggleMenu}
                        ref={menuRef}
                    >
                        <div className="flex flex-col space-y-1">
                            <span className="block w-8 h-1 bg-gray-700"></span>
                            <span className="block w-8 h-1 bg-gray-700"></span>
                            <span className="block w-8 h-1 bg-gray-700"></span>
                        </div>
                    </div>
                    {menuOpen && (
                        <div
                            className="font-Allura absolute left-0 top-16 bg-gray-200 rounded-lg p-4 space-y-2 animate__animated animate__fadeIn"
                            ref={menuRef}
                        >
                            <Link
                                to="/"
                                className="text-2xl block text-gray-700 hover:text-gray-900"
                                onClick={() => setMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                to="/biography"
                                className=" text-2xl block text-gray-700 hover:text-gray-900"
                                onClick={() => setMenuOpen(false)}
                            >
                                Biography
                            </Link>
                            <Link
                                to="/gallery"
                                className=" text-2xl block text-gray-700 hover:text-gray-900"
                                onClick={() => setMenuOpen(false)}
                            >
                                Gallery
                            </Link>
                            <Link
                                to="/news"
                                className=" text-2xl block text-gray-700 hover:text-gray-900"
                                onClick={() => setMenuOpen(false)}
                            >
                                News
                            </Link>
                            <Link
                                to="/contact"
                                className=" text-2xl block text-gray-700 hover:text-gray-900"
                                onClick={() => setMenuOpen(false)}
                            >
                                Contacts
                            </Link>
                            <Link
                                to="/performance"
                                className=" text-2xl block text-gray-700 hover:text-gray-900"
                                onClick={() => setMenuOpen(false)}
                            >
                                Performance schedule
                            </Link>
                        </div>
                    )}
                </div>

                {/* Центр - Соціальні мережі */}
                <div className="flex space-x-5 ml-4">
                    <a
                        href="https://www.facebook.com/people/Dmitriy-Mikheev/61569885217434/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-gray-500"
                    >
                        <FaFacebook size={28} />
                    </a>
                    <a
                        href="https://www.instagram.com/dmitriy.mikheev.official/?igsh=MWM5MW51eG82Z2xjdA%3D%3D&utm_source=qr#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-gray-500"
                    >
                        <FaInstagram size={28} />
                    </a>
                    <a
                        href="https://www.youtube.com/@%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9%D0%9C%D0%B8%D1%85%D0%B5%D0%B5%D0%B2-%D0%B17%D1%8D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-gray-500"
                    >
                        <FaYoutube size={28} />
                    </a>
                </div>

                {/* Права частина - Мови */}
                <div className="relative" ref={languageMenuRef}>
                    <div className="cursor-pointer" onClick={toggleLanguageMenu}>
                        <span className="text-2xl font-Allura">Language</span>
                    </div>

                    {languageMenuOpen && (
                        <div className="absolute right-0 mt-2 w-30 bg-gray-300 shadow-lg rounded-lg animate__animated animate__fadeIn">
                            <div
                                className={`font-Allura text-2xl px-2 py-2 hover:bg-gray-200 ${
                                language === "En" ? "font-Allura text-gray-700" : ""
                                }`
}
                                onClick={() => handleLanguageChange("En")}
                            >
                                En
                            </div>
                            <div
                                className={`font-Allura text-2xl px-2 py-2 hover:bg-gray-200 ${
                                    language === "Ru" ? "font-Allura text-gray-700" : ""
                                }`}
                                onClick={() => handleLanguageChange("Ru")}
                            >
                                Ru
                            </div>
                            <div
                                className={`font-Allura text-2xl px-2 py-2 hover:bg-gray-200 ${
                                    language === "Ned" ? "font-Allura text-gray-700" : ""
                                }`}
                                onClick={() => handleLanguageChange("Ned")}
                            >
                                Ned
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
