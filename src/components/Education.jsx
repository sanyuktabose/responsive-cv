import React from 'react'
import './Education.css';

export default function Education({ schools }) {
    return (
        <div className='education'>
            <div className="header-text">Education</div>
            <div className='schools'>
                {schools.map(s => <School key={s['institute']} school={s} />)}
            </div>
            <hr className='line'/>
        </div>
    )
}

function School({ school }) {
    return (
        <div className='school'>
            <div className='school-name'>{school['institute']}</div>
            <div className='degree'>{school['degree']}</div>
            <div className='place-and-date'>
                <div className='place'>{school['location']}</div>
                <div className='date'>{school['from']} - {school['to']}</div>
            </div>
        </div>
    );
}
