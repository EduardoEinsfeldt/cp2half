import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';

export default function Home() {
  return (
    <View style={styles.screen}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.textTitle1}>💀 POLUIÇÃO 💀</Text>

        <Image 
          source={require('../../public/assets/pollution1.png')}
          style={styles.imageTop}
        />

        <Text style={styles.textTitle2}>Conscientização sobre a Poluição</Text>
        <Text style={styles.text}>
          A poluição afeta todos nós. Do ar que respiramos à água que bebemos, nossos hábitos impactam o planeta. 
          Vamos entender como pequenas ações podem causar grandes mudanças.
        </Text>

        <Text style={styles.textTitle2}>Principais causas da poluição</Text>
        <Text style={styles.textList}>• Emissão de gases industriais e automotivos</Text>
        <Text style={styles.textList}>• Descarte incorreto de lixo</Text>
        <Text style={styles.textList}>• Uso excessivo de plásticos</Text>
        <Text style={styles.textList}>• Contaminação dos corpos d'água</Text>

        <Text style={styles.textTitle2}>Impactos da Poluição</Text>
        <Text style={styles.text}>
          A saúde humana está em risco. Doenças respiratórias, intoxicações e danos ao sistema nervoso estão entre os efeitos.
          Além disso, ecossistemas inteiros são destruídos pela poluição desenfreada.
        </Text>

        <Text style={styles.textTitle2}>O que você pode fazer?</Text>
        <Text style={styles.textList}>• Reduzir o consumo de plástico</Text>
        <Text style={styles.textList}>• Separar e reciclar o lixo</Text>
        <Text style={styles.textList}>• Evitar o desperdício de água</Text>
        <Text style={styles.textList}>• Optar por meios de transporte sustentáveis</Text>
        <Text style={styles.textList}>• Divulgar informações e boas práticas</Text>

        <Text style={styles.finalMessage}>Juntos podemos transformar o mundo. Faça sua parte! 🌍</Text>
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
  }
});