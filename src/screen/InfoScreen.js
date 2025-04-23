import { StatusBar } from 'expo-status-bar';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function Info() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Poluição: A Ameaça Invisível</Text>

      <Text style={styles.sectionTitle}>🧪 O que é poluição?</Text>
      <Text style={styles.paragraph}>
        Poluição é a introdução de substâncias ou agentes poluentes no meio ambiente, causando efeitos adversos à saúde humana, à fauna e à flora. Ela pode ser do ar, da água, do solo ou sonora.
      </Text>

      <Text style={styles.sectionTitle}>📊 Fatos Nerds sobre Poluição</Text>
      <Text style={styles.paragraph}>
        - A cada ano, cerca de 7 milhões de pessoas morrem devido à poluição do ar.\n
        - O Oceano Pacífico abriga uma “ilha” de lixo plástico com mais de 1.6 milhões de km² (quase 3x o tamanho da França!).\n
        - O setor de transporte é responsável por aproximadamente 14% das emissões globais de gases de efeito estufa.\n
        - Algumas partículas de poluição são tão pequenas que podem atravessar barreiras biológicas e chegar ao cérebro.

      </Text>

      <Text style={styles.sectionTitle}>🛠️ O que você pode fazer?</Text>
      <Text style={styles.paragraph}>
        - Use transporte público, bicicleta ou caminhe sempre que possível 🚲\n
        - Reduza, Reutilize, Recicle ♻️\n
        - Economize energia elétrica 💡\n
        - Evite produtos com excesso de embalagem 📦\n
        - Apoie políticas públicas e projetos ambientais locais 🌱
      </Text>

      <Text style={styles.footer}>
        “Não herdamos a Terra de nossos antepassados, nós a tomamos emprestada de nossos filhos.” – Provérbio indígena
      </Text>
    </ScrollView>
    </View>
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