import React from 'react';
import { withRouter } from 'react-router';

function Project() {
    return (
        <section>
            <div className="work-title">
                <h2 className="section-title">
                    Work
                </h2>
            </div>
            <div className="flex-work">
                <div className="rb-content">
                    <div>
                        <h3>
                            {/* What I Had For Dinner Project 2 */}
                            <a href="https://whatihadfordinner.herokuapp.com/">What I Had For Dinner</a>
                        </h3>
                        <p>
                            CSS/Animate/JavaScript/Node/Express
                        </p>
                    </div>
                </div>
                <div className="flex-row">
                    <div className="led-content">
                        <div>
                            <h3>
                                {/* Coding Quiz Challenge */}
                                <a href="https://lchinquee.github.io/nextreams/">Coding Quiz</a>
                            </h3>
                            <p>
                                HTML/CSS/JavaScript
                            </p>
                        </div>
                    </div>
                    <div className="calc-content">
                        <div>
                            <h3>
                                <a href="https://jilliana328.github.io/whats-for-dinner/">Calculator</a>
                            </h3>
                            <p>
                                React/JavaScript/CSS
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex-row2">
                    <div className="pzl-content">
                        <div>
                            <h3>
                                {/* What's For Dinner Project 1 */}
                                <a href="https://jilliana328.github.io/whats-for-dinner/">What's For Dinner</a>
                            </h3>
                            <p>
                                HTML/CSS/JavaScript/JQuery
                            </p>
                        </div>
                    </div>
                    <div className="surf-content">
                        <div>
                            <h3>
                                {/* Includes link to Run Buddy project */}
                                <a href="https://lchinquee.github.io/run-buddy/">Run Buddy</a>
                            </h3>
                            <p>
                                HTML/CSS
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default withRouter(Project);