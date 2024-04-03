import React , { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
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

    const login = () => {
        console.log("User has logged in");
    };

    const refreshToken = async () => {
        return "new_access_token";
    };
    
    const handleSubmit = async (e, next) => {
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
            try {
                const response = await axios.post("http://localhost:4000/api/reg/loginUser", data);
                
                if (response.status === 200) {
                    const { accessToken, refreshToken } = response.data;
    
                    sessionStorage.setItem('accessToken', accessToken);
                    sessionStorage.setItem('refreshToken', refreshToken);
    
                    login(accessToken)
                    // navigate(from, { replace: true}); // Redirect to the intended route
    
                } else if (response.status === 401) {
                    // Unauthorized error (invalid username/password)
                    // Try refreshing the token and retry login if refresh is successful
                    const newAccessToken = await refreshToken();
    
                    if (newAccessToken) {
                        // Retry login with the new access token
                        await handleSubmit(e);
                    } else {
                        toast.error("Invalid Username/Password")
                    }
                } else {
                    console.error("Authentication failed");
                }
            } catch(error) {
                next(error)
            }
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
                        <button type="submit" className="btn btn-primary justify-content-center">Login</button>
                        <ToastContainer/>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;