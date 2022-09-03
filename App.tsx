import React from 'react';
import { View } from 'react-native';
import Card from './src/components/card';

const App = () => {
  return (
    <View style={{ backgroundColor: '#fff ', flex: 1, flexDirection:"row", flexWrap: "wrap" }}>
      {[1, 2, 3, 4].map(() => (
        <Card />
      ))}
    </View>
  );
};

export default App;
