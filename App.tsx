import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Provider } from 'react-native-paper';
import Home from './screens/Home';

export default function App() {
  return (
    <Provider>
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="rgba(0,0,0,0)" barStyle='light-content' />
        <Home />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
