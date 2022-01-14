import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import BlogList from "./components/BlogList"
import reportWebVitals from "./reportWebVitals";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="bloglist" element={<BlogList />} />
    </Routes>
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
