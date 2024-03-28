import { useState, useEffect } from "react";
import axios from "axios";

const UseFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect (() => {
        axios.get(url)
        .then(res => (setData(res.data)))

        .catch(err => console.log(err))
    }, [url]);

    return {data};
}

export default UseFetch;