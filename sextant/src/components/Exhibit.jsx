import React from "react";
import "./Exhibit.css";

const Exhibit = (props) => {
  return (
    <div className="Exhibit">
      <header>
        <h2 className="ExhibitHeading">{props.name}</h2>
      </header>
      <div className="ExhibitContent">{props.children}</div>
    </div>
  );
};

export { Exhibit };
