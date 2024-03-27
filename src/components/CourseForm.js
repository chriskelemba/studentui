import React , { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const CourseForm = () => {
    const [data, setData] = useState({
        courseName: '',
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
        if (data.courseName.length === 0) {
            toast.error("Course name field cannot be empty", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
        } else {
            axios.post("http://localhost:4000/api/course/addCourse", data)
            .then(res => {
                setData(res.data);
    
                toast.success("New course successfully added", {
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
                        <label className="mb-1">Course Name</label>
                        <input type="text" className="form-control" name="courseName" value={data.courseName} onChange={handleChange}/><br/>
                    </div>
                    <div className="form-check mt-3 text-center">
                        <button type="submit" className="btn btn-primary justify-content-center">Enter Course</button>
                        <ToastContainer/>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CourseForm;