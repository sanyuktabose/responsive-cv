import React from 'react'
import './Projects.css';

export default function Projects({ projects }) {
    return (
        <div className='projects-container'>
            <div className="header-text">Other Projects</div>
            <div className='projects'>
                {projects.map(p => <Project key={p['name']} project={p} />)}
            </div>
        </div>
    )
}

function Project({ project }) {
    return (
        <div className='project'>
            <div className='project-header'>
                <div className='project-name'>{project['name']} </div>
                <div className='project-link'>{project['link']} </div>
            </div>
            <div className='project-desc'>{project['desc']} </div>
        </div>
    );
}
