import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./header";
import Search from "./search";
import Footer from "./footer";
import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="card-body">
      <Header />
      <Search defaultCity="Gaza" />
      <Footer />
    </div>
  </StrictMode>
);
