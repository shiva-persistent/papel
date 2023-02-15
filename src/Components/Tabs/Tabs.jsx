import { useState } from "react";
import "./Tabs.css";

function Tabs({children, toggleState, toggleTab}) {
  

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Phone Number
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Email
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          {children}
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          {children}
        </div>

        
      </div>
    </div>
  );
}

export default Tabs;
