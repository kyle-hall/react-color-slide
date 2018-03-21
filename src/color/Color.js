
import React from "react"

class Color extends React.Component {

  render() {
    const colorStyles = {
      height: "250px",
      width: "150px",
      backgroundColor: this.props.color
    }

    return (
      <div style={colorStyles}></div>
    )
  }
}

export default Color
