import React from "react";

function DashboardHeader(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
  );
}

export default DashboardHeader;
