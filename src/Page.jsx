import React, { useEffect, useState } from 'react';
import ContactDetails from './components/ContactDetails';
import WorkExperience from './components/WorkExperience';
import { NameHeader } from './components/NameHeader';
import './Page.css';
import Projects from './components/Projects';
import Education from './components/Education';
import TechSkills from './components/TechSkills';
import Certifications from './components/Certification';

const jsyaml = require('js-yaml');
const demoGistId = '95fde56b249662cefda97d303fbfb605';
const gistId = process.env.REACT_APP_GIST_ID || demoGistId;

export default function Page() {
  const [data, setdata] = useState({
    'contact': {
      'name': ""
    }
  });

  useEffect(() => {
    fetch(`https://api.github.com/gists/${gistId}`)
      .then(r => r.json())
      .then(t => t['files'][Object.keys(t['files'])[0]]['content'])
      .then(yaml => {
        const json = jsyaml.load(yaml);
        setdata(json);
        // console.log(json);
      })
      .catch(e => console.log(`Error: ${e}`))
  }, []);

  return (
    <div className="page">
      <NameHeader name={data['contact']['name'] || ""} introduction={data['introduction'] || []} />
      <ContactDetails details={data['contact'] || {}}/>
      <TechSkills skills={data['tech_stack'] || []} />
      <WorkExperience companies={data['work_experience'] || []} />
      <Projects projects={data['projects'] || []} />
      <Certifications certs={data['cert'] || []} />
      <Education schools={data['education'] || []} />
    </div>
  );
}


