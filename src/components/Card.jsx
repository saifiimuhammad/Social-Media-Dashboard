const Card = (props) => {
  const { title } = props;

  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>

      <div className="card-content">
        {[
          {
            title: "Followers",
            value: "10",
            change: "+3%",
          },
          {
            title: "Impressions",
            value: "13,000",
            change: "+7%",
          },
        ].map((item, key) => {
          const { title, value, change } = item;
          return (
            <div className="card-stats" key={key}>
            
              <h4 className="stat-value">
                {value}<sup className="stat-changing">{change}</sup>
              </h4>
              <h3 className="stat-title">{title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
