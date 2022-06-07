import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import { UsersProvider } from './src/context'
import { AppRouter } from "./src/app-routes";

export default function App() {
  return (
    <NativeBaseProvider>
    <UsersProvider>
      <StatusBar/>
      <AppRouter/>
    </UsersProvider>
  </NativeBaseProvider>
  );
}

