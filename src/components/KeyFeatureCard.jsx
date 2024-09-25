import { GiTargetShot } from "react-icons/gi";
import { MdAutoAwesome } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";


const KeyFeatureCard = (props) => {

const { title, icon } = props;

  const checkIcon = (icon, classAdd) => {
    switch(icon) {
      case "engagement":
        return <GiTargetShot className={classAdd} />;
      case "automate":
        return <MdAutoAwesome className={classAdd} />;
      case "trend":
        return <FaArrowTrendUp className={classAdd} />;
    }
  }
  
  return (
    <div className="key-feature-card">
      <div className="feature-icon-container">{checkIcon(icon, "social-icons")}</div>
      <h3 className="feature-title">
        {title}
      </h3>
    </div>
  )
}

export default KeyFeatureCard;