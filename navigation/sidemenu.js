import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const SideMenu = ({ toggleMenu }) => {
  const navigation = useNavigation();

  return (
    <View style={StyleSheet.absoluteFill}>
      {/* Transparent Overlay to Capture Touch Outside the Side Menu */}
      <TouchableOpacity
        style={styles.overlay}
        onPress={toggleMenu}
        activeOpacity={1} // Ensures touch is registered without fading effect
      />

      {/* Side Menu */}
      <View style={styles.sideMenu}>
        <TouchableOpacity onPress={toggleMenu} />
        <View style={styles.menuItems}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              toggleMenu();
              navigation.navigate('My Account');
            }}
          >
            <Text style={styles.menuText}>My Account 👤</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Share 🔗</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Help & Support ❓</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Settings ⚙️</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              toggleMenu();
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{ name: 'Login' }],
                })
              );
            }}
          >
            <Text style={styles.menuText}>Sign out 🚪</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject, // Covers the entire screen
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: gives a dimmed background effect
  },
  sideMenu: {
    height: '100%',
    width: 250,
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'green',
    padding: 20,
    flexDirection: 'column',
    zIndex: 102, // Ensure it appears above other content
  },
  closeButtonText: {
    color: 'white',
    fontSize: 24,
  },
  menuItems: {
    marginTop: 80,
  },
  menuItem: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
});

export default SideMenu;
