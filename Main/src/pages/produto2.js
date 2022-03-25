import React from 'react';
import { Alert, Text, StyleSheet, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import processador1 from '../../assets/img/processador1.png'; 

import styles from '../styles/Produto2.js';

const App = () => {
  return (
    <View style={styles.container}>

      <View style={styles.spaceBack}>
        <Icon name="back" size={25} color='#FFF' style={styles.back} onPress={ () => { alert('voltando') }}/>
      </View>

        <Text style={styles.titulo}>
          Tech Force
        </Text>

        <Image style={styles.processadorImg} source = {require ('../../assets/img/processador1.png')}/>

        <Text style={styles.processadorTxt}>Processador AMD RYZEN 5 3600, 6-CORE</Text>
        <Text style={styles.processadorTxt}><Icon name="barcode" size={20}/>  1200,00 no boleto</Text>
        <Text style={styles.processadorTxt}><Icon name="creditcard" size={20}/>  1100,00 no cartão em até 10x de R$ 110,00</Text>
        <Text style={styles.processadorTxt}>1000,00 no pix</Text>

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

export default App;