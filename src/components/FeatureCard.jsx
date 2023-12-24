import "../css/App.css";

// eslint-disable-next-line react/prop-types
export const FeatureCard = ({title, description, Icon}) => {
  return (
    <div className={'whayuni-featured__container-card'}>
      <div className={'whayuni-featured__container-card-content'}>
        <div className={'icon'}><Icon/></div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}