import Footer from "./Footer";
import Nav from "./Nav";
export default function Layout({ children }) {
    return (
        <div className="main">
            <Nav />
            <div className="container">{children}</div>
            <Footer />
        </div>
    );
}
