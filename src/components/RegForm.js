import React , { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegForm = () => {
    const [data, setData] = useState({
        regName: '',
        regEmail: '',
        regPassword: ''
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
        if (data.regName.length === 0) {
            toast.error("Name field cannot be empty", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
        } else if (data.regEmail.length === 0) {
            toast.error("Email field cannot be empty", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
        } else if (data.regPassword.length === 0) {
            toast.error("Password field cannot be empty", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
        } else {
            axios.post("http://localhost:4000/api/reg/addReg", data)
            .then(res => {
                setData(res.data);
                
                console.log()
                
                toast.success("New registration successfully added", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                })
            }).catch (err => {
                console.log(err)
        })
    }}

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="w-25 p-3 mx-auto">
                    <div className="form-group">
                        <label className="mb-1">Name</label>
                        <input type="text" className="form-control" name="regName" value={data.regName} onChange={handleChange}/><br/>
                    </div>
                    <div className="form-group">
                        <label className="mb-1">Email</label>
                        <input type="email" className="form-control" name="regEmail" value={data.regEmail} onChange={handleChange}/><br/>
                    </div>
                    <div className="form-group">
                        <label className="mb-1">Password</label>
                        <input type="password" className="form-control" name="regPassword" value={data.regPassword} onChange={handleChange}/><br/>
                    </div>
                    <div className="form-check mt-3 text-center">
                        <button type="submit" className="btn btn-primary justify-content-center">Register</button>
                        <ToastContainer/>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default RegForm;