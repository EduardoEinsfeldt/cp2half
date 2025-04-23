import { StatusBar } from 'expo-status-bar';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function Info() {
  return (
    <View style={styles.screen}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Poluição: A Ameaça Invisível</Text>

        <Text style={styles.sectionTitle}>🧪 O que é poluição?</Text>
        <Text style={styles.paragraph}>
          Poluição é a introdução de substâncias ou agentes poluentes no meio ambiente, causando efeitos adversos à saúde humana, à fauna e à flora. Ela pode ser do ar, da água, do solo ou sonora.
        </Text>

        <Text style={styles.sectionTitle}>📊 Fatos Nerds sobre Poluição</Text>
        <Text style={styles.paragraph}>• A cada ano, cerca de 7 milhões de pessoas morrem devido à poluição do ar.</Text>
        <Text style={styles.paragraph}>• O Oceano Pacífico abriga uma “ilha” de lixo plástico com mais de 1.6 milhões de km² (quase 3x o tamanho da França!).</Text>
        <Text style={styles.paragraph}>• O setor de transporte é responsável por aproximadamente 14% das emissões globais de gases de efeito estufa.</Text>
        <Text style={styles.paragraph}>• Algumas partículas de poluição são tão pequenas que podem atravessar barreiras biológicas e chegar ao cérebro.</Text>

        <Text style={styles.sectionTitle}>🛠️ O que você pode fazer?</Text>
        <Text style={styles.paragraph}>• Use transporte público, bicicleta ou caminhe sempre que possível 🚲</Text>
        <Text style={styles.paragraph}>• Reduza, Reutilize, Recicle ♻️</Text>
        <Text style={styles.paragraph}>• Economize energia elétrica 💡</Text>
        <Text style={styles.paragraph}>• Evite produtos com excesso de embalagem 📦</Text>
        <Text style={styles.paragraph}>• Apoie políticas públicas e projetos ambientais locais 🌱</Text>

        <Text style={styles.footer}>
          “Não herdamos a Terra de nossos antepassados, nós a tomamos emprestada de nossos filhos.” – Provérbio indígena
        </Text>
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
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#81c784',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    color: '#f0f0f0',
    textAlign: 'left',
    marginBottom: 10,
    width: '100%',
  },
  footer: {
    fontSize: 16,
    color: '#c8e6c9',
    textAlign: 'center',
    marginTop: 30,
    fontStyle: 'italic',
    paddingHorizontal: 10,
  },
});
