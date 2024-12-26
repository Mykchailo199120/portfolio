import { useState } from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Header = () => {
    const [language, setLanguage] = useState('En');
    const [menuOpen, setMenuOpen] = useState(false);
    const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

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

    return (
        <header className="fixed w-full top-2 z-10">
            <div className="flex items-center justify-between">
                {/* Ліва частина - Бутерброд меню */}
                <div className="flex items-center space-x-4">
                    <div className="cursor-pointer" onClick={toggleMenu}>
                        <div className="flex flex-col space-y-1">
                            <span className="block w-8 h-1 bg-gray-700"></span>
                            <span className="block w-8 h-1 bg-gray-700"></span>
                            <span className="block w-8 h-1 bg-gray-700"></span>
                        </div>
                    </div>
                    {menuOpen && (
                        <div
                            className="font-Allura absolute left-0 top-16 shadow-lg rounded-lg p-4 space-y-2 animate__animated animate__fadeIn">
                            <a href="#biography"
                               className=" text-2xl block text-gray-700 hover:text-gray-900">Biography</a>
                            <a href="#gallery" className="text-2xl block text-gray-700 hover:text-gray-900">Gallery</a>
                            <a href="#news"
                               className="text-2xl block text-gray-700 hover:text-gray-900">News</a>
                            <a href="#contacts"
                               className="text-2xl block text-gray-700 hover:text-gray-900">Contacts</a>
                            <a href="#performance"
                               className="text-2xl block text-gray-700 hover:text-gray-900">Performance schedule</a>
                        </div>
                    )}
                </div>

                {/* Центр - Соціальні мережі */}
                <div className="flex space-x-4">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-500">
                        <FaFacebook size={28} />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-500">
                        <FaInstagram size={28} />
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-500">
                        <FaYoutube size={28} />
                    </a>
                </div>

                {/* Права частина - Мови */}
                <div className="relative">
                    <div className="cursor-pointer" onClick={toggleLanguageMenu}>
                        <span className="text-3xl font-Allura">{language}</span>
                    </div>

                    {languageMenuOpen && (
                        <div className="absolute right-0 mt-2 w-30 bg-white shadow-lg rounded-lg animate__animated animate__fadeIn">
                            <div
                                className="font-Allura text-2xl px-2 py-2 hover:bg-gray-200"
                                onClick={() => handleLanguageChange('En')}
                            >
                                En
                            </div>
                            <div
                                className="font-Allura text-2xl px-2 py-2 hover:bg-gray-200"
                                onClick={() => handleLanguageChange('Ru')}
                            >
                                Ru
                            </div>
                            <div
                                className="font-Allura text-2xl px-2 py-2 hover:bg-gray-200"
                                onClick={() => handleLanguageChange('Ned')}
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
