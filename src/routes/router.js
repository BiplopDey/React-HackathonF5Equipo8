import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import AdvertiserView from "../pages/advertiserView";
import ExperienceView from "../pages/experienceView";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/experience/:id" element={<ExperienceView />} />
        <Route path="/advertiser/:id" element={<AdvertiserView />} />
      </Routes>
    </BrowserRouter>
  );
}
