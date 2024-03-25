import { Outlet } from "react-router-dom";
import Nav from "../component/Nav/Nav";
import Footer from "../component/Footer/Footer";


const MainLayOut = () => {
    return (
        <div>
            <div className="h-16">
            <Nav></Nav>
            </div>
            <div className="min-h-[calc(100vh-116px)]">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;