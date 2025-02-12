/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";
import SearchBar from "../components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetcouses } from "../store/actions/CourseActions";
import Footer from "../components/Footer";

const CourseListPage = () => {
  const { courses } = useSelector((state) => state.CoursesReducer);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
  );
  

  useEffect(() => {
    dispatch(asyncgetcouses());
  }, []);

  if (!courses || courses.length === 0) {
    return (
      <div className="select-none w-full h-screen flex justify-center items-center">
        <p className="text-gray-300 font-medium">Loading courses...</p>
      </div>
    );
  }

  return (
    <div>
      <SearchBar onSearch={setSearchQuery} />
      <div className="p-4 grid mt-10 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div key={course.id}>
              <CourseCard course={course} />
            </div>
          ))
        ) : (
          <p className="h-screen text-gray-600 text-center mt-4">No courses found</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CourseListPage;

