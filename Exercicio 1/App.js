import React, {useState} from 'react';
import { FlatList, Text, View, ImageBackground, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

export default function App(){
  const Herois = [
  {nome: 'Reinhardt', funcao: 'Tanque', foto:'https://d15f34w2p8l1cc.cloudfront.net/overwatch/551fbe070c16fdfcc17f7f1de63af22c53e7d2f1340fc2f3172441504527bc4e.png' },
  {nome: 'Widomaker', funcao: 'Dano', foto: 'https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/54/Icon-Widowmaker.png/revision/latest/scale-to-width-down/250?cb=20221005170629'},
  {nome: 'Jetpack cat', funcao: 'Suporte', foto: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/03a184cd0de27091e0099ac22635ad9615a8f6997881a5c25cc5f2444764f729.png'},
  ]

  
  const renderItem= ({item})=> (
    <View>
      <Card style={{margin: 20}}>
        <Card.Cover source= {{uri: item.foto}}/>
          <Card.Content>
          <Title>{item.nome}</Title>
          <Paragraph>{item.funcao}</Paragraph>
          </Card.Content>
      </Card>
      </View>
  );

  return (
    <ImageBackground source={{uri: 'https://i.pinimg.com/736x/d8/0a/d8/d80ad81026a4a165faa8f98e79235207.jpg'}} style= {styles.bg}>
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.titulo}>Herois</Text>
        <FlatList
          data={Herois}
          renderItem={renderItem}
          keyExtractor={(item) => item.nome}
          style={styles.lista}/>
      </ScrollView>
    </SafeAreaView> 
    </ImageBackground>   
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },

  lista: {
    marginTop: 40,
  },

  item: {
    padding: 9,
    fontSize: 16,
  }
});
