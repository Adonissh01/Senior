import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { getCourseByName } from '../../Utils/api/courses'; // Import the function
import { useRoute } from '@react-navigation/native';

function CourseScreen({course}=route.params) {
  const route = useRoute();
  // const { course } = route.params;

  const [courseData, setCourseData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Call the getCourseByName function with the course name as a parameter
    getCourseByName(course)
      .then((data) => {
        if (data) {
          setCourseData(data);
        } else {
          console.log('No matching course found.');
        }
      })
      .catch((error) => {
        console.error('Error fetching course data:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [course]);

  return (
    <View>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : courseData ? (
        <View>
          <Text>Course Name: {(course)}</Text>
          {/* Render other course details here */}
        </View>
      ) : (
        <Text>Course not found</Text>
      )}
    </View>
  );
}

export default CourseScreen;
