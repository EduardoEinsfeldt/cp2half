import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';

export default function Dev() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
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