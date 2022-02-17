import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import ExperienceView from "../pages/experienceView";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/experience/:id" element={<ExperienceView />} />
      </Routes>
    </BrowserRouter>
  );
}
