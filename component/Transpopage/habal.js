import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const Habal = () => {
  const navigation = useNavigation(); // Access navigation

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#4CAF50" />
      </TouchableOpacity>

      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/habal.png')} style={styles.mainImage} />
      </View>

      {/* Info Section */}
      <View style={styles.infoContainer}>
        <Text style={styles.placeName}>Habal-habal</Text>
        

        <View style={styles.divider} />
      </View>

      {/* Guidelines Section */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
  <View style={styles.guidelinesTitleContainer}>
    <Text style={styles.guidelinesTitle}>Fare</Text>
  </View>
  <View style={styles.routeContainer}>
    <View style={styles.routeRow}>
      <Text style={styles.routeText}>PCH → Dahilayan </Text>
      <Text style={styles.fareText}>PHP 200.00</Text>
    </View>
    <View style={styles.routeRow}>
      <Text style={styles.routeText}>Alae → Barangay Hall</Text>
      <Text style={styles.fareText}>PHP 60.00</Text>
    </View>
    <View style={styles.routeRow}>
      <Text style={styles.routeText}>Plaza → Damilag Hills</Text>
      <Text style={styles.fareText}>PHP 120.00</Text>
    </View>
  </View>
</ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 40, // Adjust based on your UI
    left: 20,
    zIndex: 10,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    marginTop: 80, // Adjust to make room for the back button
  },
  mainImage: {
    width: '100%',
    height: 280,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    resizeMode: 'contain',
  },
  infoContainer: {
    marginTop: 20,
    width: '90%',
    alignItems: 'center',
  },
  placeName: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#4CAF50',
    width: '100%',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#7A7A7A',
    marginBottom: 8,
    width: '100%',
    textAlign: 'center',
  },
 
  divider: {
    width: '90%',
    height: 1,
    backgroundColor: '#4CAF50',
    marginVertical: 15,
  },
  contentContainer: {
    width: '90%',
    marginTop: 10,
  },
  guidelinesTitleContainer: {
    marginBottom: 16,
  },
  guidelinesTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  routeContainer: {
    marginTop: 16,
  },
  routeRow: {
  flexDirection: 'row',            // Align texts horizontally
  justifyContent: 'space-between', // Space between routeText and fareText
  alignItems: 'center',            // Vertically center the items in the row
  marginBottom: 20,                // Space between rows
  width: '100%',                   // Ensure the row takes up full width
},
routeText: {
  fontSize: 18,
  flex: 1,                         // Allow routeText to take available space
},
fareText: {
  fontWeight: 'bold',
  fontSize: 16,
  textAlign: 'right',              // Align fareText to the right
}
});

export default Habal;
