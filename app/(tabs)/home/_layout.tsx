import { Stack } from "expo-router";

export default function StoreLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen 
      name="profile" 
      options={{ 
        headerShown: true,
        headerStyle: { 
          backgroundColor: '#0070BA',
        }, 
        headerTintColor: '#fff',
        title: 'Profile',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerShadowVisible: false,
        headerBackTitle: 'Back',
      }} 
      />
    </Stack>
  )
}