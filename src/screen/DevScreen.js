import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function Dev() {
  const devs = [
    {
      nome: 'Vicenzo Massao',
      funcao: 'Dev Full Stack',
      imagem: require('../../assets/vicenzo.jpg') 
    },
    {
      nome: 'Eduardo Einsfeldt',
      funcao: 'Dev Full Stack',
      imagem: require('../../assets/eduardo.jpg')
    },
  ];
  

  return (
    <>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Nossa Equipe</Text>
      <Text style={styles.description}>
        Conheça os desenvolvedores por trás deste projeto de conscientização ambiental.
      </Text>

      {devs.map((dev, index) => (
        <View key={index} style={styles.card}>
          <Image source={dev.imagem} style={styles.avatar} />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{dev.nome}</Text>
            <Text style={styles.role}>{dev.funcao}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#880808',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});