import CustomNavbar from "./CustomNavbar";
import Footer from "./Footer";
import '../styles/homepage.css'
const Base = ({title=" Welcome to our website", children}) => {
    return (
        <div className="container-fluid p-0 m-0">
            <CustomNavbar/>
            
            <div className="wallpaper">
                {children}
            </div>
            <br></br>
            <Footer/>
        </div>
    );
}

export default Base;