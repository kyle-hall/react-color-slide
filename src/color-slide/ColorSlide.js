import React from "react";
import "./ColorSlide.css";
import Color from "../color/Color";

class ColorSlide extends React.Component {
  render() {
    const slideStyles = {
      display: "flex",
      justifyContent: "center"
    }

    const colorContainerStyles = {
      display: "flex",
      justifyContent: "space-around"
    }

    return (
      <div style={slideStyles}>
        <div className="color-container" style={colorContainerStyles}>
          <Color color="red" />
          <Color color="orange"/>
          <Color color="yellow"/>
          <Color color="green"/>
          <Color color="blue"/>
          <Color color="violet"/>
        </div>
      </div>
    );
  }
}

export default ColorSlide;
