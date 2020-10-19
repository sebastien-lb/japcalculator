import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/config";

// jest.mock("mapbox-gl", () => {
//   return {
//     Map: function() {
//       (this as any).on = jest.fn();
//     },
//     Marker: function() {
//       (this as any).setLngLat = function() {
//         return this;
//       };
//       (this as any).addTo = jest.fn();
//     }
//   };
// });

test("renders App", () => {
  const { baseElement } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(baseElement).toBeDefined();
});
