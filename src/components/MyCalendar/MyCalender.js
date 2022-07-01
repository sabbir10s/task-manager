import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MyCalender = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div className='flex justify-center'>
            <div className='py-10 lg:py-32'>
                <Calendar onChange={onChange} value={value} />
            </div>
        </div>
    );
};

export default MyCalender;