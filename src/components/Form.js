import React , { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Form = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData ((prev) => {
            return {...prev, [name]: value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form Validation
        if (data.name.length === 0) {
            toast.error("Name field cannot be empty", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
        } else if (data.email.length === 0) {
            toast.error("Email field cannot be empty", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
        } else if (data.password.length === 0) {
            toast.error("Password field cannot be empty", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
        } else {

    }}

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="w-50 p-3 mx-auto">
                    <div className="form-group">
                        <label className="mb-1">Name</label>
                        <input type="text" className="form-control" name="name" value={data.name} onChange={handleChange}/><br/>
                    </div>
                    <div className="form-group">
                        <label className="mb-1">Email</label>
                        <input type="email" className="form-control" name="email" value={data.email} onChange={handleChange}/><br/>
                    </div>
                    <div className="form-group">
                        <label className="mb-1">Password</label>
                        <input type="text" className="form-control" name="password" value={data.password} onChange={handleChange}/><br/>
                    </div>
                    <div className="form-check mt-3 text-center">
                        <button type="submit" className="btn btn-primary justify-content-center">Register User</button>
                        <ToastContainer/>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Form;