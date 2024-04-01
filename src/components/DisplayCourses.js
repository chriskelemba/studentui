import { useState, useEffect } from "react";
import axios from "axios";

const DisplayCourses = () => {
        const [data, setData] = useState ([])

        useEffect(() => {
            axios.get("http://localhost:4000/api/course/getAllCourse")
            .then(res => {setData(res.data) })
            .then(err => console.log(err))
        })
    
    return (
        <table className="mx-auto w-25 table table-hover table-striped table-secondary">
            <thead>
                <tr>
                    <th>Course Name</th>
                </tr>
            </thead>
            <tbody>
                {data.map((d, i) => (
                    <tr key={i}>
                        <td>{d.courseName}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default DisplayCourses;