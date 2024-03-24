import { Link } from "react-router-dom/cjs/react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/RegForm">Register Form</Link>
                <Link to="/StudentForm">Student Form</Link>
                <Link to="/CourseForm">Course Form</Link>
            </div>
        </nav> 
    );
}

export default Navbar;