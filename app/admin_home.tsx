import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';


const { width, height } = Dimensions.get('window');
const images = [
  require('../assets/images/NU_moa_event1.jpg'),
  require('../assets/images/NU_moa_event2.jpg'),
  require('../assets/images/NU_moa_event3.jpg'),
  require('../assets/images/NU_moa_event4.jpg'),
  require('../assets/images/NU_moa_event5.jpg'),
  require('../assets/images/NU_moa_event6.jpg')
];

export default function AdminHome() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/Nu_building2.png')} style={styles.backgroundImage} />
      <View style={styles.header}>
        <Image source={require('../assets/images/Studevent.png')} style={styles.logo} />
        <Text style={styles.headerText}>STUDEVENT</Text>
      </View>
      <View style={styles.headerLine} />
      
      <Text style={styles.welcomeText}>Welcome, Admin!</Text>
      
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} style={styles.imageSlider}>
        {images.map((image, index) => (
          <Image key={index} source={image} style={styles.eventImage} />
        ))}
      </ScrollView>

      <View style={styles.featuresContainer}>
        <TouchableOpacity style={styles.featureButton}>
          <FontAwesome5 name="file-signature" size={40} color="#1a3ab5" />
          <Text style={styles.featureText}>Forms</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.featureButton}>
          <FontAwesome5 name="calendar-alt" size={40} color="#1a3ab5" />
          <Text style={styles.featureText}>Event Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.featureButton}>
          <FontAwesome5 name="tachometer-alt" size={40} color="#1a3ab5" />
          <Text style={styles.featureText}>Dashboard</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}><FontAwesome5 name="home" size={24} color="white" /></TouchableOpacity>
        <TouchableOpacity style={styles.navButton}><FontAwesome5 name="users" size={24} color="white" /></TouchableOpacity>
        <TouchableOpacity style={styles.navButton}><FontAwesome5 name="bell" size={24} color="white" /></TouchableOpacity>
        <TouchableOpacity style={styles.navButton}><FontAwesome5 name="cog" size={24} color="white" /></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  backgroundImage: { position: 'absolute', width: '100%', height: '100%', resizeMode: 'cover' },
  header: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1a3ab5', width: '100%', padding: 15, position: 'absolute', top: 0 },
  headerLine: { width: '100%', height: 4, backgroundColor: '#ffd900', position: 'absolute', top: 70 },
  logo: { width: 40, height: 40, marginRight: 10 },
  headerText: { fontSize: 20, color: '#fff', fontWeight: 'bold' },
  welcomeText: { fontSize: 22, fontWeight: 'bold', marginTop: 100, marginBottom: 10 },
  imageSlider: { width: width * 0.9, height: height * 0.25 },
  eventImage: { width: width * 0.9, height: height * 0.25, borderRadius: 15, resizeMode: 'cover' },
  featuresContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '95%', marginTop: 20, marginBottom: 330 },
  featureButton: { alignItems: 'center', flex: 1, padding: 15, backgroundColor: '#FFFFFF', borderRadius: 20, marginHorizontal: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 4 },shadowOpacity: 0.3,shadowRadius: 4,elevation: 5 },
  featureText: { marginTop: 5, fontSize: 16, fontWeight: 'bold', color: '#1a3ab5', textAlign: 'center' },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', width: '90%', padding: 15, borderRadius: 30, backgroundColor: '#1a3ab5', position: 'absolute', bottom: 20 },
  navButton: { alignItems: 'center', justifyContent: 'center', width: 50, height: 50, borderRadius: 25, backgroundColor: '#005a9c' }
});
