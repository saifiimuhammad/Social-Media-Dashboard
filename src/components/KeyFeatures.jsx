import KeyFeatureCard from './KeyFeatureCard';

const KeyFeatures = () => {

  return (
    <div className="key-features-container">
      <h2 className="key-features-title title">Key Features</h2>

      <div className="key-features-content">
        <KeyFeatureCard title="Track Engagement" icon="engagement" />
        <KeyFeatureCard title="Automate Posts" icon="automate" />
        <KeyFeatureCard title="Analyze Trends" icon="trend" />
    </div>
    </div>
  )
}

export default KeyFeatures;