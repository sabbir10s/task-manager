import React from 'react';

const Home = () => {
    const addTask = e => {
        if (e.keyCode === 13) {
            e.preventDefault();

            console.log('enter');
            const task = e.target.value;
            console.log(task);
        }


    }
    return (
        <div className='min-h-[90vh] bg-slate-200'>
            {/* <h1>Welcome to Task Manager</h1> */}
            <div className='mx-8 pt-10'>
                <form>
                    <div className='flex items-center gap-2'>
                        <div className='border border-primary w-5 h-5 rounded-full'></div>
                        <input onKeyDown={(e) => addTask(e)} className='border border-b-primary w-full py-2 pl-2 focus:outline-none focus:border-b-orange-500' type="text" name="task" id="task" autoComplete='off' placeholder='Add Task' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Home;