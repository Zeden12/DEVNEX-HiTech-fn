import React from "react";
import MainLayout from "./layouts/MainLayout";  // Import MainLayout
import HomePage from "./pages/HomePage";  // Import HomePage

const App = () => {
  return (
    <MainLayout>
      <HomePage />  {/* The content of the home page */}
    </MainLayout>
  );
};

export default App;
