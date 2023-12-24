export const WhIcon = ({color}) => {
  return (
    <div className={"faq-item-button__icon"} style={{cursor: "pointer", color: color}}>
      <div className={"horizontal-line"} style={{backgroundColor: color}}></div>
      <div className={"vertical-line"} style={{backgroundColor: color}}></div>
    </div>
  );
};
