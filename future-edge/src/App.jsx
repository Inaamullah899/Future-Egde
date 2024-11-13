import Alumni from "./routes/alumni";
import Courses from "./routes/courses";
import Mentors from "./routes/mentors";
import Why from "./routes/why";
import Testimonials from "./routes/testimonials";
import "./App.css";
import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Navbar />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/why" element={<Why />} />
          <Route path="/Mentors" element={<Mentors />} />
          <Route path="/alumni" element={<Alumni />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
