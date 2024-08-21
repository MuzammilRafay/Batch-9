import React from "react";



const DisplayCount = (props) => {
  console.log(props, "props");
  return (
    <>
      <p>Count: {props.count}</p>
      <p>Count Two: {props.countTwo}</p>

      
    </>
  );
};

export default DisplayCount;
