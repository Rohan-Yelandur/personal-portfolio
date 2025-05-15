import "../styles/Hero.css"
import heroPic from "../assets/hero-pic.jpg"

function Hero() {
    return (
        <div className="hero" id="home">
            <div className="hero-content">
                <h1 className="name">Hi, I'm Rohan</h1>
                <p className="subtitle">Software Engineer</p>
                <p className="description">I build cool stuff.</p>
            </div>
            <img src={heroPic} alt="Nice pic of me" className="hero-pic" />
        </div>
    );
}

export default Hero;