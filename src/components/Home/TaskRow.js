import React from 'react';
import './TaskRow.css'
const TaskRow = ({ task, setIsReload, reload, }) => {
    const { taskName, _id, status } = task;

    const handleStatus = id => {
        const url = `http://localhost:5000/task/${id}`;
        fetch(url, {
            method: 'PUT',
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
    return (
        <div>
            {
                status === 'incomplete' ?
                    <div className='flex items-center gap-5 hover:bg-white hover:shadow w-full p-2'>
                        <button onClick={() => handleStatus(_id)} className='checkBox border border-primary hover:border-success w-5 h-5 rounded-full flex justify-center items-center'>
                            <div className='check'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </button>
                        <p>{taskName}</p>
                    </div>
                    :
                    ''
            }



        </div>
    );
};

export default TaskRow;