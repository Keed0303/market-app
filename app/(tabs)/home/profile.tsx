import { useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ArrowRightOnRectangleIcon, BellIcon, ChevronRightIcon, Cog6ToothIcon, HeartIcon, ShoppingBagIcon, UserIcon } from 'react-native-heroicons/outline';

const Profile = () => {
  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Profile Hero Section */}
        <View style={styles.profileHero}>
          <Image 
            source={require('../../../assets/images/profile.jpg')} 
            style={styles.profileImage} 
          />
          <Text style={styles.profileName}>Manuel Nagpala</Text>
          <Text style={styles.profileEmail}>manuel.nagpala@email.com</Text>
        </View>

        {/* Account Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          <View style={styles.menuCard}>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuItemLeft}>
                <UserIcon size={22} color="#333" />
                <Text style={styles.menuItemText}>Personal Information</Text>
              </View>
              <ChevronRightIcon size={20} color="#999" />
            </TouchableOpacity>

            <View style={styles.divider} />

            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuItemLeft}>
                <ShoppingBagIcon size={22} color="#333" />
                <Text style={styles.menuItemText}>My Orders</Text>
              </View>
              <ChevronRightIcon size={20} color="#999" />
            </TouchableOpacity>

            <View style={styles.divider} />

            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuItemLeft}>
                <HeartIcon size={22} color="#333" />
                <Text style={styles.menuItemText}>Favorites</Text>
              </View>
              <ChevronRightIcon size={20} color="#999" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Preferences Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          <View style={styles.menuCard}>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuItemLeft}>
                <BellIcon size={22} color="#333" />
                <Text style={styles.menuItemText}>Notifications</Text>
              </View>
              <ChevronRightIcon size={20} color="#999" />
            </TouchableOpacity>

            <View style={styles.divider} />

            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuItemLeft}>
                <Cog6ToothIcon size={22} color="#333" />
                <Text style={styles.menuItemText}>Settings</Text>
              </View>
              <ChevronRightIcon size={20} color="#999" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <ArrowRightOnRectangleIcon size={22} color="#0070BA" />
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Version 1.0.0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0070BA',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  profileHero: {
    backgroundColor: '#0070BA',
    alignItems: 'center',
    paddingBottom: 32,
    paddingTop: 8,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#fff',
    marginBottom: 16,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    color: '#E6F3FF',
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#666',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  menuCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '400',
  },
  divider: {
    height: 1,
    backgroundColor: '#f0f0f0',
    marginLeft: 52,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginHorizontal: 16,
    marginTop: 32,
    paddingVertical: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#0070BA',
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0070BA',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 32,
  },
  footerText: {
    fontSize: 13,
    color: '#999',
  },
});

export default Profile;
