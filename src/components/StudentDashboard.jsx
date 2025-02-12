/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { asyncgetcouses } from "../store/actions/CourseActions";
import { getDatabase, ref, update } from "firebase/database";
import { CircleCheckBig } from 'lucide-react';
const StudentDashboard = () => {
  const db = getDatabase();
  const { courses } = useSelector((state) => state.CoursesReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncgetcouses());
  }, []);

  if (!courses || courses.length === 0) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <p className="text-gray-400 font-medium">Loading courses...</p>
      </div>
    );
  }

  const handleComplete = (id) => {
    const courseRef = ref(db, `courses/${id}`);
  
    update(courseRef, {
      completed: true, 
    })
      .then(() => {
        dispatch(asyncgetcouses());
      })
      .catch((error) => {
        console.error("Error updating course:", error);
      });
  };


  return (
    <div className="select-none  max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        📚 Enrolled Courses
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses &&
          courses.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={course.thumbnail}
                alt={course.name}
                className="w-full h-40 object-cover"
              />

              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  {course.name}
                </h2>
                <p className="text-gray-600">👨‍🏫 {course.instructor}</p>
                <p className="text-gray-500">📅 Due: {course.endDate}</p>
                <h1 className="font-bold">{course.completed}</h1>

                <div className="mt-3 w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-500 h-2.5 rounded-full transition-all duration-300"
                    style={{ width: course.completed ? "100%" : "50%" }}
                  ></div>
                </div>

                <button
                  onClick={() => handleComplete(course.id)}
                  className={`cursor-pointer mt-4 w-full text-white font-medium py-2 rounded-lg transition ${
                    course.completed
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {course.completed
                    ? (<div className="flex justify-center items-center gap-2"><CircleCheckBig /> Completed</div>)
                    : "Mark as Completed"}
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default StudentDashboard;
