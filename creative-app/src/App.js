import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Artist1 from "./pages/Artist1";
import Artist2 from "./pages/Artist2";
import Artist3 from "./pages/Artist3";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Artist1" element={<Artist1 />} />
          <Route path="Artist2" element={<Artist2 />} />
          <Route path="Artist3" element={<Artist3 />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
