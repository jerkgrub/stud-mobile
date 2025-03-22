import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function ApplicationForms() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/Nu_building2.png')} style={styles.backgroundImage} />
      
      <View style={styles.header}>
        <Image source={require('../assets/images/Studevent.png')} style={styles.logo} />
        <Text style={styles.headerText}>STUDEVENT</Text>
      </View>
      <View style={styles.headerLine} />
      
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>APPLICATION FORMS</Text>
        <View style={styles.formContainer}>
          <TouchableOpacity style={styles.formButton}>
            <FontAwesome5 name="file-alt" size={24} color="#1a3ab5" />
            <Text style={styles.formText}>Waiver for outside school</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.formButton}>
            <FontAwesome5 name="file-invoice-dollar" size={24} color="#1a3ab5" />
            <Text style={styles.formText}>Budget Proposal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.formButton}>
            <FontAwesome5 name="clipboard-list" size={24} color="#1a3ab5" />
            <Text style={styles.formText}>Project Proposal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.formButton}>
            <FontAwesome5 name="tasks" size={24} color="#1a3ab5" />
            <Text style={styles.formText}>Activity Application Form</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.formButton}>
            <FontAwesome5 name="school" size={24} color="#1a3ab5" />
            <Text style={styles.formText}>Local Off-Campus Form</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.formButton}>
            <FontAwesome5 name="receipt" size={24} color="#1a3ab5" />
            <Text style={styles.formText}>Liquidation</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.backButton}><Text style={styles.backButtonText}>BACK</Text></TouchableOpacity>
      </ScrollView>
      
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
  content: { alignItems: 'center', paddingTop: 100, paddingBottom: 50 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  formContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
  formButton: { 
    width: width * 0.4, 
    height: 80, 
    margin: 10, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#f8f9fa', 
    borderRadius: 10, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 5, 
    elevation: 5 
  },
  formText: { fontSize: 14, fontWeight: 'bold', textAlign: 'center', marginTop: 5 },
  backButton: { marginTop: 20, backgroundColor: '#1a3ab5', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5 },
  backButtonText: { color: 'white', fontWeight: 'bold' },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', width: '90%', padding: 15, borderRadius: 30, backgroundColor: '#1a3ab5', position: 'absolute', bottom: 20 },
  navButton: { alignItems: 'center', justifyContent: 'center', width: 50, height: 50, borderRadius: 25, backgroundColor: '#005a9c' }
});
