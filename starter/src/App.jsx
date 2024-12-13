import { useState } from "react";
import Title from "./Title";
import data from "./data";
import Menu from "./Menu";
import Categories from "./Categories";
const tempCategories = ["all", ...new Set(data.map((item) => item.category))];
const App = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(tempCategories);
  const handleFilter = (category) => {
    console.log(category);
    if (category === "all") {
      setMenuItems(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    console.log({ newItems });
    setMenuItems(newItems);
  };
  console.log(menuItems);
  return (
    <main>
      <Title text={"our menu"} />
      <Categories categories={categories} handleFilter={handleFilter} />
      <Menu menuItems={menuItems} />
    </main>
  );
};

export default App;
