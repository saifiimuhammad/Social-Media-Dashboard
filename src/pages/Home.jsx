import Card from '../components/Card';


const Home = () => {
  return (
    <main className="home">
      <div className="home-container container">
        
          <Card title="Facebook" />
        <Card title="Instagram" />
      <Card title="Linkedin" />
        <Card title="Twitter" />
      </div>
    </main>
  );
}

export default Home;