import React from 'react';

function Resume() {
  return (
    <section>
        <h2>Resume Link</h2>
        <div>
            <a href="https://github.com/lchinquee/xregulargo/files/7108588/resume.pdf">Leslie ChinQuee's Resume</a>
        </div>
        <h2>List of Proficiencies</h2>
        <div className="proficiencies">
            <ul>
                <li>
                    HTML, CSS, JavaScript
                </li>
                <li>
                    Node, Express, React, MySQL, MongoDB
                </li>
            </ul>
        </div>
    </section>
  );
}

export default Resume;