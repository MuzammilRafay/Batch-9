import React from "react";

function Loader(props) {
  const { loading = false } = props;

  return (
    <div
      className="loader-container"
      style={{ display: loading ? "flex" : "none" }}
    >
      <div className="spinner"></div>
    </div>
  );
}

export default Loader;
