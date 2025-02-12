/* eslint-disable react/prop-types */

import { getDatabase, ref, update } from "firebase/database";
import { ThumbsUp } from "lucide-react";
import { Link } from "react-router-dom";
import { asyncgetcouses } from "../store/actions/CourseActions";
import { useDispatch } from "react-redux";

const CourseCard = ({ course }) => {
  const db = getDatabase();
  const dispatch = useDispatch();

  const handleLikes = (id) => {
    const courseRef = ref(db, `courses/${id}`);
    
    update(courseRef, {
      likes: 1, 
    })
      .then(() => {
        dispatch(asyncgetcouses());
      })
      .catch((error) => {
        console.error("Error updating course:", error);
      });
  };
  return (
    <div className="select-none  shadow-lg bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-4">
      <img
        src={course.thumbnail}
        alt={course.name}
        className="w-full h-40 object-contain"
      />
      <div className="">
        <h2 className="text-lg font-semibold">{course.name}</h2>
        <p className="text-gray-600">Instructor: {course.instructor}</p>
        <p className="text-sm text-gray-500">
          {course.description.substring(0, 80)}...
        </p>
        <div className="mt-2 flex justify-between items-center">
          <span
            className={`px-3 py-1 text-sm font-semibold rounded-full ${
              course.enrollmentStatus === "Open"
                ? "bg-green-100 text-green-700"
                : course.enrollmentStatus === "Closed"
                ? "bg-red-100 text-red-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {course.enrollmentStatus}
          </span>
          <div className="grid grid-flow-col place-items-center space-x-5">
              <div className="flex justify-end items-end gap-1">
              <ThumbsUp onClick={() => handleLikes(course.id)} className="bg-white cursor-pointer hover:text-blue-700 hover:-translate-y-1 duration-150" />
              <span className={`xs ${course.likes > 0 ? 'block' : 'hidden'}`}>
                {course.likes}
              </span>
              </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              <Link to={`/details/${course.id}`}>View Details</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
