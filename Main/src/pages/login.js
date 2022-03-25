import React from 'react';
import { Alert, Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

import styles from '../styles/LoginStyles.js';

const TelaLogin = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <Text style={styles.techForce}>
        Tech Force
      </Text>

      <Icon name="lock" size={20} color='white' style={styles.lock}/>

      <View style={styles.conta}>
        <Text style={styles.contaTxt}>Já tem uma conta?</Text>
        <Text style={styles.contaTxt}>Informe os seus dados para acessá-la.</Text>
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

      <TouchableOpacity
        style={styles.botao}
        onPress={ () => { navigation.navigate('buscaProduto') } }
        >
          <Text style={styles.botaoText}>Acessar conta</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoDois}
        onPress={ () => { this.props.navigation.navigate('Home') } }
        >
          <Text style={styles.botaoText}>Cadastre-se</Text>
      </TouchableOpacity>

      <Text style={styles.senhaTxt}>Esqueci minha senha</Text>

    </View>
  );
}

export default TelaLogin;