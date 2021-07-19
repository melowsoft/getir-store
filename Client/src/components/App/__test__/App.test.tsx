import React from "react"
import  ReactDOM  from "react-dom"
import App from ".."
import { cleanup } from '@testing-library/react';
import renderer from "react-test-renderer"




afterEach(cleanup)

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App></App>, div);
  ReactDOM.unmountComponentAtNode(div)
})


it("matches snapshot", () => {
  const tree = renderer.create(<App></App>).toJSON()
  expect(tree).toMatchSnapshot()
})