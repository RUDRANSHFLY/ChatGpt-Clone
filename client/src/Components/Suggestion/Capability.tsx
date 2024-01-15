import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Capability = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col items-center justify-center mb-5">
          <FontAwesomeIcon
            icon={faBell}
            className="mb-2 h-8 w-8 animate-bounce"
          />
          <h2>Capabilitiees</h2>
        </div>
        <div className="space-y-2">
          <p className="infoText">
            &quot;Change the ChatGPT Model to use&quot;
          </p>
          <p className="infoText">
            &quot;More Specifaction More Accurate Results&quot;
          </p>
          <p className="infoText">
            &quot;What is the Future Aspects of Farming ?&quot;
          </p>
        </div>
      </div>
    </div>
  );
};

export default Capability;
