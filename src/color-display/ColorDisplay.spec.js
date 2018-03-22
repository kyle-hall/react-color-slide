/**
 * @jest-environment node
 */

import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

import ColorDisplay from "./ColorDisplay"
import Color from "../color/Color"
import { BLACK } from "../constants/color-codes"

Enzyme.configure({ adapter: new Adapter() })

describe("ColorDisplay", () => {
  let display

  describe("structure", () => {
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

  describe("props", () => {
    beforeEach(() => {
      display = shallow(<ColorDisplay color={BLACK} />)
    })

    test("should receive a color string to pass to its color component", () => {
      expect(display.instance().props.color).toEqual(BLACK)
    })

    test("should pass a color to the Color component", () => {
      expect(display.find(Color).get(0).props.color).toEqual(BLACK)
    })
  })
})
