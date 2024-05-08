import React from "react";
import WrapperHoc from "./WrapperHoc";

const likeimageHoc = (props) => {
  return (
    <div>
      <button onClick={props.handleCount}>like image {props.count}</button>
    </div>
  );
};

export default WrapperHoc(likeimageHoc);
