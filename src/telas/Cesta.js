import React from 'react';
import { Image, StyleSheet, Dimensions, Text, View, Button } from 'react-native';

import Texto from '../componentes/Texto';

import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

const width = Dimensions.get('screen').width;

export default function Cesta() {
   return <>
      <Image source={topo} style={estilos.topo} />
      <Texto style={estilos.titulo}>Detalhes da Cesta</Texto>

      <View style={estilos.cesta}>
         <Text style={estilos.nome}> Cesta de Verduras</Text>
         <View style={estilos.fazenda}>
            <Image source={logo} style={estilos.imagemFazenda} />
            <Texto style={estilos.nomeFazenda}> Jenny Jack Farm</Texto>
         </View>
         <Texto style={estilos.descricao}> Produtos selecionados de qualidade</Texto>
         <Texto style={estilos.preco}>R$ 40,00</Texto>
         <Button title="Comprar" style={estilos.botao}></Button>
      </View>
   </>
}

const estilos = StyleSheet.create({
   topo: {
      width: "100%",
      height: "30%",
   },
   titulo: {
      position: "absolute",
      textAlign: "center",
      fontSize: 16,
      lineHeight: 26,
      color: "white",
      fontWeight: "bold",
      padding: 16,
   },
   cesta: {
      paddingVertical: 8,
      paddingHorizontal: 16,
   },
   nome: {
      fontSize: 26,
      lineHeight: 42,
      color: "#464646",
      fontWeight: "bold",
   },
   fazenda: {
      flexDirection: "row",
      paddingVertical: 12,
      marginLeft: 12,
   },
   imagemFazenda: {
      width: 32,
      height: 32,
   },
   nomeFazenda: {
      fontSize: 16,
      //lineHeight: 26,
   },
   descricao: {
      color: "#A3A3A3",
      fontSize: 16,
   },
   preco: {
      color: "#2A9F85",
      fontWeight: "bold",
      fontSize: 26,
      lineHeight: 42,
      marginTop: 8,
   },
   botao: {
      marginTop: 16,
      backgroundColor: "#2A9F85",
      paddingVertical: 16,
      borderRadius: 6,
   }
});