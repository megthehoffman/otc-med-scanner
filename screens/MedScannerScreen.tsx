import { StyleSheet } from 'react-native';

import MedScanner from '../components/MedScanner';
import { Text, View } from '../components/Themed';

export default function MedScannerScreen() {
  return (
    <View style={styles.container}>
      <MedScanner path="/screens/MedScanner.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
