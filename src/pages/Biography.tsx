import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Biography: React.FC = () => {
    const location = useLocation();

    // Показуємо основний текст, лише якщо ви на маршруті "/biography"
    const isMainBiographyPage = location.pathname === "/biography";

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 mt-8 relative">
            <h1 className="text-6xl absolute top-4 left-4 font-Allura mb-8">Biography</h1>

            {isMainBiographyPage && (
                <>
                    <h2 className="text-5xl font-Allura font-semibold mb-4">Dmitriy Mikheev</h2>
                    <div className="w-60 h-0.5 bg-gray-700 mb-4"></div>
                    <p className="text-4xl font-Allura text-center">
                        Is an outstanding contemporary opera singer
                        with a unique voice that has captivated audiences worldwide.
                        Born in 1986 in the small yet picturesque town of Putyvl, Ukraine,
                        into a carpenter's family, Dmitriy grew up in an atmosphere of hard
                        work and simplicity.
                    </p>
                    <div className="w-60 h-0.5 bg-gray-700 mt-4 "></div>
                </>
            )}

            {/* Тут рендериться дочірній маршрут (Page2, тощо) */}
            <div className="w-full max-w-2xl">
                <Outlet />
            </div>

            {/* Навігація між сторінками */}
            <nav className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
                <Link
                    to="/biography"
                    className="text-gray-500 hover:text-gray-500 px-4 py-2 border rounded hover:bg-gray-200"
                >
                    1
                </Link>
                <Link
                    to="page2"
                    className="text-gray-500 hover:text-gray-500 px-4 py-2 border rounded hover:bg-gray-200"
                >
                    2
                </Link>
                <Link
                    to="page3"
                    className="text-gray-500 hover:text-gray-500 px-4 py-2 border rounded hover:bg-gray-200"
                >
                    3
                </Link>
                <Link
                    to="page4"
                    className="text-gray-500 hover:text-gray-500 px-4 py-2 border rounded hover:bg-gray-200"
                >
                    4
                </Link>
                <Link
                    to="page5"
                    className="text-gray-500 hover:text-gray-500 px-4 py-2 border rounded hover:bg-gray-200"
                >
                    5
                </Link>
            </nav>
        </div>
    );
};

export default Biography;
