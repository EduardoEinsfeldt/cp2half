import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function LinkScreen() {
  const links = [
    {
      titulo: 'WWF Brasil',
      url: 'https://www.wwf.org.br/',
    },
    {
      titulo: 'IBAMA (Instituto Brasileiro do Meio Ambiente)',
      url: 'https://www.gov.br/ibama/',
    },
    {
      titulo: 'Ministério do Meio Ambiente',
      url: 'https://www.gov.br/mma/',
    },
    {
      titulo: 'Greenpeace Brasil',
      url: 'https://www.greenpeace.org/brasil/',
    },
    {
      titulo: 'Plataforma MapBiomas',
      url: 'https://mapbiomas.org/',
    },
  ];

  const abrirLink = async (url) => {
    const suportado = await Linking.canOpenURL(url);
    if (suportado) {
      Linking.openURL(url);
    } else {
      alert('Não foi possível abrir o link: ' + url);
    }
  };

  return (
    <View style={styles.screen}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Links Úteis</Text>

        <Image 
          source={require('../../public/assets/pollution2.png')}
          style={styles.imageTop}
        />

        <Text style={styles.description}>
          Acesse fontes confiáveis para saber mais sobre a poluição e como ajudar o meio ambiente.
        </Text>

        {links.map((link, index) => (
          <TouchableOpacity
            key={index}
            style={styles.linkButton}
            onPress={() => abrirLink(link.url)}
          >
            <Text style={styles.linkText}>{link.titulo}</Text>
          </TouchableOpacity>
        ))}

        <Image 
          source={require('../../public/assets/pollution4.png')}
          style={styles.imageBottom}
        />
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#d32f2f',
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    color: '#f0f0f0',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  linkButton: {
    backgroundColor: '#81c784',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    width: '100%',
  },
  linkText: {
    color: '#1e1e1e',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  imageTop: {
    width: 300,
    height: 180,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 20,
  },
  imageBottom: {
    width: 300,
    height: 180,
    resizeMode: 'cover',
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 20,
  },
});