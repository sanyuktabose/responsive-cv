import React from 'react'
import './WorkExperience.css';

export default function WorkExperience({companies}) {
  return (
    <div className='work-experience'>
        <div className="header-text">Work Experience</div>
        <div className='companies'>
            {companies.map(c => <Company key={c['org_name']} company={c}/>)}
        </div>
    </div>
  )
}

function Company({company}){
    return(
        <div className='company'>
            <div className='company-header'>
                <div className='company-name'>{company['org_name']} </div>
                <div className='org_name'>| {company['dept']} </div>
                <div className='role_name'>| {company['role']} </div>
                <div className='place-and-date'>
                    <div className='place'>{company['location']}</div>
                    <div className='date'>{company['from']} - {company['to']}</div>
                </div>
            </div>
            <ul className='company-content'>
                {company['desc'].map(d => <li key={d}>{d}</li>)}
            </ul>            
        </div>
    );
}
