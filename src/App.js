import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout";
import About from "./Components/PAGES/About";
import Contact from "./Components/PAGES/Contact";
import Menu from "./Components/PAGES/Menu";
function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Layout>
    );
}

export default App;
