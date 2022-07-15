import { StyleSheet } from 'react-native';

import ProjectInfo from '../components/ProjectInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function ProjectInfoScreen({ navigation }: RootTabScreenProps<'ProjectInfo'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>OTC Medication Scanner</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ProjectInfo path="../ProjectInfo.tsx" />
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
