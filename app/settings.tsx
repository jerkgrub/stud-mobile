import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function Settings() {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState('Admin');
  const [fullName, setFullName] = useState('Santiago');
  const [email, setEmail] = useState('admin@email.com');
  const [role, setRole] = useState('SDAO Coordinator');

  // Pick Image from Gallery
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  // Toggle Edit Mode
  const handleEdit = () => {
    if (isEditing) {
      Alert.alert('Success', 'Profile updated!');
    }
    setIsEditing(!isEditing);
  };

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image source={require('../assets/images/Nu_building2.png')} style={styles.backgroundImage} />

      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/images/Studevent.png')} style={styles.logo} />
        <Text style={styles.headerText}>STUDEVENT</Text>
      </View>
      <View style={styles.headerLine} />

      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <View style={styles.avatarContainer}>
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.profileImage} />
          ) : (
            <FontAwesome5 name="user-circle" size={80} color="#1a3ab5" />
          )}
        </View>
        <Text style={styles.username}>{username}</Text>

        {/* Upload Picture Button */}
        <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
          <Text style={styles.uploadButtonText}>Upload Picture</Text>
        </TouchableOpacity>

        {/* Edit Account Button */}
        <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
          <Text style={styles.editButtonText}>{isEditing ? 'Save Changes' : 'Edit Account'}</Text>
        </TouchableOpacity>

        {/* Profile Details */}
        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <MaterialIcons name="person" size={20} color="#1a3ab5" />
            <TextInput
              style={styles.detailInput}
              value={username}
              editable={isEditing}
              onChangeText={setUsername}
            />
          </View>
          <View style={styles.detailRow}>
            <MaterialIcons name="badge" size={20} color="#1a3ab5" />
            <TextInput
              style={styles.detailInput}
              value={fullName}
              editable={isEditing}
              onChangeText={setFullName}
            />
          </View>
          <View style={styles.detailRow}>
            <MaterialIcons name="email" size={20} color="#1a3ab5" />
            <TextInput
              style={styles.detailInput}
              value={email}
              editable={isEditing}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.detailRow}>
            <MaterialIcons name="work" size={20} color="#1a3ab5" />
            <TextInput
              style={styles.detailInput}
              value={role}
              editable={isEditing}
              onChangeText={setRole}
            />
          </View>
        </View>

        <Text style={styles.joinedDate}>Joined June 1, 2024</Text>

        {/* Security Section */}
        <TouchableOpacity style={styles.securityContainer}>
          <FontAwesome5 name="shield-alt" size={24} color="#1a3ab5" />
          <Text style={styles.securityText}>Password and Security</Text>
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
  container: { flex: 1, alignItems: 'center', backgroundColor: '#fff' },
  backgroundImage: { position: 'absolute', width: '100%', height: '100%', resizeMode: 'cover', opacity: 0.3 },

  // Header
  header: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1a3ab5', width: '100%', padding: 15, position: 'absolute', top: 0 },
  headerLine: { width: '100%', height: 4, backgroundColor: '#ffd900', position: 'absolute', top: 70 },
  logo: { width: 40, height: 40, marginRight: 10 },
  headerText: { fontSize: 20, color: '#fff', fontWeight: 'bold' },

  // Profile Container
  profileContainer: {
    alignItems: 'center',
    marginTop: 100,
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
  },
  avatarContainer: { marginBottom: 10 },
  profileImage: { width: 80, height: 80, borderRadius: 40 },

  username: { fontSize: 18, fontWeight: 'bold', color: '#1a3ab5', marginTop: 5 },

  // Buttons
  uploadButton: { backgroundColor: '#1a3ab5', padding: 10, borderRadius: 5, marginTop: 10 },
  uploadButtonText: { color: '#fff', fontSize: 14, fontWeight: 'bold' },
  editButton: { backgroundColor: '#ffd900', padding: 10, borderRadius: 5, marginTop: 10 },
  editButtonText: { color: '#000', fontSize: 14, fontWeight: 'bold' },

  // Profile Details
  detailsContainer: { width: '100%', marginTop: 20 },
  detailRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f4f4f4', padding: 10, borderRadius: 5, marginBottom: 10 },
  detailInput: { marginLeft: 10, fontSize: 16, color: '#000', flex: 1 },

  joinedDate: { marginTop: 10, fontSize: 14, color: '#555' },

  securityContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 20, padding: 15, backgroundColor: '#f4f4f4', borderRadius: 5 },
  securityText: { fontSize: 16, fontWeight: 'bold', color: '#1a3ab5', marginLeft: 10 },

  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', width: '90%', padding: 15, borderRadius: 30, backgroundColor: '#1a3ab5', position: 'absolute', bottom: 20 },
  navButton: { alignItems: 'center', justifyContent: 'center', width: 50, height: 50, borderRadius: 25, backgroundColor: '#005a9c' }
});
