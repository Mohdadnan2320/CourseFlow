/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { asyncgetcouses } from "../store/actions/CourseActions";

const CourseDetails = () => {
  const { courses } = useSelector((state) => state.CoursesReducer);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(asyncgetcouses());
  }, []);

  if (!courses || courses.length === 0) {
    return (
      <div className=" w-full h-screen flex justify-center items-center">
        <p className="text-gray-300 font-medium">Loading Details...</p>
      </div>
    );
  }

  const filteredCourses = courses.filter((course) => course);

  const course = filteredCourses.find((course) => course.id === parseInt(id));

  if (!course) {
    console.log("Course not found");
    return <p>Course not found!</p>;
  }

  return (
    <div className="select-none  bg-white shadow-lg rounded-lg p-6 md:p-8 space-y-6">
  <img src={course.thumbnail} alt={course.name} className="xl:w-1/2 h-80 object-contain lg:object-cover rounded-lg shadow-md" />

  <div className="">
    <h1 className="text-2xl font-bold text-gray-900">{course.name}</h1>
    <p className="text-gray-600">by <span className="font-medium">{course.instructor}</span></p>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700">
    <p><strong className="text-gray-900">Category:</strong> {course.category}</p>
    <p><strong className="text-gray-900">Level:</strong> {course.level}</p>
    <p><strong className="text-gray-900">Language:</strong> {course.language}</p>
    <p><strong className="text-gray-900">Location:</strong> {course.location}</p>
    <p><strong className="text-gray-900">Start Date:</strong> {course.startDate}</p>
    <p><strong className="text-gray-900">End Date:</strong> {course.endDate}</p>
    <p><strong className="text-gray-900">Duration:</strong> {course.duration}</p>
    <p><strong className="text-gray-900">Schedule:</strong> {course.schedule}</p>
    <p><strong className="text-gray-900">Total Students:</strong> {course.students.length}</p>
  </div>

  <div className="flex flex-wrap items-center justify-between">
    <p className={`px-3 py-1 rounded-full text-sm font-medium 
      ${course.enrollmentStatus === "Open" ? "bg-green-100 text-green-700" : 
      course.enrollmentStatus === "In Progress" ? "bg-yellow-100 text-yellow-700" : 
      "bg-red-100 text-red-700"}`}>
      {course.enrollmentStatus}
    </p>

    <div className="flex items-center gap-1 text-yellow-500">
      ⭐ <span className="font-bold">{course.rating}</span> 
      <span className="text-gray-500">({course.totalReviews} Reviews)</span>
    </div>
  </div>

  <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
    <p className="text-xl font-bold text-gray-800">${course.price - (course.price * course.discount / 100)}</p>
    {course.discount > 0 && (
      <p className="text-sm text-gray-500 line-through">${course.price}</p>
    )}
    <p className="text-green-600 font-semibold">{course.discount}% Off</p>
  </div>

  <p className="text-gray-700 leading-relaxed">{course.description}</p>

  <p><strong className="text-gray-900">Prerequisites:</strong> {course.prerequisites.join(", ")}</p>

  <details className="mt-4">
    <summary className="cursor-pointer text-blue-600 font-semibold">View Syllabus</summary>
    <ul className="mt-2 space-y-2 border-l-2 border-blue-500 pl-4">
      {course.syllabus.map((week) => (
        <li key={week.week} className="text-gray-700">
          <strong className="text-gray-900">Week {week.week}:</strong> {week.topic}
        </li>
      ))}
    </ul>
  </details>

  <button className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition">
    Enroll Now
  </button>
</div>

  );
};

export default CourseDetails;
