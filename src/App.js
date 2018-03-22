import React from "react"
import logo from "./logo.svg"
import "./App.css"

import ColorSlide from "./color-slide/ColorSlide"
import ColorDisplay from "./color-display/ColorDisplay"
import { BLACK, RED } from "./constants/color-codes"

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      color: BLACK
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      color: RED
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Color Slide</h1>
        </header>
        <h2>Click on a color to see the display change.</h2>
        <ColorDisplay color={this.state.color}/>
        <ColorSlide onClick={this.handleClick}/>
      </div>
    )
  }
}

export default App
