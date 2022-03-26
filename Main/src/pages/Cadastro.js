import React from 'react';
import { Alert, Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

import styles from '../styles/LoginStyles.js';

const TelaCadastro = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <Text style={styles.techForce}>
        Tech Force
      </Text>

      <Icon name="adduser" size={20} color='white' style={styles.lock}/>

      <View style={styles.conta}>
        <Text style={styles.contaTxt}>Informe os dados abaixo para criar sua conta</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
      />

      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Senha"
      />

        <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Nome"
      />

        <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Sobrenome"
      />

      <TouchableOpacity
        style={styles.botaoDois}
        onPress={ () => { navigation.navigate('Login') } }
        >
          <Text style={styles.botaoText}>Cadastre-se</Text>
      </TouchableOpacity>

    </View>
  );
}

export default TelaCadastro;