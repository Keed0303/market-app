import { Tabs } from "expo-router";
import { BuildingStorefrontIcon, HomeIcon } from "react-native-heroicons/outline";
import { BuildingStorefrontIcon as BuildingStorefrontIconSolid, HomeIcon as HomeIconSolid, MapPinIcon } from "react-native-heroicons/solid";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#4CAF50",
        tabBarInactiveTintColor: "#9E9E9E",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#e0e0e0",
          height: 70,
          paddingBottom: 10,
          paddingTop: 4,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        tabBarShowLabel: true,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            focused ? (
              <HomeIconSolid size={24} color={color} />
            ) : (
              <HomeIcon size={24} color={color} />
            )
          ),
        }}
      />
      <Tabs.Screen
        name="store"
        options={{
          headerShown: false,
          title: "Store",
          tabBarIcon: ({ color, focused }) => (
            focused ? (
              <BuildingStorefrontIconSolid size={24} color={color} />
            ) : (
              <BuildingStorefrontIcon size={24} color={color} />
            )
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          headerShown: false,
          title: "Map",
          tabBarIcon: ({ color, focused }) => (
            focused ? (
              <MapPinIcon size={24} color={color} />
            ) : (
              <MapPinIcon size={24} color={color} />
            )
          ),
        }}
      />
    </Tabs>
  );
}