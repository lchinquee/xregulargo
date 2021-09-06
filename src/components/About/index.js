import React from 'react';
import coverImage from '../../assets/cover/profile-pic.jpg';

function About() {
  return (
    <section>
      <container>
        <div className="flex-row">
          <img src={coverImage} className="my-2" style={{ width: "50%" }} alt="cover" />
        </div>
        <div className="flex-row">
          <p>Leslie ChinQuee is a Systems Engineer II at Sterling Medical Devices. Currently, working on device design and development, actively learning about the software side of the process.</p>
        </div>
      </container>    
    </section>
  );
}

export default About;