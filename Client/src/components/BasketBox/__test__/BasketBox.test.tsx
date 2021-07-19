import React from "react"
import  ReactDOM  from "react-dom"
import {BasketBox} from ".."
import {Provider} from 'react-redux';
import App from "../../App"
import { store } from '../../../state'
import { cleanup } from '@testing-library/react';
import renderer from "react-test-renderer"




afterEach(cleanup)

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Provider store={store}><App><BasketBox></BasketBox></App></Provider>, div);
  ReactDOM.unmountComponentAtNode(div)
})


it("matches snapshot", () => {
  const tree = renderer.create(<Provider store={store}><App><BasketBox></BasketBox></App></Provider>).toJSON()
  expect(tree).toMatchSnapshot()
})