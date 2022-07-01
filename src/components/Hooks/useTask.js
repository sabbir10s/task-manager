import { useEffect, useState } from "react";

const useTask = () => {
    const [allTask, setAllTask] = useState([])

    useEffect(() => {
        const url = 'http://localhost:5000/task';
        fetch(url, {
            method: "GET",
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data =>
                setAllTask(data));
    }, [])
    return [allTask, setAllTask];
};

export default useTask;