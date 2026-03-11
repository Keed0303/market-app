import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView, FlatList } from 'react-native';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { useRouter } from 'expo-router';

const index = () => {
  const router = useRouter();

  // Mock data for popular products (swipeable)
  const popularProducts = [
    { id: '1', name: 'Fresh Tomatoes', price: '$2.99', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400' },
    { id: '2', name: 'Organic Apples', price: '$3.49', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400' },
    { id: '3', name: 'Bananas', price: '$1.99', image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400' },
    { id: '4', name: 'Carrots', price: '$2.49', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400' },
  ];

  // Mock data for suggestions (non-swipeable)
  const suggestionProducts = [
    { id: '5', name: 'Milk', price: '$4.99', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400' },
    { id: '6', name: 'Bread', price: '$2.99', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400' },
    { id: '7', name: 'Eggs', price: '$5.49', image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400' },
    { id: '8', name: 'Cheese', price: '$6.99', image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400' },
  ];

  const renderProductCard = ({ item }: any) => (
    <TouchableOpacity style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  const renderSuggestionCard = (item: any) => (
    <TouchableOpacity key={item.id} style={styles.suggestionCard}>
      <Image source={{ uri: item.image }} style={styles.suggestionImage} />
      <View style={styles.suggestionInfo}>
        <Text style={styles.suggestionName}>{item.name}</Text>
        <Text style={styles.suggestionPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerSubText}>Welcome back,</Text>
          <Text style={styles.headerText}>Manuel, Nagpala</Text>
        </View>
        <View style={styles.headerRight}>
          {/* Profile Image */}
          <TouchableOpacity style={styles.iconButton} onPress={() => router.push('/(tabs)/home/profile')}>
            <Image source={require('../../../assets/images/profile.jpg')} style={{ width: 40, height: 40, borderRadius: 20 }} /> 
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <MagnifyingGlassIcon size={20} color="#999" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search products..."
          placeholderTextColor="#999"
        />
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Popular Products Section */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Popular</Text>
          <FlatList
            data={popularProducts}
            renderItem={renderProductCard}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalList}
          />
        </View>

        {/* Suggestion Products Section */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Suggestions</Text>
          <View style={styles.suggestionList}>
            {suggestionProducts.map(renderSuggestionCard)}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#fff',
  },
  headerLeft: {
    flex: 1,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  headerSubText: {
    fontSize: 14,
    color: '#666',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconButton: {
    padding: 4,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    margin: 16,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  content: {
    flex: 1,
  },
  section: {
    marginBottom: 24,
  },
  sectionLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  horizontalList: {
    paddingHorizontal: 16,
    gap: 12,
  },
  productCard: {
    width: 150,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginRight: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#e0e0e0',
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  suggestionList: {
    paddingHorizontal: 16,
    gap: 12,
  },
  suggestionCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 12,
  },
  suggestionImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: '#e0e0e0',
  },
  suggestionInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  suggestionName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  suggestionPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
});

export default index;