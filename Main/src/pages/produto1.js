import React from 'react';
import { Alert, Text, StyleSheet, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import mouse from '../../assets/img/mouse.jpg'; 

const App = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text>
        Tech Force
      </Text>
      <Image style={styles.mouseImg}
            source = {require ('../../assets/img/mouse.jpg')}
          />
    </View>
    </ScrollView>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#004c8b',
    width: '100%',
    height: '100%',
  },
  mouseImg: {
    width: 350,
    height: 350,
  }
})