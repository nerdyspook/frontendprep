import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Questions from "./Questions/Questions";
import Results from "./Results/Results";
import Rules from "./Rules/Rules";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/questions/:quizId" element={<Questions />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  );
};

export default Pages;
