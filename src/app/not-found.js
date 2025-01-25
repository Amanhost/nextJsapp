import Link from "next/link";
import React from "react";

const NontFound = () => {
  return (
    <h1>
      Page NontFound please go back<br></br>
      <Link href={"/"}>Back</Link>
    </h1>
  );
};

export default NontFound;
