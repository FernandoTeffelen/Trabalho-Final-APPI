import React from 'react';
import { Alert, Text, StyleSheet, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import pc from '../../assets/img/pc.png'; 

const App = () => {
  return (
    <ScrollView>
    <View>
      <TextInput style={styles.bar} placeholder="pesquisar">
          <Icon name="search1" size={20} color='white' style={styles.search}/>
        </TextInput>
        <View style={styles.spaceBack}>
        <Icon name="back" size={25} color='#FFF' style={styles.back}/>
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
          <Text style={styles.botaoTxt}>Comprar</Text>
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
    backgroundColor: '#b0c4de',
    width: '100%',
    height: '100%',
  },
  bar: {
    width: 412,
    height: 40,
    backgroundColor: '#008080',
  },
  search: {
    color: 'white',
  },
  spaceBack: {
    backgroundColor: '#b0c4de',
    width: 420,
    height: 40,
  },
  back: {
    backgroundColor: '#008080',
    width: 30,
    height: 30,
    left: 370,
    borderRadius: 5,
    top: 10,
  },
  titulo: {
    fontSize: 35,
    fontFamily: 'inherit',
    bottom: 35,
    fontWeight: 'bold',
  },
  gabineteImg: {
    width: 350,
    height: 350,
    bottom: 35,
  },
  gabineteTxt: {
    height: 30,
    bottom: 35,
  },
  botaoTxt: {
    color: 'white',
    top: 5,
  },
  botao: {
    backgroundColor: '#008080',
    width: 80,
    height: 35,
    bottom: 35,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 35,
  },
})