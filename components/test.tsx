import menu from "@/Data/menu";
import React, { useState } from "react";
// eslint-disable-next-line react-hooks/rules-of-hooks
const [item, setItem] = useState(menu);

const Test = () => {
  const filterItem = (category: any) => {
    const updateItem = menu.filter((item) => item.title === category);

    setItem(updateItem);
  };
  return (
    <div>
      <p onClick={() => filterItem("breakfast")}>plabr</p>
      <p onClick={() => filterItem("launch")}>plabr</p>
      <p onClick={() => filterItem("dinnre")}>plabr</p>
      <p onClick={() => setItem(menu)}>plabr</p>
    </div>
  );
};

export default Test;
