import React, { useEffect, useState } from 'react';
import ContactDetails from './components/ContactDetails';
import WorkExperience from './components/WorkExperience';
import { NameHeader } from './components/NameHeader';
import './Page.css';
import Projects from './components/Projects';
import Education from './components/Education';
import TechSkills from './components/TechSkills';

const jsyaml = require('js-yaml');
const config_url = 'https://gist.githubusercontent.com/pritamprasd/dc5f7deeccc69a21ef288e6903d833c7/raw/bcd92c750a4cde91aaf86e8955168791e06e6918/cv.yaml'

export default function Page() {
  const [data, setdata] = useState({});
  useEffect(() => {
    fetch(config_url)
      .then(res => res.text())
      .then(yaml => {
        const json = jsyaml.load(yaml);
        setdata(json);
        console.log(json);
      }).catch(e => console.error(e));
  }, []);

  return (
    <div className="page">
      <NameHeader name="Pritam Prasad" introduction={data['introduction'] || []} />
      <ContactDetails />
      <TechSkills skills={data['tech_stack'] || []} />
      <WorkExperience companies={data['work_experience'] || []} />
      <Projects projects={data['projects'] || []} />
      <Education schools={data['education'] || []} />
    </div>
  );
}


