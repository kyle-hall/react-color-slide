/**
 * @jest-environment node
 */

import React from "react"
import * as jest from "jest"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

import ColorSlide from "./ColorSlide"
import Color from "../color/Color"

Enzyme.configure({ adapter: new Adapter() })

test("ColorSlide should render without crashing", () => {
  const slide = shallow(<ColorSlide />)
  expect(slide).toBeTruthy()
})

test("ColorSlide should contain 6 colors", () => {
  const slide = shallow(<ColorSlide />)

  expect(slide.find(Color).length).toEqual(6)
})
