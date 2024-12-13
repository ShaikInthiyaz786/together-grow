import React from "react";

const Circles = () => (
  <div className="d-flex justify-content-center gap-3 my-3">
    {[...Array(5)].map((_, i) => (
      <div
        key={i}
        className="rounded-circle bg-secondary"
        style={{ width: "20px", height: "20px" }}
      ></div>
    ))}
  </div>
);

export default Circles;
