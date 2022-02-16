import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExperienceView from "../pages/experienceView";
import Home from "../pages/home";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<ExperienceView />} />
      </Routes>
    </BrowserRouter>
  );
}
