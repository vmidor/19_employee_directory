import React from "react";

function Img(props) {
  return (
    <div>
      <img className="Thumbnail" src={props.url} height="150px" />
    </div>
  );
}

export default Img;
