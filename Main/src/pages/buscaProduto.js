import React from 'react';
import { View, Appbar, Text, FAB, Surface, Image, Button, ScrollView, TextInput, StyleSheet, AppRegistry } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto'
import cadeira from '../../assets/img/cadeira.png';

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
        

        <View style={styles.images}>
        </View>

        <View style={styles.galeria}>
          <Image style={styles.cadeiraImg}
            source = {require ('../../assets/img/cadeira.png')}
          />
        </View>


        <Text style={{
          textAlign: 'center',
          fontSize: 25,
          marginBottom: 5
        }}> Your name </Text>


        <View style={{
          width: '100%',
          height: 80,
        }}>
          <Text style={{ marginLeft: 20 }}> 
            __________________________________________________
          </Text>

          <Icon name="messenger" size={30} color='#000' style={{
            marginTop: 30,
            marginLeft: 90,         
          }}/>
          <Icon name="commenting" size={30} color='#000' style={{
            bottom: 28,
            left: 250,
          }}/>

          <Text style={{ marginLeft: 20 }}> 
          __________________________________________________
          </Text>
        </View>


        <View style={styles.meio}>
          <Text style={{marginBottom: 10}}>
          Your base info 1
          </Text>
          <Text>
          Your base info 2
          </Text>
        </View>


        <View style={styles.footer}>
          <Text style={styles.textFooter}>
            ABOUT        PHOTOS        FRIENDS
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
  images: {
    backgroundColor: '#D5E1FF',
    width: '100%',
    height: 150,
  },
  galeria: {
    backgroundColor: '#BCD2EE',
    width: 150,
    height: 150,
    marginLeft: 105,
    bottom: 50,
    borderColor: '#fff',
    borderWidth: 2,
  },
  cadeiraImg: {
    width: 150,
    height: 150,
  },
  meio: {
    marginLeft: 50,
    marginBottom: 30,
    marginTop: 50,
    fontSize: 15,
  },
  footer: {
    backgroundColor: '#DCDCDC',
    width: '100%',
    height: 80,
  },
  textFooter: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 20,
  }
})