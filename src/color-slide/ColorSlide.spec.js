/**
 * @jest-environment node
 */

import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

import ColorSlide from "./ColorSlide"
import Color from "../color/Color"
import { RED, ORANGE, YELLOW, GREEN, BLUE, PURPLE } from "../constants/color-codes"

Enzyme.configure({ adapter: new Adapter() })

describe("ColorSlide", () => {
  let slide

  beforeEach(() => {
    slide = shallow(<ColorSlide />)
  })

  test("should render without crashing", () => {
    expect(slide).toBeTruthy()
  })

  test("should contain 6 colors", () => {
    expect(slide.find(Color).length).toEqual(6)
  })

  test("should contain a Color component that is red", () => {
    expect(slide.find(Color).get(0).props.color).toEqual(RED)
  })

  test("should contain a Color component that is orange", () => {
    expect(slide.find(Color).get(1).props.color).toEqual(ORANGE)
  })

  test("should contain a Color component that is yellow", () => {
    expect(slide.find(Color).get(2).props.color).toEqual(YELLOW)
  })

  test("should contain a Color component that is green", () => {
    expect(slide.find(Color).get(3).props.color).toEqual(GREEN)
  })

  test("should contain a Color component that is blue", () => {
    expect(slide.find(Color).get(4).props.color).toEqual(BLUE)
  })

  test("should contain a Color component that is purple", () => {
    expect(slide.find(Color).get(5).props.color).toEqual(PURPLE)
  })

  test("should receive a click handler as a prop and call it when clicked", () => {
    const onClick = jest.fn()
    slide = shallow(<ColorSlide onClick={onClick} />)
    slide.instance().handleClick()
    expect(onClick).toBeCalled()
  })
})
