import React from "react";
import Data from "./store";
const ProductDetails = (props) => {
  console.log(props);
  return Data.map((element) => (
    <div style={{ display: "flex", flexDirection: "column" }} key={element.id}>
      {<img src={`${element.imageUrl}`} style={{ width: 200, height: 200 }} />}
      Price:{element.price} Size: {element.size}
    </div>
  ));
};

// const mapProducts = (state, ownProps) => {
//   return { Product: state.ProductDetails[ownProps.match.params.id] };
// };
export default ProductDetails;
