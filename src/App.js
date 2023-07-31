import { Container } from "react-bootstrap";
import AppNavbar from "./Components/AppNavbar";
import AppHeader from "./Components/AppHeader";
import AppCategories from "./Components/AppCategories";
import AppItemsList from "./Components/AppItemsList";
import { Data } from "./Components/AppData";
import { useState } from "react";

const App = () => {
  const [items, setItems] = useState(Data);

  // Get All Category
  const allCategory = ["All", ...new Set(items.map((item) => item.category))];

  // Filter By Category
  const filterByCategory = (cat) => {
    if (cat === "All") {
      setItems(Data);
    } else {
      const newArray = Data.filter((item) => item.category === cat);
      setItems(newArray);
      console.log(cat);
    }
  };

  // Filter By Search
  const filterBySearch = (word) => {
    if (word !== "") {
      const newArray = Data.filter((item) => (item.title === word)||(item.title === word.toUpperCase()));
      setItems(newArray);
    }
  };

  return (
    <div>
      <AppNavbar filterBySearch={filterBySearch} />
      <Container>
        <AppHeader />
        <AppCategories
          filterByCategory={filterByCategory}
          allCategory={allCategory}
        />
        <AppItemsList items={items} />
      </Container>
    </div>
  );
};

export default App;
