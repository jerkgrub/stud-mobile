// import React from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
// import { FontAwesome5 } from '@expo/vector-icons';
// import { PieChart } from 'react-native-chart-kit';
// import { Dimensions } from 'react-native';

// const screenWidth = Dimensions.get('window').width;

// const data = [
//   { name: 'Org A', population: 30, color: '#1E90FF', legendFontColor: '#7F7F7F', legendFontSize: 12 },
//   { name: 'Org B', population: 20, color: '#FF6347', legendFontColor: '#7F7F7F', legendFontSize: 12 },
//   { name: 'Org C', population: 15, color: '#32CD32', legendFontColor: '#7F7F7F', legendFontSize: 12 },
//   { name: 'Org D', population: 10, color: '#FFD700', legendFontColor: '#7F7F7F', legendFontSize: 12 },
// ];

// export default function Dashboard() {
//   return (
//     <View style={styles.container}>
//       <Image source={require('../assets/images/Nu_building2.png')} style={styles.backgroundImage} />
//       {/* Header */}
//       <View style={styles.header}>
//         <Image source={require('../assets/images/Studevent.png')} style={styles.logo} />
//         <Text style={styles.headerText}>STUDEVENT</Text>
//       </View>
//       <View style={styles.headerLine} />

//       <ScrollView contentContainerStyle={styles.contentContainer}>
//         <Text style={styles.title}>Dashboard</Text>

//         <View style={styles.statContainer}>
//           <View style={[styles.statBox, styles.shadow, { backgroundColor: '#FFD700' }]}> 
//             <FontAwesome5 name="file-alt" size={24} color="black" style={styles.statIcon} />
//             <Text style={styles.statNumber}>3</Text>
//             <Text style={styles.statLabel}>Proposals</Text>
//           </View>
//           <View style={[styles.statBox, styles.shadow, { backgroundColor: '#FFC0CB' }]}> 
//             <FontAwesome5 name="wallet" size={24} color="black" style={styles.statIcon} />
//             <Text style={styles.statNumber}>1</Text>
//             <Text style={styles.statLabel}>Liquidations</Text>
//           </View>
//         </View>

//         <View style={styles.chartContainer}>
//           <Text style={styles.chartTitle}>Top Organizations</Text>
//           <PieChart
//             data={data}
//             width={screenWidth * 0.9}
//             height={200}
//             chartConfig={{
//               backgroundGradientFrom: '#fff',
//               backgroundGradientTo: '#fff',
//               color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//             }}
//             accessor={'population'}
//             backgroundColor={'transparent'}
//             paddingLeft={'15'}
//             absolute
//           />
//         </View>

//         <View style={styles.eventContainer}>
//           <Text style={styles.eventTitle}>Recent Events</Text>
//           <Text style={styles.eventDate}>March 3, 2024</Text>
//           <Text style={styles.eventItem}>📌 Mobile Legends Tournament</Text>
//           <Text style={styles.eventItem}>📌 Leadership Seminar</Text>
//         </View>
//       </ScrollView>

//       {/* Bottom Navigation */}
//       <View style={styles.bottomNav}>
//         <TouchableOpacity style={styles.navButton}><FontAwesome5 name="home" size={24} color="white" /></TouchableOpacity>
//         <TouchableOpacity style={styles.navButton}><FontAwesome5 name="users" size={24} color="white" /></TouchableOpacity>
//         <TouchableOpacity style={styles.navButton}><FontAwesome5 name="bell" size={24} color="white" /></TouchableOpacity>
//         <TouchableOpacity style={styles.navButton}><FontAwesome5 name="cog" size={24} color="white" /></TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, alignItems: 'center', backgroundColor: '#fff' },
//   backgroundImage: { position: 'absolute', width: '100%', height: '100%', resizeMode: 'cover', opacity: 0.3 },
//   header: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1a3ab5', width: '100%', padding: 15, position: 'absolute', top: 0 },
//   headerLine: { width: '100%', height: 4, backgroundColor: '#ffd900', position: 'absolute', top: 70 },
//   logo: { width: 40, height: 40, marginRight: 10 },
//   headerText: { fontSize: 20, color: '#fff', fontWeight: 'bold' },
//   contentContainer: { alignItems: 'center', marginTop: 90, paddingBottom: 100 },
//   title: { fontSize: 20, color: '#fff', fontWeight: 'bold', backgroundColor: '#1a3ab5', paddingVertical: 8, paddingHorizontal: 20, borderRadius: 10 },
//   statContainer: { flexDirection: 'row', justifyContent: 'space-around', width: '90%', marginBottom: 20 },
//   statBox: { padding: 20, borderRadius: 10, alignItems: 'center', width: '45%' },
//   statNumber: { fontSize: 24, fontWeight: 'bold', color: '#000' },
//   statLabel: { fontSize: 16, fontWeight: 'bold', color: '#000' },
//   statIcon: { marginBottom: 5 },
//   shadow: { shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 4, elevation: 5 },
//   chartContainer: { alignItems: 'center', width: '90%', backgroundColor: '#f4f4f4', padding: 20, borderRadius: 10, marginBottom: 20 },
//   chartTitle: { fontSize: 18, fontWeight: 'bold', color: '#1a3ab5', marginBottom: 10 },
//   eventContainer: { width: '90%', backgroundColor: '#f4f4f4', padding: 20, borderRadius: 10 },
//   eventTitle: { fontSize: 18, fontWeight: 'bold', color: '#1a3ab5', marginBottom: 10 },
//   eventDate: { fontSize: 14, fontWeight: 'bold', color: '#555', marginBottom: 10 },
//   eventItem: { fontSize: 14, color: '#333', marginBottom: 5 },
//   bottomNav: { flexDirection: 'row', justifyContent: 'space-around', width: '90%', padding: 15, borderRadius: 30, backgroundColor: '#1a3ab5', position: 'absolute', bottom: 20 },
//   navButton: { alignItems: 'center', justifyContent: 'center', width: 50, height: 50, borderRadius: 25, backgroundColor: '#005a9c' }
// });
