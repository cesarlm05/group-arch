import React from "react";
import ReactDOM from "react-dom/client";
import { NavBar } from "./NavBar";
import Main from "./Main";
import { User, Operation } from "./Events";

const root = ReactDOM.createRoot(document.getElementById("root"));

// <> Etiqueta vacia Fragment
root.render(
  <>
    <NavBar />
    <Main />
    <User />
    <Operation />
  </>
);
