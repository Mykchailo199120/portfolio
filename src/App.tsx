import { useEffect, useState } from 'react';
import Router from "./components/Router";
import Header from "./components/Header";
import 'animate.css'
import Footer from "./components/Footer.tsx";
import {BrowserRouter} from "react-router-dom";


function App() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100); // Час перед запуском анімації
        return () => clearTimeout(timer);
    }, []);

    return (
        <BrowserRouter>
      <div
          className={`transition-opacity duration-2000 ${
              isLoaded ? "opacity-100" : "opacity-0"
          }`}
      >
          <Header/>
          <main>
              <Router/>
          </main>
          <Footer/>
      </div>

        </BrowserRouter>
  );
}

export default App
