/**
 * @jest-environment node
 */

import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

import ColorDisplay from "./ColorDisplay"
import Color from "../color/Color"

Enzyme.configure({ adapter: new Adapter() })

describe("ColorDisplay", () => {
  let display

  beforeEach(() => {
    display = shallow(<ColorDisplay />)
  })

  test("should render without crashing", () => {
    expect(display).toBeTruthy()
  })

  test("should contain a Color component to display", () => {
    expect(display.find(Color).length).toEqual(1)
  })
})
