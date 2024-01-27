import Base from "../components/Base";
import Vikas from "../Images/Vikas.jpg";
import Sakshi from "../Images/Sakshi.jpg";
import Vaishnavi from "../Images/Vaishnavi.jpg";
import Shubhangi from "../Images/Shubhangi.jpg";
import '../styles/About.css';

const About = () => {
    return (
        <Base>
            <section className="section-white">
                <div className="container" style={{ backgroundColor: 'tranparent' }}>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2 className="section-title">The Team Behind Pacifico</h2>
                        </div>
                        <div className="col-md-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                            <div className="team-item">
                                <img src={Vikas} className="img-fluid team-img1" alt="pic" height={420} width={350} />
                                <h3>Jaiswal Vikas</h3>
                                <div className="team-info">
                                    
                                    <p>
                                        "At the forefront of our digital innovation, our talented frontend developers craft seamless and engaging user experiences, transforming vision into reality through the artful implementation of cutting-edge technologies and design principles."              </p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                            <div className="team-item">
                                <img src={Sakshi} className="img-fluid team-img2" alt="pic" />
                                <h3>Kale Sakshi</h3>
                                <div className="team-info">
                                    <p>
                                        "At the heart of our digital infrastructure, our dedicated backend developers drive the engine of our projects, engineering scalable and secure server-side solutions to seamlessly handle data, optimize performance, and ensure the reliability and efficiency of our systems."              </p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                            <div className="team-item">
                                <img src={Vaishnavi} className="img-fluid team-img3" alt="pic" height={350} width={350} />
                                <h3>T Vaishnavi</h3>
                                <div className="team-info">
                                    <p>
                                        "At the intersection of aesthetics and functionality, our talented UI/UX designers bring visions to life, meticulously crafting visually stunning and intuitively designed interfaces that elevate user experiences, making every interaction with our projects a delightful journey."
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                            <div className="team-item">
                                <img src={Shubhangi} className="img-fluid team-img" alt="pic"/>
                                <h3>T Shubhangi</h3>
                                <div className="team-info">
                                    <p>
                                        "At the core of our data-driven success, our adept database handlers meticulously manage and organize the lifeblood of our projects, ensuring seamless data storage, retrieval, and optimization, fostering reliability and efficiency in every aspect of our digital ecosystem."
                                    </p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </Base>
    );
};

export default About;
