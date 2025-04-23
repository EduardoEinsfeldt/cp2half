import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function Dev() {
  const devs = [
    {
      nome: 'Vicenzo Massao',
      funcao: 'Dev Full Stack',
      imagem: require('../../public/assets/vicenzo.png') 
    },
    {
      nome: 'Eduardo Einsfeldt',
      funcao: 'Dev Full Stack',
      imagem: require('../../public/assets/vlad_the_chad.png')
    },
  ];

  return (
    <View style={styles.screen}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Nossos Arautos</Text>
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
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#1e1e1e',
  },
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#d32f2f',
    marginBottom: 10,
    marginTop: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#f0f0f0',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#2c2c2c',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  textContainer: {
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    color: '#81c784',
    fontWeight: 'bold',
  },
  role: {
    fontSize: 16,
    color: '#c8e6c9',
    marginTop: 4,
  },
});