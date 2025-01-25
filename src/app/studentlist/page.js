import Link from "next/link";
import React from "react";

const StudentList = () => {
  const studentlist = [
    { id: 1, name: "Aman" },
    { id: 2, name: "Anant" },
    { id: 3, name: "Pragati" },
    { id: 4, name: "Aditya" },
  ];
  return (
    <div>
      <ul>
        {studentlist.map((value, index) => (
          <li key={index}>
            <Link href={`/studentlist/${value.name}`}>{value.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
