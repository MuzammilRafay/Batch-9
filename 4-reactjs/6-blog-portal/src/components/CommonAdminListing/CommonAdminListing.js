import { Button } from "antd";
import React from "react";

function CommonAdminListing({
  tableRender = null,
  btnRender = null,
  title = "Categories",
}) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 30,
        }}
      >
        <h2 style={{ margin: 0 }}>{title}</h2>

        {btnRender}
      </div>
      {tableRender}
    </div>
  );
}

export default CommonAdminListing;
