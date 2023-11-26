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
          <p className="infoText">"Change the ChatGPT Model to use"</p>
          <p className="infoText">"More Specifaction More Accurate Results"</p>
          <p className="infoText">"What is the Future Aspects of Farming ?"</p>
        </div>
      </div>
    </div>
  );
};

export default Capability;
