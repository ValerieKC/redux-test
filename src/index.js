import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import DashBoard from "./components/DashBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
      <Route index element={<DashBoard />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
