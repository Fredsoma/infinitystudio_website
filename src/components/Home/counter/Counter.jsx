import React from "react";
import "./counter.css";

const CounterData = [
  {
    number: "5k",
    text: "clients",
  },
  {
    number: "350+",
    text: "Running Projects",
  },
  {
    number: "900+",
    text: "Projects Completed",
  },
];
const Counter = () => {
  return (
    <section className="counter " id="Projects">
      <div className="container">
        <div className="counter_wrapper">
          {CounterData.map((item, index) => (
            <div className="counter_item" key={index}>
              <h3 className="counter_number"> {item.number}</h3>
              <h4 className="counter_title">{item.text}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
