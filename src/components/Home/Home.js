import React, { useEffect, useState } from 'react';
import CompleteTask from './CompleteTask';
import TaskRow from './TaskRow';

const Home = () => {
    const [task, setTask] = useState([]);

    const [reload, setIsReload] = useState(true);

    const addTask = e => {
        if (e.keyCode === 13) {
            e.preventDefault();
            const taskName = e.target.value;
            const status = 'incomplete';
            const url = "http://localhost:5000/task";
            fetch(url, {
                method: "POST",
                body: JSON.stringify({ taskName, status }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })

                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    if (data.insertedId) {
                        setIsReload(!reload)
                    }

                })

        }
    }


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
                setTask(data));
    }, [reload])



    return (
        <div className='min-h-[90vh] bg-slate-200 flex justify-center'>
            <div className='mx-8 pt-10 lg:w-[30%]'>
                <form>
                    <div className=' flex'>
                        <input onKeyDown={(e) => addTask(e)} className='hover:cursor-pointer border-b border-b-primary w-full py-2 pl-2 focus:outline-none focus:cursor-auto' type="text" name="taskName" id="task" autoComplete='off' placeholder='Add Task' />
                        <p className='text-3xl text-primary font-bold px-2 border-b border-b-primary bg-white'>+</p>
                    </div>
                </form>

                <div className='mt-3 bg-slate-50'>
                    {
                        task.length === 0 ? '' : task?.map(task => <TaskRow key={task._id} setTask={setTask} reload={reload} setIsReload={setIsReload} task={task} />)
                    }
                </div>
                <div className='mt-3 bg-slate-50'>
                    <h1 className='text-success mt-3 font-medium text-2xl'>Completed Task</h1>
                    {
                        task.length === 0 ? '' : task?.map(task => <CompleteTask key={task._id} reload={reload} setIsReload={setIsReload} task={task} />)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;