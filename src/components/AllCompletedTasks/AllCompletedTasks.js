import useTask from '../Hooks/useTask';

const AllCompletedTasks = () => {
    const [allTask] = useTask([]);

    return (
        <div className='h-screen bg-slate-200 flex justify-center'>
            <div className=' w-full lg:w-[30%]'>
                {
                    allTask.map(task => <div key={task._id}>
                        {
                            task.status === 'complete' ?
                                <div className='flex items-center gap-5 hover:shadow p-2 my-3 bg-white'>
                                    <div className='border border-success w-5 h-5 rounded-full flex justify-center items-center'>
                                        <div className='text-success'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
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

export default AllCompletedTasks;