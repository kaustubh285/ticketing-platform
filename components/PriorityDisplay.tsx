import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {
  priority: number;
};

function PriorityDisplay({ priority }: Props) {
  const class1 = priority > 5 ? "text-red-400" : "text-gray-400";
  return (
    <div className='flex justify-start align-baseline'>
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${priority > 0 ? "text-red-400" : "text-gray-400"}`}
      />

      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${priority > 1 ? "text-red-400" : "text-gray-400"}`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${priority > 2 ? "text-red-400" : "text-gray-400"}`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${priority > 3 ? "text-red-400" : "text-gray-400"}`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${priority > 4 ? "text-red-400" : "text-gray-400"}`}
      />
    </div>
  );
}

export default PriorityDisplay;
