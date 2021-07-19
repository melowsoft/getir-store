import React from "react"
import  ReactDOM  from "react-dom"
import { BasketItem } from "..";
import { BasketPick} from "../../../state/interface"
import { cleanup } from '@testing-library/react';
import renderer from "react-test-renderer"
import {Provider} from 'react-redux';
import App from "../../App"
import { store } from '../../../state'


const product:BasketPick = {
  price: 10,
  name: "test name",
  quantity: 0
}

afterEach(cleanup)

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Provider store={store}><App><BasketItem product={product}></BasketItem></App></Provider>, div);
  ReactDOM.unmountComponentAtNode(div)
})


it("matches snapshot", () => {
  const tree = renderer.create(<Provider store={store}><App><BasketItem product={product}></BasketItem></App></Provider>).toJSON()
  expect(tree).toMatchSnapshot()
})