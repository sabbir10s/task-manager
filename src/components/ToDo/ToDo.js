import React from 'react';
import useTask from '../Hooks/useTask';

const ToDo = () => {
    const [allTask] = useTask([]);

    return (
        <div className='h-screen bg-slate-200 flex justify-center'>
            <div className=' w-full lg:w-[30%]'>
                {
                    allTask.map(task => <div key={task._id}>
                        {
                            task.status === 'incomplete' ?
                                <div className='flex items-center gap-5 hover:shadow p-2 my-3 bg-white'>
                                    <div className='border border-primary w-5 h-5 rounded-full'>
                                    </div>
                                    <p>{task.taskName}</p>
                                </div>
                                : ''
                        }

                    </div>)
                }
            </div>
        </div>
    );
};

export default ToDo;