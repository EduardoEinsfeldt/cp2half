import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import { MotiView, MotiText, MotiImage } from 'moti';

export default function Home() {
  return (
    <View style={styles.screen}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.container}>
        
        <MotiText
          from={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing', duration: 600 }}
          style={styles.textTitle1}
        >
          💀 POLUIÇÃO 💀
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
          source={require('../../public/assets/pollution1.png')}
          style={styles.imageTop}
        />

        <MotiText
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 400, duration: 600 }}
          style={styles.textTitle2}
        >
          Conscientização sobre a Poluição
        </MotiText>

        <MotiText
          from={{ opacity: 0, translateY: 15 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 600, duration: 600 }}
          style={styles.text}
        >
          A poluição afeta todos nós. Do ar que respiramos à água que bebemos, nossos hábitos impactam o planeta. 
          Vamos entender como pequenas ações podem causar grandes mudanças.
        </MotiText>

        <MotiText
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 800, duration: 600 }}
          style={styles.textTitle2}
        >
          Principais causas da poluição
        </MotiText>

        <MotiView
          from={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 1000, duration: 600 }}
          style={{ width: '100%' }}
        >
          <MotiText style={styles.textList}>• Emissão de gases industriais e automotivos</MotiText>
          <MotiText style={styles.textList}>• Descarte incorreto de lixo</MotiText>
          <MotiText style={styles.textList}>• Uso excessivo de plásticos</MotiText>
          <MotiText style={styles.textList}>• Contaminação dos corpos d'água</MotiText>
        </MotiView>

        <MotiText
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1200, duration: 600 }}
          style={styles.textTitle2}
        >
          Impactos da Poluição
        </MotiText>

        <MotiText
          from={{ opacity: 0, translateY: 15 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 1400, duration: 600 }}
          style={styles.text}
        >
          A saúde humana está em risco. Doenças respiratórias, intoxicações e danos ao sistema nervoso estão entre os efeitos.
          Além disso, ecossistemas inteiros são destruídos pela poluição desenfreada.
        </MotiText>

        <MotiText
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1600, duration: 600 }}
          style={styles.textTitle2}
        >
          O que você pode fazer?
        </MotiText>

        <MotiView
          from={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 1800, duration: 600 }}
          style={{ width: '100%' }}
        >
          <MotiText style={styles.textList}>• Reduzir o consumo de plástico</MotiText>
          <MotiText style={styles.textList}>• Separar e reciclar o lixo</MotiText>
          <MotiText style={styles.textList}>• Evitar o desperdício de água</MotiText>
          <MotiText style={styles.textList}>• Optar por meios de transporte sustentáveis</MotiText>
          <MotiText style={styles.textList}>• Divulgar informações e boas práticas</MotiText>
        </MotiView>

        <MotiImage
          from={{ scale: 1 }}
          animate={{ scale: 1.03 }}
          transition={{
            type: 'timing',
            duration: 5000,
            loop: true,
            repeatReverse: true,
            delay: 2000,
          }}
          source={require("../../public/assets/pollution3.png")}
          style={styles.imageBottom}
        />

        <MotiText
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2200, duration: 800 }}
          style={styles.finalMessage}
        >
          Juntos podemos transformar o mundo. Faça sua parte! 🌍
        </MotiText>
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
  imageTop: {
    width: 300,
    height: 180,
    resizeMode: 'cover',
    marginVertical: 15,
    borderRadius: 10,
  },
  imageBottom: {
    width: 300,
    height: 180,
    resizeMode: 'cover',
    marginVertical: 20,
    borderRadius: 10,
  },
  textTitle1: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#d32f2f',
    textAlign: 'center',
    marginTop: 20,
  },
  textTitle2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#81c784',
    marginTop: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#f0f0f0',
    textAlign: 'center',
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  textList: {
    fontSize: 16,
    color: '#c8e6c9',
    textAlign: 'left',
    width: '100%',
    paddingLeft: 10,
    marginBottom: 5,
  },
  finalMessage: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '600',
    marginTop: 25,
    textAlign: 'center',
  },
});
