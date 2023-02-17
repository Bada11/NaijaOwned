import "./App.css";
import Businesses from "./Businesses";

import Categories from "./Components/Categories";
import Getstarted from "./Components/Getstarted";
import Header from "./Components/Header";
import Discover from "./Discover";
import Image from "./Image";

const App = () => {
  // const [Categories, setCategories] = useState([
  //   {
  //     id: 1,
  //     text: "",
  //   },

  //   {
  //     id: 2,
  //     text: "",
  //   },

  //   {
  //     id: 3,
  //     text: "",
  //   },

  //   {
  //     id: 4,
  //     text: "",
  //   },

    
  // ]);

  return (
    <div>
      <Getstarted />
      <Header />
      <Image />
      <Categories />
      <Discover />
     <Businesses />
    </div>
  );
};

export default App;
