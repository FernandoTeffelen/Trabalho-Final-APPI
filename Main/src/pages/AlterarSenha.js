import React from 'react';
import { Alert, Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

import styles from '../styles/LoginStyles.js';

const TelaAltSenha = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <Text style={styles.techForce}>
        Tech Force
      </Text>

      <Icon name="lock" size={20} color='white' style={styles.lock}/>

      <View style={styles.conta}>
        <Text style={styles.contaTxt}>Digite uma nova senha</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Nova senha"
      />

      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Confirme sua nova senha"
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={ () => { navigation.navigate('Login') } }
        >
          <Text style={styles.botaoText}>Voltar para Login</Text>
      </TouchableOpacity>

    </View>
  );
}

export default TelaAltSenha;