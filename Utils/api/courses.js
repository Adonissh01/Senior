import { collection, query, onSnapshot, where,doc,getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export const getCourseById = (courseId) => {
  return new Promise((resolve, reject) => {
      const docRef = doc(db, "courses", courseId);
      
      getDoc(docRef)
          .then((docSnapshot) => {
              if (docSnapshot.exists()) {
                  const courseData = docSnapshot.data();
                  // Extract the specific fields you need
                  const {
                      courseId,
                      courseName,
                      courseMidterms,
                      courseMaterial,
                      courseFinals,
                      courseYear,
                      
                  } = courseData;

                  resolve({
                      courseId,
                      courseName,
                      courseMidterms,
                      courseMaterial,
                      courseFinals,
                      courseYear
                  });
              } else {
                  console.log("No such document!");
                  resolve(null); // Resolve with null if the document doesn't exist
              }
          })
          .catch((error) => {
              console.log("Error getting document:", error);
              reject(error); // Reject with the error if there's an issue
          });
  });
};

export const getCourseByName = (courseName) => {
  return new Promise(async (resolve, reject) => {
    // Check if courseName is a non-empty string
    if (typeof courseName !== 'string' || courseName.trim() === '') {
      console.log("Invalid course name.");
      resolve(null);
      return;
    }

    try {
      const coursesRef = collection(db, "courses");
      const q = query(coursesRef, where("courseName", "==", courseName));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.size === 0) {
        console.log("No matching documents.");
        resolve(null);
      } else {
        querySnapshot.forEach((docSnapshot) => {
          const courseData = docSnapshot.data();
          const {
            courseId,
            courseName,
            courseMidterms,
            courseMaterial,
            courseFinals,
            courseYear,
          } = courseData;

          resolve({
            courseId,
            courseName,
            courseMidterms,
            courseMaterial,
            courseFinals,
            courseYear,
          });
        });
      }
    } catch (error) {
      console.log("Error querying documents:", error);
      reject(error);
    }
  });
};


console.log(getCourseByName("Client Server Architecture"))

