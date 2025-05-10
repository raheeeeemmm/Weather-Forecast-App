import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, Modal } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleButtonClick = () => {
    // Navigate to the WeatherApp component when the button is clicked
    navigation.navigate('WeatherApp');
  };

  const handleImageClick = () => {
    // Show the modal with the larger image
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    // Hide the modal
    setModalVisible(false);
  };

  return (
    <ImageBackground
      source={require('./assets/Cover3.png')} // Adjust image source as needed
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.madeByContainer}>
            <Text style={styles.madeByText}>Made By :</Text>
            <Text style={styles.nameText}>Abdul Rahim</Text>
            <Text style={styles.classText}>CS 02 B</Text>
            <Text style={styles.classText}>210201097</Text>
          </View>
          <TouchableOpacity onPress={handleImageClick}>
            <Image
              source={require('./assets/1.jpeg')} // Adjust image source as needed
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.middleContent}>
          <Text style={styles.title}>Welcome to Weather App</Text>
          <TouchableOpacity onPress={handleButtonClick} style={styles.button}>
            <Text style={styles.buttonText}>LET'S START</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>×</Text>
          </TouchableOpacity>
          <View style={styles.modalContent}>
            <Image
              source={require('./assets/1.jpeg')} // Adjust image source as needed
              style={styles.largeImage}
            />
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50, // Adjust top margin as needed
    paddingHorizontal: 20, // Add horizontal padding to center content
  },
  middleContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'black', // Adjust text color for better visibility
    textAlign: 'center', // Center text horizontally
  },
  button: {
    backgroundColor: 'transparent',
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000', // Add border color
    alignSelf: 'center', // Center button horizontally
  },
  buttonText: {
    color: '#000', // Set custom font color for the button text
    fontWeight: 'bold',
    fontSize: 18,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Cover the entire container
    justifyContent: 'center',
  },
  madeByContainer: {
    marginRight: 10, // Adjust margin as needed
  },
  madeByText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  nameText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold', // Set font weight to bold
  },
  classText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold', // Set font weight to bold
  },
  idText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold', // Set font weight to bold
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50, // Set borderRadius to half of width or height to make it circular
    borderColor: 'black', // Add border color
    borderWidth: 1, // Set border width
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  largeImage: {
    width: 300,
    height: 300,
    borderRadius: 150, // Set borderRadius to half of width or height to make it circular
    borderColor: 'black', // Add border color
    borderWidth: 5, // Set border width
  },
  closeButton: {
    position: 'absolute',
    top: 30, // Position the close button higher
    right: 20,
    zIndex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});

export default WelcomeScreen;
