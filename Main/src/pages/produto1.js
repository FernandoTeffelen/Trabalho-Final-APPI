import React from 'react';
import { Alert, Text, StyleSheet, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import pc from '../../assets/img/pc.png'; 

const App = () => {
  return (
    <ScrollView>
    <View>
      <TouchableOpacity style={styles.bar}>
      <Text style={styles.searchTxt}>
           Pesquisar
          </Text>
          <Icon name="search1" size={20} color='#FFCE29' style={styles.search}/>
        </TouchableOpacity>
        <View style={styles.spaceBack}>
        <Icon name="arrow-left-l" size={25} color='#FFF' style={styles.back}/>
        </View>
      </View>
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Tech Force
      </Text>
      <Image style={styles.gabineteImg}
            source = {require ('../../assets/img/pc.png')}
          />
          <Text style={styles.gabineteTxt}>Gabinete AeroCool Aero c/ Fan RGB</Text>
          <Text style={styles.gabineteTxt}>430,00 no boleto</Text>
          <Text style={styles.gabineteTxt}>500,00 no cartão em até 10x de R$ 50,00</Text>
          <Text style={styles.gabineteTxt}>400,00 no pix</Text>
          <TouchableOpacity
        style={styles.botao}
        onPress={ () => { this.props.navigation.navigate('Home') } }
        >
          <Text style={styles.gabineteTxt}>Comprar</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#004c8b',
    width: '100%',
    height: '90%',
  },
  bar: {
    backgroundColor: '#191970',
    width: 400,
    height: 50,
  },
  searchTxt: {
    color: '#FFF',
    marginLeft: 10,
    marginTop: 5,
  },
  search: {
    textAlign: 'right',
    marginRight: 10,
    bottom: 20,
  },
  spaceBack: {
    backgroundColor: '#004c8b',
    width: 420,
    height: 40,
  },
  back: {
    backgroundColor: 'orange',
    width: 30,
    height: 30,
    left: 370,
    borderRadius: 5,
    top: 5,
  },
  titulo: {
    fontSize: 30,
    color: '#fff',
    fontFamily: 'inherit',
  },
  gabineteImg: {
    width: 350,
    height: 350,
  },
  gabineteTxt: {
    color: '#fff',
    height: 30,
  },
  botao: {
    backgroundColor: '#191970',
    width: 80,
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
  }
})