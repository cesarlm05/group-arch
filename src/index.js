import ReactDOM from "react-dom/client";
import { NavBar } from "./NavBar";
import Main from "./Main";
import { User, Footer } from "./Jumbos";
import "./Style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

// <> Etiqueta vacia Fragment
root.render(
  <>
    <NavBar />
    <Main />
    <User />
    <Footer />
  </>
);
