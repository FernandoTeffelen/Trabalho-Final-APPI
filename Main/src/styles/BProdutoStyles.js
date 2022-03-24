import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    bar: {
      width: 400,
      height: 50,
      backgroundColor: '#008080',
      left: 7,
    },
    search: {
      color: '#fff',
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
      left: 6,
      borderRadius: 5,
      top: 10,
    },
    gallery: {
      padding: 7,
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row',
      flex: 1,
    },
    image: {
      padding: 7,
      justifyContent: 'space-around',
      alignItems: 'center',
      flex: 1,
    },
    imgGallery: {
      width: 155,
      height: 155,
      backgroundColor: 'rgba(0,0,0,0.2)',
      borderRadius: 30,
    },
    description: {
      color: '#000',
      fontSize: 13.5,
      marginTop: 5
    },
    price: {
      color: '#000',
      fontSize: 12.5,
      marginTop: 5,
      marginBottom: 5,
    },
    footer: {
      backgroundColor: '#008080',
      width: '100%',
      height: 60,
    },
    textFooter: {
      fontSize: 12,
      textAlign: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
  });

  export default styles ;