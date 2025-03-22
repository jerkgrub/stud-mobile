import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function AdminHome() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/Nu_building2.png')} style={styles.backgroundImage} />
      
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/images/Studevent.png')} style={styles.logo} />
        <Text style={styles.headerText}>STUDEVENT</Text>
      </View>
      <View style={styles.headerLine} />
      
      {/* Content */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>FORMS/SIGNATURE</Text>
        
        <View style={styles.stepContainer}>
          <Text style={styles.stepTitle}>STEP 1</Text>
          <Text style={styles.stepText}>
            Answer the form you want to be approved in your project proposal located at the bottom and click "FORMS"
          </Text>
          <FontAwesome5 name="file-alt" size={50} color="#1a3ab5" style={styles.stepIcon} />
        </View>
        
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.commonButton}>
            <Text style={styles.buttonText}>FORMS</Text>
            <Text style={styles.buttonSubText}>ALL FORMS FROM SEAD ARE LOCATED HERE.</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.commonButton}>
            <Text style={styles.buttonText}>PROPOSAL TRACKER</Text>
            <Text style={styles.buttonSubText}>ALL PROPOSALS CAN BE MONITORED HERE.</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      
      {/* Bottom Navigation */}
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
  contentContainer: { alignItems: 'center', marginTop: 90, paddingBottom: 100 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#1a3ab5', marginBottom: 20 },
  stepContainer: { backgroundColor: '#f4f4f4', padding: 20, borderRadius: 10, alignItems: 'center', width: '90%' },
  stepTitle: { fontSize: 18, fontWeight: 'bold', color: '#1a3ab5' },
  stepText: { fontSize: 14, textAlign: 'center', marginVertical: 10 },
  stepIcon: { marginVertical: 10 },
  buttonsContainer: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 20, width: '90%' },
  commonButton: { backgroundColor: '#d9e4ff', padding: 15, borderRadius: 10, alignItems: 'center', width: '45%', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 3, elevation: 5 },
  buttonText: { fontWeight: 'bold', color: '#1a3ab5', textAlign: 'center' },
  buttonSubText: { fontSize: 12, textAlign: 'center', marginTop: 5 },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', width: '90%', padding: 15, borderRadius: 30, backgroundColor: '#1a3ab5', position: 'absolute', bottom: 20 },
  navButton: { alignItems: 'center', justifyContent: 'center', width: 50, height: 50, borderRadius: 25, backgroundColor: '#005a9c' }
});
