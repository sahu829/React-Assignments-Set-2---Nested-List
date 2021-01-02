import React from "react";

export default function Town({ town }) {
  console.log(town);

  const handleTown = () => {};
  return (
    <>
      {town.towns.map((item, index) => (
        <div key={index} id={`town${index + 1}`} onClick={handleTown}>
          {item.name}
        </div>
      ))}
    </>
  );
}
