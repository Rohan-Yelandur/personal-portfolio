import "../styles/About.css"

function About() {
    return (
        <section className="about" id="about">
            <div className="about-container">
                <h2 className="section-title">My Journey</h2>

                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <h3 className="timeline-title">Amazon</h3>
                            <p className="timeline-date">May 2025 - Present</p>
                            <p className="timeline-description">Backend Engineer working on scalable cloud solutions. Developed microservices that handle thousands of requests per second and improved system reliability by implementing robust error handling mechanisms.</p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <h3 className="timeline-title">The University of Texas at Austin</h3>
                            <p className="timeline-date">August 2024 - May 2028</p>
                            <p className="timeline-description">Studying computer science for my undergraduate degree.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;