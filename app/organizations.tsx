import React from 'react'; 
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';

type Props = {
  navigation: StackNavigationProp<any>;
};

// Local images
const images = {
  orgA: require('../assets/images/orgs/NUSG.jpg'),
  orgB: require('../assets/images/orgs/COCO.png'),
  orgC: require('../assets/images/orgs/CSE.png'),
  orgD: require('../assets/images/orgs/CWSJ.png'),
  orgE: require('../assets/images/orgs/DANCE HIVE.png'),
  orgF: require('../assets/images/orgs/DSC.png'),
  orgG: require('../assets/images/orgs/FIRST IMPRESSION.jpg'),
  orgH: require('../assets/images/orgs/ITSC.png'),
  orgI: require('../assets/images/orgs/JFINEX.jpg'),
  orgJ: require('../assets/images/orgs/JMOA.png'),
  orgK: require('../assets/images/orgs/JPCS.png'),
  orgL: require('../assets/images/orgs/JPIA.jpg'),
  orgM: require('../assets/images/orgs/Love for Reading Club.png'),
  orgN: require('../assets/images/orgs/MTSC.png'),
  orgO: require('../assets/images/orgs/NU MOA PEERS.png'),
  orgP: require('../assets/images/orgs/NURSING.jpg'),
  orgQ: require('../assets/images/orgs/PHISMETS.png'), 
  orgR: require('../assets/images/orgs/PSYCHSOC.png'),
  orgS: require('../assets/images/orgs/SAM.png'),
  orgT: require('../assets/images/orgs/tousoc.jpg'),
  orgU: require('../assets/images/orgs/YUGEN.jpg'),
  // orgV: require('../assets/images/orgs/DANCE HIVE.png'),
};

// Organization data
const organizations = [
  { id: 1, name: 'Organization A', image: images.orgA },
  { id: 2, name: 'Organization A', image: images.orgB },
  { id: 3, name: 'Organization A', image: images.orgC },
  { id: 4, name: 'Organization A', image: images.orgD },
  { id: 5, name: 'Organization A', image: images.orgE },
  { id: 6, name: 'Organization A', image: images.orgF },
  { id: 7, name: 'Organization A', image: images.orgG },
  { id: 8, name: 'Organization A', image: images.orgH },
  { id: 9, name: 'Organization A', image: images.orgI },
  { id: 10, name: 'Organization A', image: images.orgJ },
  { id: 11, name: 'Organization A', image: images.orgK },
  { id: 12, name: 'Organization A', image: images.orgL },
  { id: 13, name: 'Organization A', image: images.orgM },
  { id: 14, name: 'Organization A', image: images.orgO },
  { id: 15, name: 'Organization A', image: images.orgP },
  { id: 16, name: 'Organization A', image: images.orgQ },
  { id: 17, name: 'Organization A', image: images.orgR },
  { id: 18, name: 'Organization A', image: images.orgS },
  { id: 19, name: 'Organization A', image: images.orgT },
  { id: 20, name: 'Organization A', image: images.orgU },
  // { id: 21, name: 'Organization A', image: images.orgA },
  // { id: 22, name: 'Organization A', image: images.orgA },
  // { id: 23, name: 'Organization A', image: images.orgA },
  // { id: 24, name: 'Organization A', image: images.orgA },
  // { id: 25, name: 'Organization A', image: images.orgA },
  // { id: 26, name: 'Organization A', image: images.orgA },
  // { id: 27, name: 'Organization A', image: images.orgA },
];

const ViewAllOrganizations: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image source={require('../assets/images/Studevent.png')} style={styles.logo} />
        <Text style={styles.headerText}>STUDEVENT</Text>
      </View>
      <View style={styles.headerLine} />

      {/* Organizations List */}
      <ScrollView contentContainerStyle={styles.listContainer}>
        {organizations.map((org) => (
          <View key={org.id} style={styles.card}>
            <Image source={org.image} style={styles.image} />
            <Text style={styles.cardText}>{org.name}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <FontAwesome5 name="home" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <FontAwesome5 name="users" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <FontAwesome5 name="bell" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <FontAwesome5 name="cog" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a3ab5',
    width: '100%',
    padding: 15,
    position: 'absolute',
    top: 0,
  },
  headerLine: {
    width: '100%',
    height: 4,
    backgroundColor: '#ffd900',
    position: 'absolute',
    top: 70,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    marginTop:80,
    

  },
  card: {
    width: '45%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    padding: 15,
    borderRadius: 30,
    backgroundColor: '#1a3ab5',
    position: 'absolute',
    bottom: 20,
  },
  navButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#005a9c',
  },
});

export default ViewAllOrganizations;
