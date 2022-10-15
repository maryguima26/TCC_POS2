import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Sobre from "./new_components/Sobre";
import Contato from "./new_components/Contato";
import Triatlo from "./new_components/Triatlo";
import Duatlo from "./new_components/Duatlo";
import Gym from "./new_components/Gym";
import Login from "./new_components/Login";
import Registrese from "./new_components/Registrese";
import Professor from "./new_components/Professor";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

function Router() {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<Sobre />} />
          <Route path="/contact" element={<Contato />} />
          <Route path="/triathlon" element={<Triatlo />} />
          <Route path="/duathlon" element={<Duatlo />} />
          <Route path="/gym" element={<Gym />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registrese />} />
          <Route path="/professor" element={<Professor />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
