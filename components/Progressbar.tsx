import React from "react";

type Props = {
  progress: number;
};
function Progressbar({ progress }: Props) {
  return (
    <div className='w-full bg-gray-200 rounded-full h-2.5'>
      <div
        className='bg-progress rounded-full h-2.5'
        style={{
          width: `${progress}%`,
        }}></div>
    </div>
  );
}

export default Progressbar;
