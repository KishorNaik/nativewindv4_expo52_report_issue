import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { verifyInstallation } from 'nativewind';

export default function HomeScreen() {
  verifyInstallation();
  return (
    <SafeAreaView>
      
        <Text className='text-2xl text-red-700'>Hello, World!</Text>
     
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


