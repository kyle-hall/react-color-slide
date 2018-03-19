/**
 * @jest-environment node
 */

import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

import ColorSlide from "./ColorSlide"
import Color from "../color/Color"

Enzyme.configure({ adapter: new Adapter() })

describe("ColorSlide", () => {
  let slide

  beforeEach(() => {
    slide = shallow(<ColorSlide />)
  })

  test("ColorSlide should render without crashing", () => {
    expect(slide).toBeTruthy()
  })

  test("ColorSlide should contain 6 colors", () => {
    expect(slide.find(Color).length).toEqual(6)
  })
})
