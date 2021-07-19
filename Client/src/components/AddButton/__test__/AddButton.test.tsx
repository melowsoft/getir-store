import React from "react"
import  ReactDOM  from "react-dom"
import { AddButton } from "../../AddButton"
import {Product} from "../../../state/interface"
import { render, cleanup } from '@testing-library/react';
import renderer from "react-test-renderer"


const product:Product = {
  tags: [],
  price: 10,
  name: "test name",
  description: "",
  slug: "test slug",
  added: 0,
  manufacturer: "test brand",
  itemType: "test type"
}

afterEach(cleanup)

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AddButton title="test" onAdd={() => console.log("Added!")} product={product}></AddButton>, div);
  ReactDOM.unmountComponentAtNode(div)
})

it("renders button currectly", () => {
  const {getByTestId} = render(<AddButton title="Add product" onAdd={() => console.log("Added!")} product={product}></AddButton>)
  expect(getByTestId("add-btn")).toHaveTextContent("Add product")
})

it("matches snapshot", () => {
  const tree = renderer.create(<AddButton title="Add product" onAdd={() => console.log("Added!")} product={product}></AddButton>).toJSON()
  expect(tree).toMatchSnapshot()
})