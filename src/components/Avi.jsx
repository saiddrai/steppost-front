import React from "react";

function Avi({ name, job, text, picture, stars }) {
  return (
    <div
      className="rounded-2xl border-dashed px-4 py-8 w-56 h-64 border-custom
     flex flex-nowrap flex-col justify-between items-center"
    >
      <img
        src={picture}
        alt="xxx"
        className="rounded-full w-12 h-12  translate-y-[-3.2rem]"
      />{" "}
      <h1 className="text-xl font-bold translate-y-[-3.2rem] ">{name}</h1>
      <p className="font-thin translate-y-[-3rem]">{job}</p>
      <div className="bg-purple py-2 w-10 rounded-full h-10 mb-2 ">
        <p className="  text-center text-white font-bold">{stars}</p>
      </div>
      <p className="font-body text-sm text-center flex">{text}</p>
    </div>
  );
}

export default Avi;
