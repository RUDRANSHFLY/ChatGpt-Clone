import { faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Example = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col items-center justify-center mb-5">
          <FontAwesomeIcon icon={faSun} className="mb-2 h-8 w-8 animate-spin" />
          <h2>Examples</h2>
        </div>
        <div className="space-y-2">
          <p className="infoText">&quot;Explain Something to Me&quot;</p>
          <p className="infoText">
            &quot;Who is best DC or Marvel ? who will win ?&quot;
          </p>
          <p className="infoText">
            &quot;What is the distance of Earth from Sun ?&quot;
          </p>
        </div>
      </div>
    </div>
  );
};

export default Example;
