import React from "react";
import Town from "./Town";

export default function City({ city }) {
  const [townIndex, setTownIndex] = React.useState(-1);

  const handleTown = (event) => {
    let index = event.target.id;
    index = index.charAt(index.length - 1) - 1;

    if (townIndex === index) {
      setTownIndex(-1);
      return;
    }
    setTownIndex(index);
  };
  return (
    <>
      {city.cities.map((item, index) => (
        <div key={index} id={`city${index + 1}`} onClick={handleTown}>
          {item.name}
        </div>
      ))}

      {townIndex !== -1 && (
        <Town townIndex={townIndex} town={city.cities[townIndex]} />
      )}
    </>
  );
}
