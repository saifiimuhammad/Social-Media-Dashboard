import Card from '../components/Card';


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
        </div>
      </div>
    </main>
  );
}

export default Home;