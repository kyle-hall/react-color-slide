import React from "react"
import "./ColorSlide.css"
import Color from "../color/Color"

class ColorSlide extends React.Component {

  constructor() {
    super()
    this.state = {
      colors: ["#FF4136", "#FF851B", "#FFDC00", "#2ECC40", "#0074D9", "#B10DC9"]
    }
  }

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
          {this.state.colors.map(color => <Color key={color} color={color}/>)}
        </div>
      </div>
    )
  }
}

export default ColorSlide
