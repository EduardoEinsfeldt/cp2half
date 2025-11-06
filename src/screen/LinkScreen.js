import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MotiView, MotiText, MotiImage } from 'moti';

export default function LinkScreen() {
  const links = [
    { titulo: 'WWF Brasil', url: 'https://www.wwf.org.br/' },
    { titulo: 'IBAMA (Instituto Brasileiro do Meio Ambiente)', url: 'https://www.gov.br/ibama/' },
    { titulo: 'Ministério do Meio Ambiente', url: 'https://www.gov.br/mma/' },
    { titulo: 'Greenpeace Brasil', url: 'https://www.greenpeace.org/brasil/' },
    { titulo: 'Plataforma MapBiomas', url: 'https://mapbiomas.org/' },
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
        <MotiText
          from={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing', duration: 600 }}
          style={styles.title}
        >
          Links Úteis
        </MotiText>

        <MotiImage
          from={{ scale: 1 }}
          animate={{ scale: 1.03 }}
          transition={{
            type: 'timing',
            duration: 5000,
            loop: true,
            repeatReverse: true,
          }}
          source={require('../../public/assets/pollution2.png')}
          style={styles.imageTop}
        />

        <MotiText
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 400, duration: 600 }}
          style={styles.description}
        >
          Acesse fontes confiáveis para saber mais sobre a poluição e como ajudar o meio ambiente.
        </MotiText>

        {links.map((link, index) => (
          <MotiView
            key={`link-${index}`}
            from={{ opacity: 0, scale: 0.9, translateY: 20 }}
            animate={{ opacity: 1, scale: 1, translateY: 0 }}
            transition={{ delay: 600 + index * 150, duration: 400 }}
            style={{ width: '100%' }}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => abrirLink(link.url)}
            >
              <MotiView
                from={{ scale: 1 }}
                animate={{ scale: 1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'timing', duration: 150 }}
                style={styles.linkButton}
              >
                <MotiText style={styles.linkText}>{link.titulo}</MotiText>
              </MotiView>
            </TouchableOpacity>
          </MotiView>
        ))}

        <MotiImage
          from={{ scale: 1 }}
          animate={{ scale: 1.03 }}
          transition={{
            type: 'timing',
            duration: 5000,
            loop: true,
            repeatReverse: true,
            delay: 1000,
          }}
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
