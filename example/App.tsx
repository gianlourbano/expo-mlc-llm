import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';

import * as ExpoMlcLlm from 'expo-mlc-llm';

export default function App() {

  useEffect(() => {
    const message = ExpoMlcLlm.loadModel("Phi-3-mini-4k-instruct-q4f16_1-MLC");
    console.log(message);
  }, [])

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
