import React from "react";
import MainLayout from "./layouts/MainLayout"; 
import HomePage from "./pages/HomePage"; 
import Loader from "./components/Loader"; 
import CustomCursor from "./components/CustomCursor"; 

const App = () => {
  return (
    <>
      <Loader />
      <CustomCursor />
      <MainLayout>
        <HomePage /> 
      </MainLayout>
    </>
  );
};

export default App;