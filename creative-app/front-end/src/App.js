import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Artist1 from "./pages/Artist1";
import Artist2 from "./pages/Artist2";
import Artist3 from "./pages/Artist3";
import Artist4 from "./pages/Artist4";

export default function App() {
  return (
    <BrowserRouter basename="/CS260_CP4/creative-app/front-end/build">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Artist1" element={<Artist1 />} />
          <Route path="Artist2" element={<Artist2 />} />
          <Route path="Artist3" element={<Artist3 />} />
          <Route path="Artist4" element={<Artist4 />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
