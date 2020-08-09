import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { Provider as AlertProvider } from "react-alert";
// import AlertTemplate from "react-alert-template-basic";
import * as serviceWorker from "./serviceWorker";

////////////////////////////////////////////////////
//trial and error for alerts

// const options = {
//   position: "bottom center",
//   timeout: 5000,
//   offset: "30px",
//   transition: "scale",
// };

// ReactDOM.render(
//   <AlertProvider template={AlertTemplate} {...options}>
//     < />
//   </AlertProvider>,
//   document.getElementById("root")
// );

////////////////////////////////////////////////////////

//////////////////////////////////////////////////

//orignal content

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

/////////////////////////////////////////////////

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
