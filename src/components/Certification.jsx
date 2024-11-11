import React from 'react'
import './Certifications.css';

export default function Certifications({ certs }) {
    return (
        <div className='certification-contaner'>
            <div className="header-text">Certifications</div>
            <div className='certifications'>
                {certs.map(p => <Certification key={p['name']} cert={p} />)}
            </div>
        </div>
    )
}

function Certification({ cert }) {
    return (
        <div className='cert'>
            <div className='cert-header'>
                <div className='cert-name'>{cert['name']} </div>
            </div>
            <div className='cert-desc'>{cert['desc']} </div>
        </div>
    );
}
