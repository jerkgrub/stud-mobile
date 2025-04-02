import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const forms = [
  { title: 'Waiver for outside school', icon: 'file-alt' },
  { title: 'Budget Proposal', icon: 'file-invoice-dollar' },
  { title: 'Project Proposal', icon: 'project-diagram' },
  { title: 'Activity Application Form', icon: 'clipboard-list' },
  { title: 'Local Off-Campus Form', icon: 'map-marker-alt' },
  { title: 'Liquidation', icon: 'money-check-alt' },
];

export default function FormsScreen() {
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
        <Text style={styles.title}>APPLICATION FORMS</Text>
        <View style={styles.formGrid}>
          {forms.map((form, index) => (
            <TouchableOpacity key={index} style={[styles.formButton, styles.shadow]}>
              <FontAwesome5 name={form.icon} size={24} color="#1a3ab5" style={styles.icon} />
              <Text style={styles.formText}>{form.title}</Text>
            </TouchableOpacity>
          ))}
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
  container: { flex: 1, alignItems: 'center', backgroundColor: '#fff' },
  backgroundImage: { position: 'absolute', width: '100%', height: '100%', resizeMode: 'cover', opacity: 0.3 },
  header: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1a3ab5', width: '100%', padding: 15, position: 'absolute', top: 0 },
  headerLine: { width: '100%', height: 4, backgroundColor: '#ffd900', position: 'absolute', top: 70 },
  logo: { width: 40, height: 40, marginRight: 10 },
  headerText: { fontSize: 20, color: '#fff', fontWeight: 'bold' },
  contentContainer: { alignItems: 'center', marginTop: 100, paddingBottom: 100 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#1a3ab5', marginBottom: 20 },
  formGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
  formButton: { width: '40%', aspectRatio: 1, backgroundColor: '#f4f4f4', margin: 10, borderRadius: 10, alignItems: 'center', justifyContent: 'center', padding: 15 },
  shadow: { shadowColor: '#000', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.3, shadowRadius: 5, elevation: 5 },
  icon: { marginBottom: 10 },
  formText: { fontSize: 14, textAlign: 'center', color: '#333', fontWeight: 'bold' },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', width: '90%', padding: 15, borderRadius: 30, backgroundColor: '#1a3ab5', position: 'absolute', bottom: 20 },
  navButton: { alignItems: 'center', justifyContent: 'center', width: 50, height: 50, borderRadius: 25, backgroundColor: '#005a9c' }
});
