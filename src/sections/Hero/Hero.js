import './Hero.css'
import { PeimaryButton,secondaryButton } from '../../components';
const Hero = () => {
  return (
    <div className="hero-main">
      <div className="hero-text">
        <h6 className="hero-subtitle">welcome to cyborg</h6>
        <h5 className="hero-title"><em>Browse</em> Our Popular Games Here</h5>
        <PeimaryButton>Browse Now</PeimaryButton>
       
      </div>
    </div>
    
  );
};

export default Hero;
