

const Card = (props) => {

  const {title} = props;
  
  return (
    <div className="card">
      <h2>{title}</h2>

      <div className="card-content">
        {
          [
            { 
              title:"Follower", 
              value:"10", 
              change:"+3%" 
            },
            {
              title:"Impressions", 
              value:"13,000", 
              change:"+7%" 
            }
          ].map((item, key) => {

            const { title, value, change } = item;
            return (

              <div className="card-stats" key={key}>
                <h3 className="stat-title">{title}</h3>
                <p className="stat-value">{value}</p>
                <p className="stat-changing">{change}</p>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Card;