import { Routes, Route } from "react-router-dom";
import CourseListing from "./pages/CourseListing";
import Navbar from "./components/Navbar";
import CourseDetails from "./pages/CourseDetails";
import StudentDashboard from "./components/StudentDashboard";
import Api from './services/api'
import Contact from "./pages/Contact";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<CourseListing />} />
        <Route path="/details/:id" element={<CourseDetails />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/firebase" element={<Api />} />
      </Routes>
    </>
  );
};

export default App;
