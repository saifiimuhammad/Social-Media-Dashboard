import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import user from '../assets/data/socialData';

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SocialStats = () => {
  const [socialInsights, setSocialInsights] = useState([]);

  useEffect(() => {
    try {
      console.log(user.socials);
      setSocialInsights(user.socials);
    } catch (error) {
      console.error("Error fetching social data: ", error);
    }
  }, []);

  const getChartData = (insights, socialName) => {
    const insightKeys = Object.keys(insights);
    const formattedLabels = insightKeys.map(key => 
      key.charAt(0).toUpperCase() + key.slice(1)
    );

    return {
      labels: formattedLabels,
      datasets: [
        {
          label: socialName,
          data: insightKeys.map(key => insights[key] || 0),
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(54, 162, 235, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
  };


  // Fallback UI while data is being loaded
  if (socialInsights.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <main className="social-stats-section">
    <div className="social-stats container">
    {socialInsights.map((item, key) => {
      const insights = item.insights || {};
      const socialName = item.socialName || 'Unknown';

      return (
        <div key={key} className="user-insights-container">
        <div className="social-title-box">
        <h2 className="social-main-title">{socialName}</h2>
        <hr className="title-line" />
        </div>
        <div className="social-insight">
        {Object.entries(insights).map(([name, value], insightKey) => (
          <span key={insightKey} className="insight-box">
          <h5 className="insight-value">{value}</h5>
          <h6 className="insight-title">{name}</h6>
          </span>
        ))}
        </div>
        <Bar data={getChartData(insights, socialName)} options={{ responsive: true }} />
        </div>
      );
    })}
    </div>
    </main>
  );
};

export default SocialStats;
