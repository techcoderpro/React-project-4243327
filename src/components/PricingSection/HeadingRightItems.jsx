import React from 'react';

function HeadingRightItems({ isicons, isTitle }) {
  return (
    <div className=" mt-5 lg:mt-0 w-[50%] bg-re-200 justify-center items-center  flex gap-2">
      <img
        className="w-[30px] h-[30px] p-1 bg-[#ff6347] rounded-full"
        src={isicons}
        alt="icons image"
      />
      <p className=" text-lg text-[#ff308a] w-[120px]">{isTitle}</p>
    </div>
  );
}

export default HeadingRightItems;
