import React from 'react';
import { Alert, Text, StyleSheet, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import styles from '../styles/LoginStyle.js';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.facebook}>
        Tech Force
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
      />

      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Digite sua senha"
      />
      
      <TouchableOpacity
        style={styles.botao}
        onPress={ () => { this.props.navigation.navigate('Home') } }
        >
          <Text style={styles.botaoText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
export default App;
