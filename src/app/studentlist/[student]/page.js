"use client";
import Link from "next/link";
import React from "react";

const StudentDetails = ({ params }) => {
  console.log("sdsdsdsdssd", params);
  return (
    <div>
      <Link href={"/studentlist"}>back</Link>
      <h1>{params.student}</h1>
    </div>
  );
};

export default StudentDetails;
