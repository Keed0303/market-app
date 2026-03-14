import Geolocation from 'ol/Geolocation';
import TileLayer from 'ol/layer/Tile';
import Map from 'ol/Map';
import { XYZ } from 'ol/source';
import View from 'ol/View';
import React, { useEffect } from 'react';
import { Button, View as RNView, StyleSheet } from 'react-native';


const index = () => {
  const map = new Map();

  const initializeMap = () => {
    setTimeout(() => {
      map.setTarget('map');
      map.setLayers([
        new TileLayer({
          source: new XYZ({
            url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
        })
      ]);
      map.setView(
        new View({
          center: [0, 0],
          zoom: 16
        })
      );
    }, 0);


  }

  const geolocation = new Geolocation({
    trackingOptions: {
      enableHighAccuracy: true,
    },
    projection: map.getView().getProjection(),
  });

  useEffect(() => {
      initializeMap();

    // Set tracking true
    geolocation.setTracking(true);
    
    // Update map center on change
    geolocation.on('change', function () {
      map.getView().setCenter(geolocation.getPosition());
    });
  

    return () => {
      map.setTarget(undefined);
    };
  }, []);

  return (
    <RNView style={styles.container}>
      <RNView id="map" style={{ width: '100%', height: '100%' }} ></RNView>

      <RNView style={{ position: 'absolute', zIndex: 2, top: 20, right: 20 }}>
        <Button 
          title="Get Current Location"
          onPress={() => {
          }} 
        />
      </RNView>
    </RNView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f3f7',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
    borderBottomColor: '#e0e0e0',
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
    backgroundColor: '#fff',
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
    fontSize: 14,
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