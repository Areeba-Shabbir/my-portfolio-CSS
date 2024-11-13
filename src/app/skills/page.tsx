export default function Skills() {
    return (
        <div>
            <section className="skills-section" id="skills">
                <h2 className="skills-heading">
                    My <span className="highlighted-text">Skills</span>
                </h2>
                <div className="skills-container">
                    <div className="skills-category">
                        <h3 className="category-title">Coding Skills</h3>
                        <div className="skills-list">
                            <div className="skill-progress" aria-labelledby="html-skill">
                                <h4 id="html-skill">HTML <span className="progress-percentage">85%</span></h4>
                                <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                    <span className="progress-fill" style={{ width: '85%' }}></span>
                                </div>
                            </div>
                            <div className="skill-progress" aria-labelledby="css-skill">
                                <h4 id="css-skill">CSS <span className="progress-percentage">75%</span></h4>
                                <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <span className="progress-fill" style={{ width: '75%' }}></span>
                                </div>
                            </div>
                            <div className="skill-progress" aria-labelledby="typescript-skill">
                                <h4 id="typescript-skill">Typescript <span className="progress-percentage">65%</span></h4>
                                <div className="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
                                    <span className="progress-fill" style={{ width: '65%' }}></span>
                                </div>
                            </div>
                            <div className="skill-progress" aria-labelledby="nextjs-skill">
                                <h4 id="nextjs-skill">Next.js <span className="progress-percentage">85%</span></h4>
                                <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                    <span className="progress-fill" style={{ width: '85%' }}></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="skills-category">
                        <h3 className="category-title">Professional Skills</h3>
                        <div className="skills-list">
                            <div className="skill-progress" aria-labelledby="web-design-skill">
                                <h4 id="web-design-skill">Web Design <span className="progress-percentage">65%</span></h4>
                                <div className="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
                                    <span className="progress-fill" style={{ width: '65%' }}></span>
                                </div>
                            </div>
                            <div className="skill-progress" aria-labelledby="resume-making-skill">
                                <h4 id="resume-making-skill">Resume Making <span className="progress-percentage">85%</span></h4>
                                <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                    <span className="progress-fill" style={{ width: '85%' }}></span>
                                </div>
                            </div>
                            <div className="skill-progress" aria-labelledby="portfolio-making-skill">
                                <h4 id="portfolio-making-skill">Portfolio Making <span className="progress-percentage">90%</span></h4>
                                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                    <span className="progress-fill" style={{ width: '90%' }}></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
