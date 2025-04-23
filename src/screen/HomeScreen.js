import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';

export default function Home() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <h1>💀 POLUIÇÃO 💀</h1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#880808',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});