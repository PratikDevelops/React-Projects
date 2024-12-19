import React, { useState } from "react";
import data from "./FaqData"
import "./Accordion.css"; 

function Accordion() {
  const [selected, setSelected] = useState(null);

  function handleClick(currentId) {
    setSelected(selected === currentId ? null : currentId);
  }

  return (
    <div className="accordion">
      {data.map((item) => (
        <div className="accordion-item" key={item.id}>
          <div
            className="accordion-question"
            onClick={() => handleClick(item.id)}
            tabIndex="0"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleClick(item.id);
              }
            }}
          >
            <h3>{item.question}</h3>
            <span className={selected === item.id ? "rotate" : ""}>+</span>
          </div>
          <div
            className={`accordion-answer ${
              selected === item.id ? "open" : ""
            }`}
          >
            <h3>{item.answer}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
