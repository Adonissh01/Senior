
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const data = [
  // Your data remains the same
  {
    key: '1',
    title: 'Year 1',
    semesters: [
      {
        key: '1',
        title: 'Semester 1',
        courses: [
          'Algebra 1',
          'Calculus 1',
          'Computer Architecture',
          'Digital Electronics',
          'Electricity',
          'English',
          'Intro to CS',
          'Optics',
        ],
      },
      {
        key: '2',
        title: 'Semester 2',
        courses: [
          'Algebra 2',
          'Analog Electronics 1',
          'Calculus 2',
          'Human Rights',
          'Network 1',
          'Signal Theory',
          'Statistics and Probability',
          'Structured Programming',
        ],
      },
    ],
  },
  {
    key: '2',
    title: 'Year 2',
    semesters: [
      {
        key: '1',
        title: 'Semester 3',
        courses: [
      'Analog Communication',
      'Analog Electronics 2',
      'Calculus 3',
      'Data Structure',
      'Digital Electronics 2',
      'Object Oriented Programming',
      'Relational DataBase',
      'Wide Area Network'


          // Add more courses as needed
        ],
      },
      {
        key: '2',
        title: 'Semester 4',
        courses: [
          'Computer Software Engineering',
          'Digital Communication',
          'Digital Signal Proccessing',
          'Expression and Communication',
          'Local Area Network',
          'Operating Systems',
          'Programmable Circuits',
          'Transmission Lines',

          // Add more courses as needed
        ],
      },
    ],
  },
  {
    key: '3',
    title: 'Year 3',
    semesters: [
      {
        key: '1',
        title: 'Semester 5',
        courses: [
          'French',
          'Microwaves',
          'Network Adminstration',
          'Optoelectronics',
          'Propagation and Antennas',
          'VHDL',
          'WEB Development',
          'WLAN and Security'
          // Add more courses as needed
        ],
      },
      {
        key: '2',
        title: 'Semester 6',
        courses: [
          'Client Server Architecture',
          'General-Law',
          'Network-System-Programming',
          'Real-Time-Programming'

          // Add more courses as needed
        ],
      },
    ],
  },
];

export default function PreviousExams() {
  const navigation = useNavigation();
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState(null);

  const handleSelectYear = (year) => {
    if (selectedYear === year) {
      setSelectedYear(null);
    } else {
      setSelectedYear(year);
    }
    setSelectedSemester(null); // Reset selected semester when changing year.
  };

  const handleSelectSemester = (semester) => {
    if (selectedSemester === semester) {
      setSelectedSemester(null);
    } else {
      setSelectedSemester(semester);
    }
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => handleSelectYear(item)}>
          <View style={styles.yearContainer}>
            <Text style={styles.yearText}>
              {item.key}
            </Text>
            <Text style={styles.yearTitle}>{item.title}</Text>
            <AntDesign
              name={selectedYear === item ? 'up' : 'down'}
              size={24}
              color="#051250"
              style={styles.icon}
            />
          </View>
        </TouchableOpacity>
        {selectedYear === item && (
          <FlatList
            style={styles.semesterList}
            data={item.semesters}
            renderItem={({ item: semester }) => (
              <View style={styles.container}>
                <TouchableOpacity onPress={() => handleSelectSemester(semester)}>
                  <View style={styles.semesterContainer}>
                    <Text style={styles.semesterText}>
                      {semester.key}
                    </Text>
                    <Text style={styles.semesterTitle}>{semester.title}</Text>
                    <AntDesign
                      name={selectedSemester === semester ? 'up' : 'down'}
                      size={24}
                      color="#051250"
                      style={styles.icon}
                    />
                  </View>
                </TouchableOpacity>
                {selectedSemester === semester && (
                  <View style={styles.courseList}>
                    {semester.courses.map((course, index) => (
                      <TouchableOpacity
                        key={index}
                        // onPress={() => { navigation.navigate(course) }}
                        onPress={() => {navigation.navigate("Course Screen", { course: course })}}
                        style={styles.courseItem}
                      >
                        <Text style={styles.courseText}>{course}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </View>
            )}
          />
        )}
      </View>
    );
  };
  
  return (
    
    <FlatList
      style={styles.list}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.key}
    />
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 1,
    borderRadius: 5,
    overflow: 'hidden',
  },
  list: {
    marginTop: 10,
  },
  yearContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  yearText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#051250',
    marginRight: 20,
  },
  yearTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    flex: 1,
  },
  icon: {
    position: 'absolute',
    right: 20,
  },
  semesterList: {
    marginTop: 10,
  },
  semesterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  semesterText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#051250',
    marginRight: 20,
  },
  semesterTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    flex: 1,
  },
  courseList: {
    backgroundColor: '#f2f2f2',
  },
  courseItem: {
    padding: 13,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  courseText: {
    fontSize: 16,
  },
});
