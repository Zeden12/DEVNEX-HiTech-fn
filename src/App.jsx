import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import DevnexAcademyPage from "./pages/DevnexAcademyPage";
import InsightsPage from "./pages/InsightsPage";
import ContactPage from "./pages/ContactPage";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  return (
    <Router>
      <Loader />
      <CustomCursor />
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/devnex-academy" element={<DevnexAcademyPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;