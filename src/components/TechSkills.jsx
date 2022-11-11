import React from 'react'
import './TechSkills.css';

export default function TechSkills({skills}) {
  return (
    <div className='tech-skills'>
        <div className="header-text">Tech Stack</div>
        <div className='skillset'>
            {skills.map(s => <Skillset key={s['type']} skillset={s}/>)}
        </div>
    </div>
  )
}

function Skillset({skillset}){
    return(
        <div className='skill'>
            <div className='skill-header'><section style={{fontWeight: 'bolder'}}>{skillset['type']}:</section> {skillset['skill']}</div>            
        </div>
    );
}
