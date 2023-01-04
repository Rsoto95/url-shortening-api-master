import "./hero-banner.css";
import image from "../../images/illustration-working.svg"

const Hero = () => {
  return (
    <section className="hero-banner">
      <div className="hero-banner-left">
        <div>More than just shorter links</div>
        <div>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </div>
        <button>Get Started</button>
      </div>
      <div className="hero-banner-right">
        <img className="image" src={image}/>
      </div>
    </section>
  );
};

export default Hero;
