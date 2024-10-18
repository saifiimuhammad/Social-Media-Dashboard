
import UserAccountCard from '../components/UserAccountCard';
import SocialStats from '../components/SocialStats';


const Dashboard = () => {
	return (
		<section className="dashboard-section section">
		<div className="dashboard-container container">
		<UserAccountCard />
		<div className="insights-container">
		<h1 className="insights-title">Insights</h1>
		<SocialStats />
		</div>
		</div>
		</section>
	)
}

export default Dashboard;
