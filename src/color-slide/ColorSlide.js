import React from "react"
import "./ColorSlide.css"
import Color from "../color/Color"

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
          <Color color="#FF4136"/>
          <Color color="#FF851B"/>
          <Color color="#FFDC00"/>
          <Color color="#2ECC40"/>
          <Color color="#0074D9"/>
          <Color color="#B10DC9"/>
        </div>
      </div>
    )
  }
}

export default ColorSlide
