// import { render } from "@testing-library/react";
import React from "react";
// import { Link } from "react-router-dom";
import Data from "./store";
import { Link } from "react-router-dom";
class Products extends React.Component {
  //   state = { titles: [], id: [] };
  //   componentDidMount() {
  //     const allTitles = Data.map((element) => element.title);
  //     this.setState({ titles: allTitles });
  //   }

  render() {
    return (
      <div>
        {Data.map((element) => (
          <Link to={`/products/${element.id}`}>
            <button style={{ margin: 4 }} key={element.id}>
              {element.title}
            </button>
          </Link>
        ))}

        <Link to={"/products/"}>
          <button>Back</button>
        </Link>
      </div>
    );
  }
}
export default Products;
