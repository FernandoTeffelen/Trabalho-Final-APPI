import React from 'react';
import { Alert, Text, StyleSheet, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import cadeira from '../../assets/img/cadeira.png'; 

import styles from '../styles/Produto1.js';

const TelaProduto1 = () => {
  return (
    <View style={styles.container}>

      <View style={styles.spaceBack}>
      </View>

        <Text style={styles.titulo}>
          Tech Force
        </Text>

        <Image style={styles.cadeiraImg} source = {require ('../../assets/img/cadeira.png')}/>

        <Text style={styles.cadeiraTxt}>Cadeira gamer gaming racing, preto/azul, com almofadas</Text>
        <Text style={styles.cadeiraTxt}><Icon name="barcode" size={20}/>  1200,00 no boleto</Text>
        <Text style={styles.cadeiraTxt}><Icon name="creditcard" size={20}/>  1300,00 no cartão em até 10x de R$ 130,00</Text>
        <Text style={styles.cadeiraTxt}>1100,00 no pix</Text>

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

export default TelaProduto1;