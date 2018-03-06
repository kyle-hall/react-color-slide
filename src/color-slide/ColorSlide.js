import React from "react";
import "./ColorSlide.css";
import Color from "../color/Color";

class ColorSlide extends React.Component {
  render() {
    return (
      <div>
        <h3>Color Slide works.</h3>
        <Color />
        <Color />
        <Color />
        <Color />
        <Color />
        <Color />
      </div>
    );
  }
}

export default ColorSlide;
