import { StyleSheet, Text, View } from 'react-native';

import * as ExpoMlcLlm from 'expo-mlc-llm';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoMlcLlm.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
