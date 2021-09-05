import React from 'react';

function Project() {
    return (
        <section>
            <div className="work-title">
                <h2 className="section-title">
                    Project List
                </h2>
            </div>
            <div className="flex-row">
                <div className="rb-content">
                    <h3>
                        {/* What I Had For Dinner Project 2 */}
                        <a href="https://whatihadfordinner.herokuapp.com/">What I Had For Dinner</a>
                        <a href="https://github.com/lchinquee/whatihadfordinner">GitHub Link</a>
                    </h3>
                    <p>
                        CSS/Animate/JavaScript/Node/Express
                    </p>
                </div>
                <div className="led-content">
                    <div>
                        <h3>
                            {/* What's For Dinner Project 1 */}
                            <a href="https://jilliana328.github.io/whats-for-dinner/">What's For Dinner</a>
                            <a href="https://github.com/lchinquee/whats-for-dinner">GitHub Link</a>
                        </h3>
                        <p>
                            HTML/CSS/JavaScript/JQuery
                        </p>
                    </div>
                </div>
                <div className="flex-row">
                    <div className="calc-content">
                        <div>
                            <h3>
                                {/* Coding Quiz Challenge */}
                                <a href="https://lchinquee.github.io/nextreams/">Coding Quiz</a>
                                <a href="https://github.com/lchinquee/nextreams">GitHub Link</a>
                            </h3>
                            <p>
                                HTML/CSS/JavaScript
                            </p>
                        </div>
                    </div>
                    <div className="pzl-content">
                        <div>
                            <h3>
                                {/* ReadingList App - MVP Challenge */}
                                <a href="https://calm-depths-97144.herokuapp.com/">ReadingList App</a>
                                <a href="https://github.com/lchinquee/slatorer">GitHub Link</a>
                            </h3>
                            <p>
                                HTML/CSS
                            </p>
                        </div>
                    </div>
                    <div className="flex-row">
                        <div className="surf-content">
                            <div>
                                <h3>
                                    {/* Run Buddy In-Class Project */}
                                    <a href="https://lchinquee.github.io/run-buddy/">Run Buddy</a>
                                    <a href="https://github.com/lchinquee/run-buddy">GitHub Link</a>
                                </h3>
                                <p>
                                    HTML/CSS
                                </p>
                            </div>

                        </div>
                        <div className="surf-content">
                            <div>
                                <h3>
                                    {/* Work Day Scheduler Challenge */}
                                    <a href="https://github.com/lchinquee/humorite">Work Day Scheduler</a>
                                    <a href="https://lchinquee.github.io/humorite/">GitHub Link</a>
                                </h3>
                                <p>
                                    React/JavaScript/CSS
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;