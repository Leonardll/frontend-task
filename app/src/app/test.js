// /* global it */
// import React from 'react'
// import ReactDOM from 'react-dom'


// it('renders without crashing', () => {
//   const div = document.createElement('div')
//   ReactDOM.render(<App data={data} />, div)

//   //


//   ReactDOM.unmountComponentAtNode(div)
// })

// hello.test.js

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import data from '../data.json'
import App from './index.js'

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders the app", () => {
  act(() => {
    render(<App data={data} />, container);
  });

  // Check snapshot

  // Test the events , click on link , mouse hover 

  document.location = jest.fn();
 expect(document.location).toBeCalled(1)

 

});
