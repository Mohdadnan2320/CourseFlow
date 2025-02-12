/* eslint-disable no-unused-vars */
import { getDatabase, onValue, ref } from "firebase/database";
import { getcourses } from "../reducers/CourseReducer";

const fetchCoursesRealtime = () => {
    return new Promise((resolve, reject) => {
      const db = getDatabase();
      const coursesRef = ref(db, "courses");
  
      onValue(coursesRef, (snapshot) => {
        if (snapshot.exists()) {
          resolve(snapshot.val()); 
        } else {
          console.log("No data available");
          resolve(null);
        }
      }, (error) => {
        reject(error); 
      });
    });
  };

  
  export const asyncgetcouses = () => async (dispatch, getState) => {  
    try {
      const data = await fetchCoursesRealtime();
      if (data) {
        dispatch(getcourses(data)); 
      }
    } catch (error) {
      console.log("Error fetching courses:", error);
    }
  };
  

