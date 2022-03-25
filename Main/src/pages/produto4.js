import React from 'react';
import { Alert, Text, StyleSheet, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import pc from '../../assets/img/pc.png'; 

const App = () => {
  return (
    <View style={styles.container}>

      <View style={styles.spaceBack}>
        <Icon name="back" size={25} color='#FFF' style={styles.back} onPress={ () => { alert('voltando') }}/>
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

export default App;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  bar: {
    width: 400,
    height: 40,
    backgroundColor: '#2f4f4f',
    top: 5,
    borderRadius: 100,
  },
  search: {
    color: '#ffffff',
  },
  spaceBack: {
    width: 420,
    height: 6,
  },
  back: {
    backgroundColor: '#2f4f4f',
    width: 30,
    height: 30,
    left: 11,
    borderRadius: 5,
    top: 12,
  },
  titulo: {
    fontSize: 35,
    fontFamily: 'inherit',
    fontWeight: 'bold',
    marginTop: 39,
  },
  gabineteImg: {
    width: 350,
    height: 330,
  },
  gabineteTxt: {
    height: 30,
    color: '#000000',
  },
  botaoTxt: {
    color: '#ffffff',
    top: 7,
  },
  botao: {
    backgroundColor: '#2f4f4f',
    width: 91,
    height: 40,
    borderRadius: 15,
    alignItems: 'center',
  },
  footer: {
    backgroundColor: '#2f4f4f',
    width: '100%',
    height: 60,
    justifyContent: 'center',
    top: 17,
  },
  textFooter: {
    fontSize: 12,
    textAlign: 'center',
    color: '#ffffff',
  }
})