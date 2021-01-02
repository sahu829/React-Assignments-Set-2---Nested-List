import React from "react";
import Town from "./Town";

export default function City({ city }) {
  const [townIndex, setTownIndex] = React.useState(-1);

  const handleTown = (event) => {
    let index = event.target.id;
    index = index.charAt(index.length - 1);

    setTownIndex(index);
  };
  return (
    <>
      {city.cities.map((item, index) => (
        <div key={index} id={`city${index}`} onClick={handleTown}>
          {item.name}
        </div>
      ))}

      {townIndex !== -1 && (
        <Town townIndex={townIndex} town={city.cities[townIndex]} />
      )}
    </>
  );
}
