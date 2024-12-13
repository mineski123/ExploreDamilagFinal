import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import app from '../../src/config/firebase';

const BusinessList = () => {
  const [groupedBusinesses, setGroupedBusinesses] = useState({});
  const [loading, setLoading] = useState(true);

  const db = getFirestore(app);

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'users')); // Adjust collection name if necessary
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Group businesses by type
        const grouped = data.reduce((acc, business) => {
          const type = business.businessType || 'Other';
          if (!acc[type]) acc[type] = [];
          acc[type].push(business);
          return acc;
        }, {});

        setGroupedBusinesses(grouped);
      } catch (error) {
        console.error('Error fetching businesses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBusinesses();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {Object.keys(groupedBusinesses).map((type) => (
        <View key={type} style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>{type.toUpperCase()}</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
            {groupedBusinesses[type].map((business) => (
              <View key={business.id} style={styles.card}>
                <Image
                  source={{ uri: business.profilePicture || 'https://via.placeholder.com/150' }}
                  style={styles.cardImage}
                />
                <Text style={styles.cardTitle}>{business.businessName || 'Unnamed Business'}</Text>
                <Text style={styles.cardSubtitle}>{business.location || 'Unknown Location'}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  horizontalScrollView: {
    marginBottom: 20,
  },
  card: {
    width: 150,
    marginRight: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardImage: {
    width: '100%',
    height: 100,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 5,
  },
  cardSubtitle: {
    fontSize: 14,
    color: 'gray',
    marginHorizontal: 5,
    marginBottom: 5,
  },
});

export default BusinessList;
