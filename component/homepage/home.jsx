import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';


const { width, height } = Dimensions.get('window');


const scaleFont = (size) => (width / 375) * size; 

const HomeScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  const attractions = [
    { name: 'Damilag Hills', location: 'Purok 11, Manolo Fortich, 8703 Bukidnon', image: require('../../assets/hills.png') },
    { name: 'Cafe 14-15', location: '9RW5+PH, Manolo Fortich, Bukidnon', image: require('../../assets/cafe.png') },
    { name: 'Concetta Tourist', location: 'Purok 13, Manolo Fortich, 8703 Bukidnon', image: require('../../assets/concetta.png') },
    { name: 'Bamboo Pavilion', location: '8RV8+4W, Manolo Fortich, Bukidnon', image: require('../../assets/bamboo.png') },
  ];

  const foods = [
    { name: 'Umarika Cafe', location: '9R96+GGW Purok 16,Damilag, Manolo Fortich', image: require('../../assets/umarika.png') },
    { name: 'Lady\'s First Resto', location: 'Damilag, Manolo Fortich, 8703 Bukidnon', image: require('../../assets/lady.png') },
    { name: 'Rey\'s Warehouse', location: 'Villa Violeta, Damilag, Manolo Fortich, 8705 Bukidnon', image: require('../../assets/rey.png') },
    { name: 'Baelly\'s Lechon House', location: 'Hi-way, Damilag, Manolo Fortich, 8703 Bukidnon', image: require('../../assets/baelly.png') },
  ];

  const hotels = [
    { name: 'Eunice Villa', location: 'Purok 13, Damilag, Manolo Fortich, 8703 Bukidnon', image: require('../../assets/eunice.png') },
    { name: 'BCC Business Hotel', location: '9R56+5RQ, Manolo Fortich, 8703 Bukidnon', image: require('../../assets/bcc.png') },
    { name: 'Sebastian\'s Place', location: 'BCC Homes, B17 LT13 & LT15, Quatar Street, Manolo Fortich, 8703 Bukidnon', image: require('../../assets/sebastian.png') },
  ];

  const services = [
    { name: 'Save Mart', location: '9R37+35R, Manolo Fortich, Bukidnon', image: require('../../assets/savemart.png') },
    { name: 'Cuarteros Hardware', location: '9R96+FM5, Manolo Fortich, Bukidnon', image: require('../../assets/hardware.png') },
    { name: 'Concetta Tourist', location: 'Purok 13, Manolo Fortich, 8703 Bukidnon', image: require('../../assets/concetta.png') },
  ];

  const transportation = [
    { name: 'Tric-cab', location: 'Main Road', image: require('../../assets/bao.png') },
    { name: 'Multi-cab', location: 'Secondary Road', image: require('../../assets/multicab.png') },
    { name: 'Habal-habal', location: 'Village Path', image: require('../../assets/habal.png') },
  ];

  const filteredAttractions = attractions.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredFoods = foods.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredHotels = hotels.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredServices = services.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredTransportation = transportation.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <Image
              source={{ uri: 'https://via.placeholder.com/60' }}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.greetingText}>Hi, Clyde!</Text>
        <Text style={styles.exploreText}>Explore Damilag</Text>

  {/* Search Bar */}
  <View style={styles.searchBarContainer}>
    <Ionicons name="search" size={24} color="gray" style={styles.searchIcon} />
    <TextInput
      style={styles.searchInput}
      placeholder="Search places, food, or services..."
      value={searchQuery}
      onChangeText={(text) => setSearchQuery(text)}
    />
  </View>

  {/* Featured Attractions */}
  {filteredAttractions.length > 0 && (
    <>
      <Text style={styles.sectionTitle}>Featured Attractions</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
        {filteredAttractions.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => navigation.navigate('BusinessDetails', { place: item })}
          >
            <Image source={item.image} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{item?.name || "Unknown Name"}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'top', marginHorizontal: 5 }}>
            <Ionicons name="location-outline" size={16} color="green" />
            <Text style={styles.cardSubtitle}>{item.location || "Unknown Location"}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  )}

  {/* Foods Section */}
  {filteredFoods.length > 0 && (
    <>
      <Text style={styles.sectionTitle}>Foods</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
        {filteredFoods.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => navigation.navigate('BusinessDetails', { place: item })}
          >
            <Image source={item.image} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{item?.name || "Unknown Name"}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'top', marginHorizontal: 5 }}>
            <Ionicons name="location-outline" size={16} color="green" />
            <Text style={styles.cardSubtitle}>{item.location || "Unknown Location"}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  )}

  {/* Hotels and Accommodations Section */}
  {filteredHotels.length > 0 && (
    <>
      <Text style={styles.sectionTitle}>Hotels and Accommodations</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
        {filteredHotels.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => navigation.navigate('BusinessDetails', { place: item })}
          >
            <Image source={item.image} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{item?.name || "Unknown Name"}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'top', marginHorizontal: 5 }}>
            <Ionicons name="location-outline" size={16} color="green" />
            <Text style={styles.cardSubtitle}>{item.location || "Unknown Location"}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  )}

  {/* Other Services Section */}
  {filteredServices.length > 0 && (
    <>
      <Text style={styles.sectionTitle}>Other Services</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
        {filteredServices.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => navigation.navigate('BusinessDetails', { place: item })}
          >
            <Image source={item.image} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{item?.name || "Unknown Name"}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'top', marginHorizontal: 5 }}>
            <Ionicons name="location-outline" size={16} color="green" />
            <Text style={styles.cardSubtitle}>{item.location || "Unknown Location"}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  )}

 {/* Transportation Section */}
{filteredTransportation.length > 0 && (
  <>
    <Text style={styles.sectionTitle}>Transportation</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
      {filteredTransportation.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => {
            // Navigate based on item name or another property
            if (item.name === 'Tric-cab') {
              navigation.navigate('Tricab', { place: item });
            } else if (item.name === 'Multi-cab') {
              navigation.navigate('Multicab', { place: item });
            } else if (item.name === 'Habal-habal') {
              navigation.navigate('Habal', { place: item });
            } else {
              // Default navigation for other transportation types, if any
              console.log('Unknown transportation type', item.name);
            }
          }}
        >
          <Image source={item.image} style={styles.cardImage} />
          <Text style={styles.cardTitle}>{item.name}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'top', marginHorizontal: 5 }}>
            <Ionicons name="location-outline" size={16} color="green" />
            <Text style={styles.cardSubtitle}>{item.location}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </>
)}


{/* Footer Section */}
<View style={styles.footerContainer}>
  <Text style={styles.footerText}>Cultural Guidelines</Text>
  <Text style={styles.footerDescription}>
    Visiting Damilag soon? Understanding basic language, religion, social etiquette, customs, protocols, and work culture is a must.
  </Text>
  <TouchableOpacity
    style={styles.footerButton}
    onPress={() => navigation.navigate('BarangayDamilag')}
  >
    <Text style={styles.footerButtonText}>Read more</Text>
  </TouchableOpacity>
</View>

</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
  headerContainer: {
    backgroundColor: '#32a852',
    flexDirection: 'row',
    justifyContent: 'flex-end', // Align content to the right
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 25,
    paddingTop: 40, // Adjusted padding to make space
  },
  headerRight: {
    justifyContent: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 30, 
  },
  contentContainer: {
    flexGrow: 1, // Use flexGrow to ensure content expands and is scrollable
    paddingHorizontal: 15,
    paddingBottom: 50, // Add padding at bottom to ensure content isn't cut off
  },
  greetingText: {
    fontSize: scaleFont(24), // Scaled font size for responsiveness
    fontWeight: 'bold',
    marginTop: 10,
  },
  exploreText: {
    fontSize: scaleFont(18), // Scaled font size for responsiveness
    color: 'gray',
    marginBottom: 20,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white', // White search bar background
    borderWidth: 0, // No border for a cleaner look
    borderRadius: 25, // Rounded edges
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 10,
    height: 40,
    shadowColor: '#000', // Add slight shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2, // Shadow for Android
  },

  searchIcon: {
    marginRight: 10,
    color: 'green',
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: scaleFont(16), // Scaled font size for search input
  },
  sectionTitle: {
    fontSize: scaleFont(18), // Scaled font size for section titles
    fontWeight: 'bold',
    marginVertical: 10,
  },
  horizontalScrollView: {
    marginBottom: 20,
  },
  card: {
    width: width * 0.4, // 40% of the screen width for responsive sizing
    marginRight: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 100,
  },
  cardTitle: {
    fontSize: scaleFont(16), // Scaled font size for card titles
    fontWeight: 'bold',
    margin: 5,
  },
  cardSubtitle: {
    fontSize: scaleFont(14), // Scaled font size for subtitles
    color: 'gray',
    marginHorizontal: 5,
    marginBottom: 5,
  },
  footerContainer: {
    marginVertical: 20,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  footerText: {
    fontSize: scaleFont(18), // Scaled font size for footer text
    fontWeight: 'bold',
    marginBottom: 10,
  },
  footerDescription: {
    fontSize: scaleFont(16), // Scaled font size for footer description
    color: 'gray',
    marginBottom: 20,
  },
  footerButton: {
    backgroundColor: '#32a852',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  footerButtonText: {
    color: 'white',
    fontSize: scaleFont(16), // Scaled font size for button text
    fontWeight: 'bold',
  },
});

export default HomeScreen;
