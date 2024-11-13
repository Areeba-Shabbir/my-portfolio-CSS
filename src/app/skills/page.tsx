export default function Skills() {
    return (
        <div>
            <section className="skills-section" id="skills">
                <h2 className="skills-heading"> My <span className="highlighted-text">Skills</span></h2>
                <div className="skills-container">
                    <div className="skills-category">
                        <h3 className="category-title">Coding Skills</h3>
                        <div className="skills-list">
                            <div className="skill-progress">
                                <h3>HTML <span className="progress-percentage">85%</span></h3>
                                <div className="progress-bar">
                                    <span className="progress-fill" style={{ width: '85%' }}></span>
                                </div>
                            </div>
                            <div className="skill-progress">
                                <h3>CSS <span className="progress-percentage">75%</span></h3>
                                <div className="progress-bar">
                                    <span className="progress-fill" style={{ width: '75%' }}></span>
                                </div>
                            </div>
                            <div className="skill-progress">
                                <h3>Typescript <span className="progress-percentage">65%</span></h3>
                                <div className="progress-bar">
                                    <span className="progress-fill" style={{ width: '65%' }}></span>
                                </div>
                            </div>
                            <div className="skill-progress">
                                <h3>Next.js <span className="progress-percentage">85%</span></h3>
                                <div className="progress-bar">
                                    <span className="progress-fill" style={{ width: '85%' }}></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="skills-category">
                        <h3 className="category-title">Professional Skills</h3>
                        <div className="skills-list">
                            <div className="skill-progress">
                                <h3>Web Design <span className="progress-percentage">65%</span></h3>
                                <div className="progress-bar">
                                    <span className="progress-fill" style={{ width: '65%' }}></span>
                                </div>
                            </div>
                            <div className="skill-progress">
                                <h3>Resume Making <span className="progress-percentage">85%</span></h3>
                                <div className="progress-bar">
                                    <span className="progress-fill" style={{ width: '85%' }}></span>
                                </div>
                            </div>
                            <div className="skill-progress">
                                <h3>Portfolio Making <span className="progress-percentage">90%</span></h3>
                                <div className="progress-bar">
                                    <span className="progress-fill" style={{ width: '90%' }}></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
