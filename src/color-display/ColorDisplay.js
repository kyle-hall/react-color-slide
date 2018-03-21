import React, { Component } from "react"

import Color from "../color/Color"

class ColorDisplay extends Component {
  render() {
    const displayStyles = {
      display: "flex",
      justifyContent: "center",
      marginBottom: "25px"
    }

    return (
      <div style={displayStyles}>
        <Color color={this.props.color}/>
      </div>
    )
  }
}

export default ColorDisplay
