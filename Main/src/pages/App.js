import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaLogin from './login';
import TelaCadastro from './cadastro';
import TelaRecSenha from './recuperarSenha';
import TelaAltSenha from './alterarSenha';
import TelaBProduto from './buscaProduto';
import TelaProduto1 from './produto1';
import TelaProduto2 from './produto2';
import TelaProduto3 from './produto3';
import TelaProduto4 from './produto4';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={TelaLogin} />
        <Stack.Screen name="cadastro" component={TelaCadastro} />
        <Stack.Screen name="recuperarSenha" component={TelaRecSenha} />
        <Stack.Screen name="alterarSenha" component={TelaAltSenha} />
        <Stack.Screen name="buscaProduto" component={TelaBProduto} />
        <Stack.Screen name="produto1" component={TelaProduto1} />
        <Stack.Screen name="produto2" component={TelaProduto2} />
        <Stack.Screen name="produto3" component={TelaProduto3} />
        <Stack.Screen name="produto4" component={TelaProduto4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;