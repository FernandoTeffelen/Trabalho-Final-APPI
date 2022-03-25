import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaLogin from './login';
import TelaBuscaProduto from './buscaProduto';
import TelaProduto1 from './produto1';
// import App as produto2Tela from 'produto2';
// import App as produto3Tela from 'produto3';
// import App as produto4Tela from 'produto4';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={TelaLogin} />
        <Stack.Screen name="buscaProduto" component={TelaBuscaProduto} />
        <Stack.Screen name="produto1" component={TelaProduto1} />
        {/* <Stack.Screen name="produto2" component={produto2Tela} />
        <Stack.Screen name="produto3" component={produto3Tela} />
        <Stack.Screen name="produto4" component={produto4Tela} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;