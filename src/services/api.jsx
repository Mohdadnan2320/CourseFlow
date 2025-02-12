/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import {getDatabase, onValue, ref, set} from "firebase/database"
import {app} from './firebase'
import {  useDispatch, useSelector } from "react-redux";
import { asyncgetcouses } from "../store/actions/CourseActions";
import { useEffect } from "react";

const api = () => {
  const db = getDatabase(app);
  const { courses } = useSelector((state) => state.CoursesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncgetcouses());
  }, []);

const courseModel = {
  id: 1,
  completed: false,
  name: "Cybersecurity Fundamentals",
  instructor: "Daniel Carter",
  description: "Gain essential knowledge in cybersecurity, including ethical hacking and network security.",
  enrollmentStatus: "In Progress",
  thumbnail: "cybersecurity-course.jpg",
  duration: "12 weeks",
  schedule: "Mondays and Wednesdays, 6:30 PM - 8:30 PM",
  location: "Hybrid",
  prerequisites: ["Basic Networking Knowledge"],
  syllabus: [
    { week: 1, topic: "Introduction to Cybersecurity", content: "Understanding cybersecurity principles and threats." },
    { week: 2, topic: "Network Security Basics", content: "Firewalls, encryption, and securing network traffic." },
  ],
  students: [
    { id: 205, name: "Noah Mitchell", email: "noah@example.com", progress: 50 },
    { id: 206, name: "Ava Hernandez", email: "ava@example.com", progress: 80 },
  ],
  category: "IT & Security",
  rating: 4.5,
  totalReviews: 150,
  price: 79.99,
  discount: 20,
  startDate: "2025-06-10",
  endDate: "2025-09-02",
  level: "Beginner - Intermediate",
  language: "English",
};

  function writeCourseData() {
    set(ref(db, `courses/${courseModel.id}`), courseModel)
      .then(() => {
        console.log("Course data uploaded successfully!");
      })
      .catch((error) => {
        console.error("Error uploading course data:", error);
      });
  }

   const fetchCoursesRealtime = () => {
    const db = getDatabase();
    const coursesRef = ref(db, "courses");
  
    onValue(coursesRef, (snapshot) => {
      if (snapshot.exists()) {
        console.log("Real-time Data:", snapshot.val());
      } else {
        console.log("No data available");
      }
    });
  };

  function update (){
    set(ref(db, `courses/${courses.id}`), courses)
      .then(() => {
        console.log("updated!");
      })
      .catch((error) => {
        console.error("Error updating while....:", error);
      });

  }
  

  return (
    <div className="p-10">
      <h1>Firebase</h1>
      <button
        className="bg-black border text-white p-2"
        onClick={writeCourseData}
      >
        push data
      </button>
      <button
        className="bg-black border text-white p-2"
        onClick={fetchCoursesRealtime}
      >
        Get
      </button>
      <button
        className="bg-black border text-white p-2"
        onClick={update}
      >
        update
      </button>
    </div>
  );
};

export default api;
