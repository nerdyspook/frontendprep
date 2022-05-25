import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Rules from "./Rules/Rules";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rules" element={<Rules />} />
    </Routes>
  );
};

export default Pages;
