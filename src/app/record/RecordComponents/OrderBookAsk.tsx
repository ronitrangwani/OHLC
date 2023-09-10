import React from "react";

const AskSection = ({ asks }) => {
  return (
    <div className="ask-section">
      <div className="header-row">
        <div className="header-cell">PRICE</div>
        <div className="header-cell">TOTAL</div>
        <div className="header-cell">AMOUNT</div>
        <div className="header-cell">COUNT</div>
      </div>

      {asks.map((ask) => (
        <div key={ask.id} className="ask-row">
          <div
            className="progress-bar"
            style={{ width: `${Math.abs(ask.total * 10) / 4}%` }}
          ></div>
          <div className="cell">{ask.price}</div>
          <div className="cell">{ask.total.toFixed(4)}</div>
          <div className="cell">{ask.amount.toFixed(4)}</div>
          <div className="cell">{ask.count}</div>
        </div>
      ))}
    </div>
  );
};



export default AskSection;
