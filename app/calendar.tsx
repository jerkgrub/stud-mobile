import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Calendar, DateData } from 'react-native-calendars';

export default function CalendarScreen() {
  const [selectedDate, setSelectedDate] = useState('');
  
  const events: Record<string, { name: string; time: string }[]> = {
    '2024-03-20': [{ name: 'Event 1', time: '10:00 AM' }],
    '2024-03-21': [{ name: 'Event 2', time: '02:00 PM' }],
    '2024-03-22': [{ name: 'Event 3', time: '06:00 PM' }],
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/Nu_building2.png')} style={styles.backgroundImage} />
      
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/images/Studevent.png')} style={styles.logo} />
        <Text style={styles.headerText}>STUDEVENT</Text>
      </View>
      <View style={styles.headerLine} />

      {/* Calendar */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Event Calendar</Text>
        <Calendar
          onDayPress={(day: DateData) => setSelectedDate(day.dateString)}
          markedDates={{
            ...Object.keys(events).reduce((acc, date) => {
              acc[date] = { marked: true, dotColor: 'blue' };
              return acc;
            }, {} as Record<string, any>),
            ...(selectedDate && { [selectedDate]: { selected: true, selectedColor: '#1a3ab5' } })
          }}
          theme={{
            selectedDayBackgroundColor: '#1a3ab5',
            todayTextColor: '#1a3ab5',
            arrowColor: '#1a3ab5',
          }}
        />

        {/* Events List */}
        <View style={styles.eventContainer}>
          <Text style={styles.eventTitle}>Events on {selectedDate || 'Select a date'}</Text>
          {events[selectedDate]?.map((event, index) => (
            <Text key={index} style={styles.eventItem}>{event.time} - {event.name}</Text>
          )) || <Text style={styles.noEventText}>No events scheduled.</Text>}
        </View>
      </View>

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
  container: { flex: 1, alignItems: 'center', backgroundColor: '#fff', overflow: 'hidden' },
  backgroundImage: { position: 'absolute', width: '100%', height: '100%', resizeMode: 'cover', opacity: 0.3 },
  header: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1a3ab5', width: '100%', padding: 15, position: 'absolute', top: 0 },
  headerLine: { width: '100%', height: 4, backgroundColor: '#ffd900', position: 'absolute', top: 70 },
  logo: { width: 40, height: 40, marginRight: 10 },
  headerText: { fontSize: 20, color: '#fff', fontWeight: 'bold' },
  contentContainer: { alignItems: 'center', marginTop: 90, paddingBottom: 100, width: '100%' },
  title: { fontSize: 22, fontWeight: 'bold', color: '#1a3ab5', marginBottom: 20 },
  eventContainer: { width: '90%', backgroundColor: '#f4f4f4', padding: 20, borderRadius: 10, marginTop: 20 },
  eventTitle: { fontSize: 18, fontWeight: 'bold', color: '#1a3ab5', marginBottom: 10 },
  eventItem: { fontSize: 16, color: '#333', marginBottom: 5 },
  noEventText: { fontSize: 16, color: '#999' },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', width: '90%', padding: 15, borderRadius: 30, backgroundColor: '#1a3ab5', position: 'absolute', bottom: 20 },
  navButton: { alignItems: 'center', justifyContent: 'center', width: 50, height: 50, borderRadius: 25, backgroundColor: '#005a9c' }
});
