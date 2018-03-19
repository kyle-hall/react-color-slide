import React from "react"
import logo from "./logo.svg"
import "./App.css"
import ColorSlide from "./color-slide/ColorSlide"
import ColorDisplay from "./color-display/ColorDisplay"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ColorDisplay />
        <ColorSlide />
      </div>
    )
  }
}

export default App
