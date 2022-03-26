import React from 'react';
import { Alert, Text, StyleSheet, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import pc from '../../assets/img/pc.png'; 

import styles from '../styles/Produto4.js';

const TelaProduto4 = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <View style={styles.spaceBack}>
      </View>

        <Text style={styles.titulo}>
          Tech Force
        </Text>

        <Image style={styles.gabineteImg} source = {require ('../../assets/img/pc.png')}/>

        <Text style={styles.gabineteTxt}>Gabinete gamer K-MEX black hawk CG-05QI - RGB ATX PRETO</Text>
        <Text style={styles.gabineteTxt}><Icon name="barcode" size={20}/>  310,00 no boleto</Text>
        <Text style={styles.gabineteTxt}><Icon name="creditcard" size={20}/>  400,00 no cartão em até 10x de R$ 40,00</Text>
        <Text style={styles.gabineteTxt}>280,00 no pix</Text>

        <TouchableOpacity style={styles.botao} onPress={ () => { alert('O item foi adicionado ao seu carrinho')}}>
          <Text style={styles.botaoTxt}><Icon name="shoppingcart" size={20}/> Comprar</Text>
        </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.textFooter}> 
          Copyright © 2022 - Todos os direitos reservados a TechForce. 
        </Text>
      </View>

    </View>
  );
}

export default TelaProduto4;