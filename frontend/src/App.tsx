import React from "react";
import { Route, Routes } from "react-router-dom";
import AddUser from "./components/AddUser";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;
