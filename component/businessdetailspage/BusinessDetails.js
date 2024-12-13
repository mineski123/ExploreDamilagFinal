import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import placesdata from '../placesdatapage/placesdata';

// Get the screen dimensions
const { width, height } = Dimensions.get('window');

const scaleSize = (size) => (width / 375) * size;  // 375 is the width of iPhone 6, a standard reference device
const scaleFont = (size) => (width / 375) * size;

const BusinessDetails = ({ route, navigation }) => {
  const { place } = route.params || {};
  const placeDetails = placesdata[place?.name];
  const [expanded, setExpanded] = useState(false); // State to manage toggle
  const [isFavorited, setIsFavorited] = useState(false); // State for heart button

  if (!placeDetails) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Place details not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Main Image with Overlayed Header */}
      <View style={styles.imageContainer}>
        <Image source={placeDetails.images[0]} style={styles.mainImage} />
        <View style={styles.headerOverlay}>
          {/* Back button */}
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
            <Ionicons name="arrow-back" size={24} color="#4CAF50" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Place Details */}
      <View style={styles.infoContainer}>
        {/* Row for Title and Heart Button */}
        <View style={styles.titleRow}>
          <Text style={styles.name}>{placeDetails.name}</Text>
          {/* Heart button */}
          <TouchableOpacity
            onPress={() => setIsFavorited(!isFavorited)}
            style={styles.heartButton}
          >
            <Ionicons
              name={isFavorited ? 'heart' : 'heart-outline'}
              size={24}
              color={isFavorited ? 'red' : 'gray'}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.subtitle}>Manolo Fortich, Bukidnon</Text>

        {/* Star Rating */}
        <View style={styles.ratingContainer}>
          {[...Array(placeDetails.rating)].map((_, i) => (
            <Ionicons key={i} name="star" size={scaleSize(20)} color="gold" />
          ))}
        </View>

        {/* Location */}
        <View style={styles.locationRow}>
          <Ionicons name="location-outline" size={scaleSize(16)} color="green" />
          <Text style={styles.locationDetail}>{placeDetails.location}</Text>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Overview */}
        <Text style={styles.overviewTitle}>OVERVIEW</Text>
        <Text style={styles.description}>
          {expanded ? placeDetails.description : `${placeDetails.description.slice(0, 100)}...`}
        </Text>

        {/* Toggle Button */}
        <TouchableOpacity
          style={styles.readMoreButton}
          onPress={() => setExpanded(!expanded)} // Toggle expanded state
        >
          <Text style={styles.readMoreButtonText}>
            {expanded ? 'Read Less' : 'Read More'}
          </Text>
        </TouchableOpacity>

        {/* Action Buttons Section */}
        <View style={styles.actionContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="location-outline" size={scaleSize(30)} color="black" />
            <Text style={styles.actionText}>Location</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={() =>
              navigation.navigate('Guidelines', {
                guidelines: placeDetails.guidelines,
                placeName: placeDetails.name,
                location: placeDetails.location,
                rating: placeDetails.rating,
                image: placeDetails.images[0],
              })
            }
          >
            <Ionicons name="book-outline" size={scaleSize(30)} color="black" />
            <Text style={styles.actionText}>Guidelines</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation.navigate('Prices', { placeDetails: placeDetails })}
          >
            <FontAwesome5 name="percentage" size={scaleSize(30)} color="black" />
            <Text style={styles.actionText}>Prices</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ContactUs', {
                contactInfo: {
                  contactNumber: placeDetails.contactNumber,
                  email: placeDetails.email,
                  address: placeDetails.address,
                  name: placeDetails.name,
                  image: placeDetails.images[0],
                  location: placeDetails.location,
                  rating: placeDetails.rating, // Include rating here
                },
              })
            }
            style={styles.actionButton}
          >
            <FontAwesome5 name="address-book" size={scaleSize(30)} color="black" />
            <Text style={styles.actionText}>Contact Us</Text>
          </TouchableOpacity>
        </View>

        {/* Go There Now Button */}
        <TouchableOpacity style={styles.goThereButton}>
          <Text style={styles.goThereButtonText}>Go there now!</Text>
        </TouchableOpacity>

        {/* Photos Section */}
        <View style={styles.photosContainer}>
          <Text style={styles.photosTitle}>Photos</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {placeDetails.images.map((image, index) => (
              <Image key={index} source={image} style={styles.photo} />
            ))}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f8f8',
  },
  imageContainer: {
    position: 'relative',
  },
  mainImage: {
    width: '100%',
    height: scaleSize(280),
    borderBottomLeftRadius: scaleSize(20),
    borderBottomRightRadius: scaleSize(20),
    resizeMode: 'cover',
  },
  headerOverlay: {
    position: 'absolute',
    top: scaleSize(60),
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scaleSize(15),
    paddingTop: scaleSize(10),
  },
  iconButton: {
    padding: scaleSize(5),
  },
  infoContainer: {
    padding: scaleSize(20),
    alignItems: 'center',
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  name: {
    fontSize: scaleFont(24),
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  heartButton: {
    padding: scaleSize(5),
  },
  subtitle: {
    fontSize: scaleFont(14),
    color: '#7A7A7A',
    marginBottom: scaleSize(2),
    width: '100%',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 0,
    marginBottom: scaleSize(50),
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationDetail: {
    fontSize: scaleFont(14),
    color: 'black',
    marginLeft: scaleSize(5),
  },
  divider: {
    width: '90%',
    height: 1,
    backgroundColor: '#4CAF50',
    marginVertical: scaleSize(15),
  },
  overviewTitle: {
    fontSize: scaleFont(14),
    fontWeight: 'bold',
    color: '#333',
    marginBottom: scaleSize(30),
    width: '100%',
  },
  description: {
    fontSize: scaleFont(16),
    color: '#333',
    textAlign: 'center',
    marginVertical: scaleSize(10),
    paddingHorizontal: scaleSize(10),
    lineHeight: scaleSize(24),
  },
  readMoreButton: {
    backgroundColor: '#32a852',
    paddingVertical: scaleSize(10),
    alignItems: 'center',
    borderRadius: scaleSize(50),
    width: '80%',
    marginTop: scaleSize(20),
  },
  readMoreButtonText: {
    color: 'white',
    fontSize: scaleFont(16),
    fontWeight: 'bold',
  },
  actionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: scaleSize(20),
    width: '100%',
    paddingHorizontal: scaleSize(20),
  },
  actionButton: {
    width: '45%',
    backgroundColor: '#fff',
    borderRadius: scaleSize(10),
    paddingVertical: scaleSize(20),
    alignItems: 'center',
    marginVertical: scaleSize(10),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: scaleSize(1.41),
    elevation: 2,
  },
  actionText: {
    fontSize: scaleFont(14),
    color: '#333',
    marginTop: scaleSize(10),
    fontWeight: '500',
  },
  goThereButton: {
    backgroundColor: '#32a852',
    paddingVertical: scaleSize(10),
    alignItems: 'center',
    borderRadius: scaleSize(50),
    width: '80%',
    marginTop: scaleSize(20),
  },
  goThereButtonText: {
    color: 'white',
    fontSize: scaleFont(16),
    fontWeight: 'bold',
  },
  photosContainer: {
    width: '100%',
    marginTop: scaleSize(20),
  },
  photosTitle: {
    fontSize: scaleFont(18),
    fontWeight: 'bold',
    marginBottom: scaleSize(10),
  },
  photo: {
    width: scaleSize(120),
    height: scaleSize(180),
    borderRadius: scaleSize(15),
    marginHorizontal: scaleSize(8),
  },
});

export default BusinessDetails;
