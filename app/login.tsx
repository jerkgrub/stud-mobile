import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Dimensions, Image } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons'; // Import Ionicons for the eye icon

const { width, height } = Dimensions.get('window'); // Get screen dimensions

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility

  const toggleShowPassword = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };

  return (
    <ImageBackground 
      source={require('assets/images/Nu_building2.png')} 
      style={styles.background}
      resizeMode="cover" // Ensure the image covers the entire screen
    >
      {/* Logo at the top */}
      <View style={styles.logoContainer}>
        <Image
          source={require('assets/images/Studevent.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Login container */}
      <View style={styles.overlay}>
        <Text style={styles.title}>LOG IN</Text>

        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <MaterialIcons name="email" size={24} color="#999" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View style={styles.inputWrapper}>
            <MaterialIcons name="lock" size={24} color="#999" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#999"
              secureTextEntry={!showPassword} // Toggle secureTextEntry based on state
            />
            <TouchableOpacity onPress={toggleShowPassword} style={styles.eyeIcon}>
              <Ionicons
                name={showPassword ? 'eye-off' : 'eye'} // Change icon based on state
                size={24}
                color="#999"
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOG IN</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: width, // Set width to screen width
    height: height, // Set height to screen height
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute', // Position the logo at the top
    top: 50, // Adjust this value to move the logo higher or lower
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    width: 240, // Increased size for the logo
    height: 240, // Increased size for the logo
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white overlay
    padding: 20,
    borderRadius: 10,
    width: '90%',
    maxWidth: 400,
    alignItems: 'center',
    marginTop: 100, // Move the container higher
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333'
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#fff',
    paddingHorizontal: 15
  },
  icon: {
    marginRight: 10
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16
  },
  eyeIcon: {
    marginLeft: 10
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#1a3ab5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
});