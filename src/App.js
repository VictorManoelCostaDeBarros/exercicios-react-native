import { registerRootComponent } from 'expo';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Mega from './components/mega/Mega'
// import FlexboxV4 from './components/layout/FlexboxV4'
// import FlexboxV3 from './components/layout/FlexboxV3'
// import FlexboxV2 from './components/layout/FlexboxV2'
// import FlexboxV1 from './components/layout/FlexboxV1'
// import DigiteSeuNome from './components/DigiteSeuNome'
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
// import ListaProdutos from './components/produtos/ListaProdutos'
// import UsuarioLogado from './components/UsuarioLogado'
// import Familia from './components/relacao/Familia'
// import Membro from './components/relacao/Membro'
// import ParImpar from './components/ParImpar'
// import Diferenciar from './components/Diferenciar'
// import ContadorV2 from './components/contador/ContadorV2'
// import Pai from './components/indireta/Pai'
// import Pai from './components/direta/Pai'
// import Contador from './components/Contador'
// import Botao from './components/Botao'
// import Titulo from './components/Titulo'
// import MinMax from './components/MinMax'
// import Aleatorio from './components/Aleatorio'
// import CompPadrao, { Comp1, Comp2 } from './components/Multi'
// import First from './components/First'

export default function App() {
  return (
    <View style={styles.App}>
      <Mega quantNumeros={12} />
      {/* <FlexboxV4 /> */}
      {/* <FlexboxV3 /> */}
      {/* <FlexboxV2 /> */}
      {/* <FlexboxV1 /> */}
      {/* <DigiteSeuNome /> */}
      {/* <ListaProdutosV2 /> */}
      {/* <ListaProdutos /> */}
      {/* <UsuarioLogado usuario={{ nome: 'Victor', email: 'victor@hotm.com' }} />
      <UsuarioLogado usuario={{ nome: 'Victor' }} />
      <UsuarioLogado usuario={{ email: 'Victor@.com' }} />
      <UsuarioLogado usuario={{ nome: 'Victor', email: 'victor@hotm.com' }} /> */}
      {/* <Familia>
        <Membro nome="Bia" sobrenome="Oliveira" />
        <Membro nome="Carlos" sobrenome="Arruada" />
      </Familia>
      <Familia>
        <Membro nome="Julia" sobrenome="Silva" />
        <Membro nome="Victor" sobrenome="Manoel" />
      </Familia> */}
      {/* <ParImpar num={131} /> */}
      {/* <Diferenciar /> */}
      {/* <ContadorV2 /> */}
      {/* <Pai /> */}
      {/* <Pai /> */}
      {/* <Contador /> */}
      {/* <Botao /> */}
      {/* <Titulo principal="Cadastro Produto" segundario="Tela de cadastro do produto"/> */}
      {/* <Aleatorio min={3} max={50} /> */}
      {/* <MinMax min={3} max={20}/>
      <MinMax min={1} max={97}/> */}
      {/* <CompPadrao />
      <Comp1 />
      <Comp2 />
      <First /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  App: {
    flex: 1,
    // backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});

registerRootComponent(App);