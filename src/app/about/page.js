"use client";
import { useRouter } from "next/navigation";
import React from "react";

const About = () => {
  const router = useRouter();
  const handleClick = (url) => {
    router.push(url);
  };
  return (
    <div>
      <div>
        <button onClick={() => handleClick("/about/aboutstudent")}>
          AboutStudent
        </button>
        <button onClick={() => handleClick("/about/aboutcollege")}>
          AboutCollage
        </button>
      </div>
    </div>
  );
};

export default About;
