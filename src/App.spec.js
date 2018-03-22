/**
 * @jest-environment node
 */

import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

import App from "./App"
import ColorSlide from "./color-slide/ColorSlide"
import ColorDisplay from "./color-display/ColorDisplay"
import { BLACK, RED } from "./constants/color-codes"

Enzyme.configure({ adapter: new Adapter() })

describe("App", () => {
  let app

  beforeEach(() => {
    app = shallow(<App />)
  })

  test("should render without crashing", () => {
    expect(app).toBeTruthy()
  })

  test("should contain one ColorSlide", () => {
    expect(app.find(ColorSlide).length).toEqual(1)
  })

  test("should contain one ColorDisplay", () => {
    expect(app.find(ColorDisplay).length).toEqual(1)
  })

  test("should have initial state of color 'black'", () => {
    expect(app.instance().state.color).toEqual(BLACK)
  })

  test("should handle clicks by changing the display's color", () => {
    app.find(ColorSlide).simulate("click")
    expect(app.find(ColorDisplay).get(0).props.color).toEqual(RED)
  })
})
