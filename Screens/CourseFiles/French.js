import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Linking } from 'react-native';
import ScreenTop from '../SubScreens/ScreenTop';

const French = () => {
  const [selectedTab, setSelectedTab] = useState(null);

  const tabs = ['material', 'midterms', 'finals']; // Reordered the tabs

  const handleTabPress = (tabName) => {
    setSelectedTab(tabName);
  };

  const handleLinkPress = () => {
    const url = 'https://firebasestorage.googleapis.com/v0/b/senior-289d1.appspot.com/o/CCNE%2FYear%203%2FSemester%206%2FClient%20Server%20Architecture%2Fusermanagement.pdf?alt=media&token=2155d000-bd6d-48f8-9c58-fd6dce707577'; // Replace with your desired URL
    Linking.openURL(url);
  };
  const renderList = () => {
    if (selectedTab === 'midterms') {
      return (
        
        <FlatList
          data={['Midterm 1', 'Midterm 2', 'Midterm 3']}
          renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
          keyExtractor={(item) => item}
        />
      );
    } else if (selectedTab === 'material') {
      return (
        
        <FlatList
        data={[
            <TouchableOpacity onPress={handleLinkPress}>
            <Text style={{ color: 'blue' }}>Click me to open a link</Text>
          </TouchableOpacity> ,
              'Reading 2',
              'Reading 3',
          ]}
          renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
          keyExtractor={(item) => item}
        />
      );
    } else if (selectedTab === 'finals') {
      return (
        <FlatList
          data={['Final Exam 1', 'Final Exam 2', 'Final Exam 3']}
          renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
          keyExtractor={(item) => item}
        />
      );
    }
    return null; // No list selected
  };

  return (
    

  
    <View >
     
        <ScreenTop/>

        <View >
      <Text style={styles.heading}>Course Information</Text>
      <View style={styles.tabContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => handleTabPress(tab)}
            style={[
              styles.tab,
              selectedTab === tab && styles.selectedTab,
            ]}
          >
            <Text style={selectedTab === tab && styles.selectedTabText}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {renderList()}
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  selectedTab: {
    backgroundColor:'#051250',
    borderColor: '#51250',
  },
  selectedTabText: {
    color: 'white',
  },
  listItem: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default French;
