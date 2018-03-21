import React from "react"
import logo from "./logo.svg"
import "./App.css"

import ColorSlide from "./color-slide/ColorSlide"
import ColorDisplay from "./color-display/ColorDisplay"
import { BLACK } from "./constants/color-codes"

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      color: BLACK
    }
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
        <ColorSlide />
      </div>
    )
  }
}

export default App
