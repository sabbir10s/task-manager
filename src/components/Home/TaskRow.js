import React, { useState } from 'react';
import './TaskRow.css'
const TaskRow = ({ task, setIsReload, reload, setTask }) => {
    const { taskName, _id, status } = task;

    const [editTask, setEditTask] = useState(taskName || '');

    const handleStatus = id => {
        const url = `http://localhost:5000/task/${id}`;
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify({ status: 'complete' }),
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => {
                console.log('res for all users', res);
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    setIsReload(!reload)
                }
            })

    }

    const keyDownHandler = (e) => {
        if (e.key === 'Enter') {
            const url = `http://localhost:5000/task/${_id}`;
            fetch(url, {
                method: "PUT",
                body: JSON.stringify({ taskName: e.target.value }),
                headers: {
                    'Content-type': 'application/json',
                },
            })

                .then((res) => res.json())
                .then((data) => console.log(data))
            e.target.blur();

        }
    }

    const updateTask = (e) => {
        setEditTask(e.target.value);
    }

    return (
        <div>
            {
                status === 'incomplete' ?
                    <div className='flex items-center gap-5 hover:bg-white hover:shadow w-full p-2'>
                        <button onClick={() => handleStatus(_id)} className='checkBox border border-primary hover:border-orange-500 w-5 h-5 flex justify-center items-center'>
                            <div className='check'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </button>
                        <input onKeyDown={keyDownHandler} onChange={updateTask} className='w-full focus:outline-none focus:border-none' type="text" name='task' value={editTask} autoComplete='off' />
                    </div>
                    :
                    ''
            }



        </div>
    );
};

export default TaskRow;