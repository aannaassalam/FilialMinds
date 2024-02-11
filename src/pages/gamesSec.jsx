import React from "react";

export default function GamesSec({ cdn }) {
  return (
    <div>
      <iframe
        src={cdn}
        frameborder="0"
        style={{ width: "100%", height: "100vh" }}
      ></iframe>
    </div>
  );
}
