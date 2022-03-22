import React from 'react';
import { View, Appbar, Text, FAB, Surface, Image, Button, ScrollView, TextInput, StyleSheet, AppRegistry } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto'
import cadeira from '../../assets/img/cadeira.png';
import processador1 from '../../assets/img/processador1.png';
import fone from '../../assets/img/fone.png';
import pc from '../../assets/img/pc.png';

const App = () => {
  return (
    <ScrollView style={{
      backgroundColor: '#FFF',
    }}>
      <View>
        <View style={styles.topo}>
          <Icon name="arrow-left-l" size={25} color='#FFF' style={{
            marginLeft: 20,
            marginTop: 15,
          }}/>
          <Icon name="search" size={20} color='#FFF' style={{
            marginLeft: 65,
            top: -23          
          }}/>
        </View>



        <View style={styles.galeria}>
            <Image source={cadeira} style={styles.imgGaleria}/>

            <Image source={processador1} style={styles.imgGaleria}/>
        </View>
        <Text style={styles.description}> aaaaaa </Text>
        <Text style={styles.description}> aaaaaa </Text>

        <View style={styles.galeria}>
            <Image source={fone} style={styles.imgGaleria}/>

            <Image source={pc} style={styles.imgGaleria}/>
        </View>
        <Text style={styles.description}> aaaaaa </Text>
        <Text style={styles.description}> aaaaaa </Text>



        <View style={styles.footer}>
          <Text style={styles.textFooter}> 
            Copyright © 2022 - Todos os direitos reservados a TechForce. 
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default App;


const styles = StyleSheet.create({
  topo: {
    backgroundColor: '#4461A2',
    width: '100%',
    height: 55,
  },
  galeria: {
    padding: 7,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  imgGaleria: {
    width: 155,
    height: 155,
    backgroundColor: 'blue'
  },
  description: {
    color: '#000',
    fontSize: 17.5,
    paddingLeft: '5%',
  },
  footer: {
    backgroundColor: '#4461A2',
    width: '100%',
    height: 80,
  },
  textFooter: {
    fontSize: 12,
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 30,
  }
})