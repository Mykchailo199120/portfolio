import { useEffect, useState } from 'react';
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import 'animate.css'
import Sliders from "./components/Sliders.tsx";
import Footer from "./components/Footer.tsx";



function App() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100); // Час перед запуском анімації
        return () => clearTimeout(timer);
    }, []);


    return (
      <div
          className={`transition-opacity duration-2000 ${
              isLoaded ? "opacity-100" : "opacity-0"
          }`}
      >
          <Header/>
          <main>
              <MainPage/>
              <Sliders/>
          </main>
          <Footer/>
      </div>
  )
}

export default App
