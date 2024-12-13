import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const MyAccountScreen = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState('https://via.placeholder.com/150');
  const [username, setUsername] = useState('Ralph Edwards');
  const [email, setEmail] = useState('james.naismith@example.com');
  const [role, setRole] = useState('Business Owner');
  const [businessName, setBusinessName] = useState('Business Name');
  const [businessType, setBusinessType] = useState('Select Business Type');
  const [location, setLocation] = useState('Location');
  const [guidelines, setGuidelines] = useState('Guidelines');
  const [prices, setPrices] = useState('Prices');
  const [contactUs, setContactUs] = useState('Contact Us');
  const [businessImages, setBusinessImages] = useState([]);

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const saveChanges = () => {
    setIsEditing(false);
    alert('Profile Updated!');
  };

  const pickImage = () => {
    // Functionality to pick an image (implement using an image picker library).
    setProfilePhoto('https://via.placeholder.com/150');
  };

  const pickBusinessImages = () => {
    // Functionality to pick multiple business images (implement using an image picker library).
    alert('Business images picker not implemented yet');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Account</Text>
        <TouchableOpacity onPress={isEditing ? saveChanges : toggleEditMode}>
          <Text style={styles.headerAction}>{isEditing ? 'Save' : 'Edit'}</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Section */}
      <View style={styles.centeredContainer}>
        <View style={styles.profileContainer}>
          <TouchableOpacity onPress={pickImage}>
            <Image source={{ uri: profilePhoto }} style={styles.profileImage} />
          </TouchableOpacity>
          <Text style={styles.profileName}>{username}</Text>
          <Text style={styles.profileEmail}>{email}</Text>
        </View>

        {/* Fields Section */}
        <View style={styles.fieldsContainer}>
          <View style={styles.fieldRow}>
            <Ionicons name="person" size={24} color="green" />
            <TextInput
              editable={isEditing}
              style={[styles.fieldInput, isEditing && styles.editableField]}
              value={username}
              onChangeText={setUsername}
              placeholder="Name"
            />
          </View>
          <View style={styles.fieldRow}>
            <Ionicons name="mail" size={24} color="green" />
            <TextInput
              editable={isEditing}
              style={[styles.fieldInput, isEditing && styles.editableField]}
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
            />
          </View>
          {role === 'Business Owner' && (
            <>
              <View style={styles.fieldRow}>
                <FontAwesome name="briefcase" size={24} color="green" />
                <TextInput
                  editable={isEditing}
                  style={[styles.fieldInput, isEditing && styles.editableField]}
                  value={businessName}
                  onChangeText={setBusinessName}
                  placeholder="Business Name"
                />
              </View>
              <View style={styles.fieldRow}>
                <FontAwesome name="industry" size={24} color="green" />
                <TextInput
                  editable={isEditing}
                  style={[styles.fieldInput, isEditing && styles.editableField]}
                  value={businessType}
                  onChangeText={setBusinessType}
                  placeholder="Business Type"
                />
              </View>
              <View style={styles.fieldRow}>
                <FontAwesome name="map-marker" size={24} color="green" />
                <TextInput
                  editable={isEditing}
                  style={[styles.fieldInput, isEditing && styles.editableField]}
                  value={location}
                  onChangeText={setLocation}
                  placeholder="Location"
                />
              </View>
              <View style={styles.fieldRow}>
                <FontAwesome name="book" size={24} color="green" />
                <TextInput
                  editable={isEditing}
                  style={[styles.fieldInput, isEditing && styles.editableField]}
                  value={guidelines}
                  onChangeText={setGuidelines}
                  placeholder="Guidelines"
                />
              </View>
              <View style={styles.fieldRow}>
                <FontAwesome name="money" size={24} color="green" />
                <TextInput
                  editable={isEditing}
                  style={[styles.fieldInput, isEditing && styles.editableField]}
                  value={prices}
                  onChangeText={setPrices}
                  placeholder="Prices"
                />
              </View>
              <View style={styles.fieldRow}>
                <FontAwesome name="phone" size={24} color="green" />
                <TextInput
                  editable={isEditing}
                  style={[styles.fieldInput, isEditing && styles.editableField]}
                  value={contactUs}
                  onChangeText={setContactUs}
                  placeholder="Contact Us"
                />
              </View>

              {/* Business Images Section */}
              <Text style={styles.label}>Business Images</Text>
              <TouchableOpacity style={styles.imagePickerButton} onPress={pickBusinessImages}>
                <Text style={styles.imagePickerButtonText}>
                  {businessImages.length > 0 ? 'Change Business Images' : 'Upload Business Images'}
                </Text>
              </TouchableOpacity>
              <View style={styles.imagePreviewContainer}>
                {businessImages.map((image, index) => (
                  <Image key={index} source={{ uri: image }} style={styles.businessImage} />
                ))}
              </View>
            </>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    padding: 20,
  },
  headerTitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  headerAction: {
    fontSize: 18,
    color: 'white',
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  profileEmail: {
    fontSize: 16,
    color: 'gray',
  },
  fieldsContainer: {
    width: '90%',
    marginTop: 10,
  },
  fieldRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  fieldInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  editableField: {
    borderBottomWidth: 1,
    borderBottomColor: '#4CAF50',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
    color: '#333',
  },
  imagePickerButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  imagePickerButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imagePreviewContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  businessImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 5,
  },
});

export default MyAccountScreen;
