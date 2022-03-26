import React from 'react';
import { Alert, Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

import styles from '../styles/LoginStyles.js';

const TelaRecSenha = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <Text style={styles.techForce}>
        Tech Force
      </Text>

      <Icon name="lock" size={20} color='white' style={styles.lock}/>

      <View style={styles.conta}>
        <Text style={styles.contaTxt}>Recuperar minha senha</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
      />

      <TouchableOpacity
        style={styles.botaoDois}
        onPress={ () => { navigation.navigate('AlterarSenha') } }
        >
          <Text style={styles.botaoText}>Alterar senha</Text>
      </TouchableOpacity>

    </View>
  );
}

export default TelaRecSenha;