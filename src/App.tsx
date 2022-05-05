import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";

import "./index.css";

import AwesomeButton from '../src/components/AwesomeButton';

const App = () => (
  <div className="container">
    <div>Name: Remote</div>
    <AwesomeButton />
  </div>
);
ReactDOM.render(
   <ChakraProvider>
      <App />
   </ChakraProvider>,
   document.getElementById("app")
);
