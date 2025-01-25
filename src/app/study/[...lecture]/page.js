"use client";
import React from "react";

const Lecture = ({ params }) => {
  console.log(params);
  return (
    <div>
      {params.lecture.map((value, index) => (
        <div key={index}>{value}</div>
      ))}
    </div>
  );
};

export default Lecture;
