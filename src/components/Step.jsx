import React from "react";

function Step({ title, description }) {
  return (
    <div className="w- lg:w-72 h-[5.5rem]">
      <h1 className="font-title font-bold text-lg lg:text-xl leading-5">
        {title}
      </h1>
      <p className="font-body ">{description} </p>
    </div>
  );
}

export default Step;
