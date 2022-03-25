import React from 'react';
import { View, Appbar, Text, FAB, Surface, Image, Button, ScrollView, TextInput, StyleSheet, AppRegistry } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import cadeira from '../../assets/img/cadeira.png';
import processador1 from '../../assets/img/processador1.png';
import fone from '../../assets/img/fone.png';
import pc from '../../assets/img/pc.png';
import controle from '../../assets/img/controle.png';
import teclado from '../../assets/img/teclado.png';

import styles from '../styles/BProdutoStyles.js';

const TelaBuscaProduto = () => {
  return (
    <ScrollView style={{
      backgroundColor: '#b0c4de',
    }}>
      <View>
        <View style={{backgroundColor: '#008080'}}>
          <TextInput style={styles.bar} placeholder="pesquisar">
            <Icon name="search1" size={20} color='white' style={styles.search}/>
          </TextInput>
          <View style={styles.spaceBack}>
            <Icon name="back" size={25} color='#FFF' style={styles.back}/>
          </View>
        </View>

        <View style={styles.gallery}>
          <View style={styles.image}>
            <Image source={cadeira} style={styles.imgGallery}/>
            <Text style={styles.description}> 
              CADEIRA GAMER PRIZI - JX-1039
            </Text>
            <Text style={styles.price}>
              R$ 779,90
            </Text> 
            <Button
              title="Comprar"
              color='#008080'
              onPress={() => Alert.alert('Button with adjusted color pressed')}/>
          </View>

          <View style={styles.image}>
            <Image source={processador1} style={styles.imgGallery}/>
            <Text style={styles.description}>
              PROCESSADOR AMD RYZEN 5 3600 HEXA-CORE 3.6GHZ
            </Text>
            <Text style={styles.price}>
              R$ 1.541,06
            </Text> 
            <Button
              title="Comprar"
              color='#008080'
              onPress={() => Alert.alert('Button with adjusted color pressed')}/>
          </View>
        </View>


        <View style={styles.gallery}>
          <View style={styles.image}>
            <Image source={fone} style={styles.imgGallery}/>
            <Text style={styles.description}>
              FONE KINGSTON HYPERX CLOUD REVOLVER S 7.1
            </Text>
            <Text style={styles.price}>
              R$844,00
            </Text> 
            <Button
              title="Comprar"
              color='#008080'
              onPress={() => Alert.alert('Button with adjusted color pressed')}/>
          </View>

          <View style={styles.image}>
            <Image source={pc} style={styles.imgGallery}/>
            <Text style={styles.description}>
              GABINETE GAMER K-MEX BLACK HAWK CG-05QI - RGB ATX PRETO
            </Text>
            <Text style={styles.price}>
              R$309,00
            </Text> 
            <Button
              title="Comprar"
              color='#008080'
              onPress={() => Alert.alert('Button with adjusted color pressed')}/>
          </View>
        </View>
        
        <View style={styles.footer}>
          <Text style={styles.textFooter}> 
            Copyright © 2022 - Todos os direitos reservados a TechForce. 
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default TelaBuscaProduto;
