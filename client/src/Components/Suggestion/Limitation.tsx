import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Limitation = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col items-center justify-center mb-5">
          <FontAwesomeIcon
            icon={faExclamationTriangle}
            className=" mb-2 h-8 w-8 animate-pulse"
          />
          <h2>Limitation</h2>
        </div>
        <div className="space-y-2">
          <p className="infoText">"May Generate InCorrect Information"</p>
          <p className="infoText">
            "May occasionally produces harmful content"
          </p>
          <p className="infoText">
            "Limited Knowledge and information after 2021"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Limitation;
