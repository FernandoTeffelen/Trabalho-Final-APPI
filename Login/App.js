import React from 'react';
import { Alert, Text, StyleSheet, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
 
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

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#004c8b',
    width: '100%', 
    height: '100%',
  },
  facebook: {
    textAlign: 'center',
    fontSize: 40,
    color: '#FFF',
    fontFamily: 'inherit',
    marginBottom: 40,
    marginTop: 100
  },
  input: {
    borderColor: '#87CEEB',
    color: '#B5B5B5',
    padding: 10,
    alignItens: 'center',
    borderRadius: 5,
    margin: 10,
    width: 300,
    height: 35,
    backgroundColor: '#FFF',
    borderWidth: 1
  },
  botao: {
    width: 300,
    height: 50,
    backgroundColor: '#000892',
    marginTop: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 160,
  },
  botaoText: {
    fontSize: 16,
    fontWeigth: 'bold',
    color: '#fff',
  }
})