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
          <p className="infoText">
            &quot;May Generate InCorrect Information&quot;
          </p>
          <p className="infoText">
            &quot;May occasionally produces harmful content&quot;
          </p>
          <p className="infoText">
            &quot;Limited Knowledge and information after 2021&quot;
          </p>
        </div>
      </div>
    </div>
  );
};

export default Limitation;
