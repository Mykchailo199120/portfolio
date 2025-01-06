
import {Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage";
import Biography from "../pages/Biography";
import Page2 from "../pages/Page2";
import Gallery from "../pages/Gallery";
import News from "../pages/News";
import Contacts from "../pages/Contacts";
import Performance from "../pages/Performance.tsx";
import Page3 from "../pages/Page3";
import Page4 from "../pages/Page4.tsx";
import Page5 from "../pages/Page5.tsx";


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/biography" element={<Biography />}>
            <Route path="page2" element={<Page2 />} />
                <Route path="page3" element={<Page3 />}/>
                <Route path="page4" element={<Page4 />}/>
                <Route path="page5" element={<Page5 />}/>
            </Route>
            <Route path="/gallery" element={<Gallery />}/>
            <Route path="/news" element={<News />}/>
            <Route path="/contacts" element={<Contacts />}/>
            <Route path="/performance" element={<Performance />}/>
        </Routes>
    );
};

export default Router;
