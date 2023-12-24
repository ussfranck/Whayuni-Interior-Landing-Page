import {useState} from "react";
import { WhIcon } from "./WhIcon";

// eslint-disable-next-line react/prop-types
export const FaqItem = ({question, answer, categories}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div className={"faq-item__review"}>
        <div className={"faq-item__review-base-question"}>
          <h3>{categories}</h3>
          <h2>{question}</h2>
        </div>
        <div className={"faq-item-button"} onClick={() => setIsOpen(!isOpen)}
             style={{backgroundColor: `${isOpen ? "#696942" : "#222222"}`}}>
          <WhIcon/>
        </div>
      </div>
      <div className={"faq-item__answer"}>
        {isOpen && <p>{answer}</p>}
      </div>
    </div>
  );
}
