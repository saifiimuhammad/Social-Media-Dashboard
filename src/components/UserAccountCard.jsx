
import { useState } from 'react';
import { CiCirclePlus } from "react-icons/ci";


const UserAccountCard = () => {

	const [totalInsights, setTotalInsights] = useState([
                { name: "Likes", value: "560" },                        { name: "Followers", value: "1078" },
                { name: "Views", value: "34562" }
	]);

	return (
		<div className="user-card">
		<div className="user-box">
			<h3 className="user-name">Muhammad Saif</h3>
			<h4 className="user-email">muhammadsaifarain786@gmail.com</h4>
		</div>
		<div className="total-insights">
		{
			totalInsights.map((item, key) => {
				return (
				<span key={key} className="insight-box">
				<h5 className="insight-value">{item.value}</h5>
				<h6 className="insight-title">{item.name}</h6>
					</span>
				)
			})
		}
		</div>
		<div className="socials-connected">
			<span className="socials-box">
				<h5 className="connect-title">Facebook</h5>
				<CiCirclePlus className="connect-icon icons-2" />
		</span>
		</div>
		</div>
	)
}

export default UserAccountCard;
