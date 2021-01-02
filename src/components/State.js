import React from "react";

import City from "./City";
export default function State({ states }) {
  const [cityIndex, setCityIndex] = React.useState(-1);

  const handleCity = (event) => {
    let index = event.target.id;
    index = index.charAt(index.length - 1) - 1;

    if (cityIndex === index) {
      setCityIndex(-1);
      return;
    }
    console.log(index);

    setCityIndex(index);
  };

  return (
    <>
      {states.map((item, index) => (
        <div key={index} id={`state${index + 1}`} onClick={handleCity}>
          {item.name}
        </div>
      ))}
      {cityIndex !== -1 && (
        <City cityIndex={cityIndex} city={states[cityIndex]} />
      )}
    </>
  );
}
