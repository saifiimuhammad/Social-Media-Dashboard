import SupportedPlatforms from '../components/SupportedPlatforms';
import KeyFeatures from '../components/KeyFeatures';


const Home = () => {
  return (
    <main className="home">
      <div className="home-container container">
        <div className="home-content">
          <h1 className="home-title">
            Social <br/>Media <br/> Dashboard
          </h1>
          <h4 className="home-subtitle">Track, Analyze, Grow - Your Social Media Success Hub!</h4>

          <button className="home-btn btn">Get Started</button>


          <div className="home-figure"></div>

          <SupportedPlatforms />
          <KeyFeatures />
        </div>
      </div>
    </main>
  );
}

export default Home;