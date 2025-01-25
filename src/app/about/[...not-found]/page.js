import Link from "next/link";
import React from "react";

const NontFound = () => {
  return (
    <h1>
      About Page NontFound please go back
      <Link href={"/"}>Back</Link>
    </h1>
  );
};

export default NontFound;
