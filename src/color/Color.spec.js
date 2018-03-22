/**
 * @jest-environment node
 */

import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Color from "./Color"

Enzyme.configure({ adapter: new Adapter() })

test("Color should render without crashing", () => {
  const color = shallow(<Color />)
  expect(color).toBeTruthy()
})

test("Color should be passed a color string in its props", () => {
  const color = shallow(<Color color="blue"/>)
  expect(color.instance().props.color).toBeTruthy()
})
