import React from 'react';
import { StyleSheet } from 'react-native';

export default function Login ({ style }) {
    
}

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