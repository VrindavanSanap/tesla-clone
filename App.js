import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import CarItem from './components/CarItem';
import StyledButton  from './components/StyledButton';
export default function App() {
  return (
    <View style={styles.container}>
  
     <CarItem/> 

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})