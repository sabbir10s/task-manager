import React from 'react';

const CompleteTask = ({ task, setIsReload, reload, }) => {
    const { taskName, _id, status } = task;
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
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    setIsReload(!reload)
                }
            })

    }

    const handleDelete = (id) => {
        const url = `http://localhost:5000/task/${id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data.deletedCount)
                if (data.deletedCount === 1) {
                    setIsReload(!reload)
                }
            })
    }
    return (
        <div>

            {
                status === 'complete' ?
                    <div className='flex items-center gap-5 hover:bg-white hover:shadow w-full p-2'>
                        <div className='text-primary'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <div className='text-gray-400 flex items-center justify-between w-full'>
                            <p>{taskName}</p>
                            <button className='pr-5' onClick={() => handleDelete(_id)} >
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    :
                    ''
            }
        </div >
    );
};

export default CompleteTask;