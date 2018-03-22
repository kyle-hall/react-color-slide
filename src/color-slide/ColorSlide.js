import React from "react"
import Color from "../color/Color"
import { RED, ORANGE, YELLOW, GREEN, BLUE, PURPLE } from "../constants/color-codes"

class ColorSlide extends React.Component {

  constructor() {
    super()
    this.state = {
      colors: [RED, ORANGE, YELLOW, GREEN, BLUE, PURPLE]
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.onClick()
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
      <div style={slideStyles} onClick={this.handleClick}>
        <div className="color-container" style={colorContainerStyles}>
          {this.state.colors.map(color => <Color key={color} color={color}/>)}
        </div>
      </div>
    )
  }
}

export default ColorSlide
