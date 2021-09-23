import React from 'react';

function Project() {
    return (
        <section id="work" className="my-work">
            <div className="work-title">
                <h2 className="section-title">
                    Projects
                </h2>
            </div>
            <div className="flex-work">
                <div className="rb-content">
                    <div>
                        <h3>
                            {/* <!--What I Had For Dinner Project 2--> */}
                            <a href="https://whatihadfordinner.herokuapp.com/">What I Had For Dinner</a>
                            <a href="https://github.com/lchinquee/whatihadfordinner">GitHub</a>
                        </h3>
                        <p>
                            CSS/Animate/JavaScript/Node/Express
                        </p>
                    </div>                    
                </div>
                <div className="wd-content">
                        <div>
                            <h3>
                                {/* <!--Includes link to What's For Dinner Project 1--> */}
                                <a href="https://jilliana328.github.io/whats-for-dinner/">What's For Dinner</a>
                                <a href="https://github.com/lchinquee/whats-for-dinner">GitHub</a>
                            </h3>
                            <p>
                                HTML/CSS/JavaScript/JQuery/Bulma
                            </p>
                        </div>                        
                    </div>
                <div className="flex-row">
                    <div className="led-content">
                        <div>
                            <h3>
                                {/* <!--Coding Quiz Challenge--> */}
                                <a href="https://lchinquee.github.io/nextreams/">Coding Quiz</a>
                                <a href="https://github.com/lchinquee/nextreams">GitHub</a>
                            </h3>
                            <p>
                                HTML/CSS/JavaScript
                            </p>
                        </div>                        
                    </div>   
                    <div className="calc-content">
                        <div>
                            <h3>
                                {/* <!--ReadingList Website--> */}
                                <a href="https://calm-depths-97144.herokuapp.com/">ReadingList</a>
                                <a href="https://github.com/lchinquee/slatorer">GitHub</a>
                            </h3>
                            <p>
                                JavaScript/Node/Express/Handlebars/MySQL2/Seqeulize
                            </p>
                        </div>                        
                    </div>
                </div>   
                <div className="flex-row">
                    <div className="pzl-content">
                        <div>
                            <h3>
                                {/* <!--Daily Schedule Planner--> */}
                                <a href="https://lchinquee.github.io/humorite/">Daily Schedule Planner</a>
                                <a href="https://github.com/lchinquee/humorite">GitHub</a>
                            </h3>
                            <p>
                                HTML/CSS/JavaScript/JQuery/Bootstrap
                            </p>
                        </div>                        
                    </div>   
                    <div className="surf-content">
                        <div>
                            <h3>
                                {/* <!--Includes link to Be Our Guest Project 3--> */}
                                <a href="https://be-our-guest.herokuapp.com/">Be Our Guest</a>
                                <a href="https://github.com/lchinquee/be-our-guest">GitHub</a>
                            </h3>
                            <p>
                                CSS/JavaScript/Node/Express/MongoDB/Bootstrap/GraphQL
                            </p>
                        </div>                        
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;