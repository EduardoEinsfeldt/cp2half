import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, StyleSheet } from 'react-native';
import { MotiText, MotiView } from 'moti';

export default function Info() {
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
          Poluição: A Ameaça Invisível
        </MotiText>

        <MotiText
          from={{ opacity: 0, translateX: -30 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ delay: 300, duration: 500 }}
          style={styles.sectionTitle}
        >
          🧪 O que é poluição?
        </MotiText>

        <MotiText
          from={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 500, duration: 500 }}
          style={styles.paragraph}
        >
          Poluição é a introdução de substâncias ou agentes poluentes no meio ambiente, causando efeitos adversos à saúde humana, à fauna e à flora. Ela pode ser do ar, da água, do solo ou sonora.
        </MotiText>

        <MotiText
          from={{ opacity: 0, translateX: 30 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ delay: 700, duration: 500 }}
          style={styles.sectionTitle}
        >
          📊 Fatos Nerds sobre Poluição
        </MotiText>

        {[
          '• A cada ano, cerca de 7 milhões de pessoas morrem devido à poluição do ar.',
          '• O Oceano Pacífico abriga uma “ilha” de lixo plástico com mais de 1.6 milhões de km² (quase 3x o tamanho da França!).',
          '• O setor de transporte é responsável por aproximadamente 14% das emissões globais de gases de efeito estufa.',
          '• Algumas partículas de poluição são tão pequenas que podem atravessar barreiras biológicas e chegar ao cérebro.',
        ].map((item, index) => (
          <MotiText
            key={`fact-${index}`}
            from={{ opacity: 0, translateY: 15 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 900 + index * 150, duration: 400 }}
            style={styles.paragraph}
          >
            {item}
          </MotiText>
        ))}

        <MotiText
          from={{ opacity: 0, translateX: -30 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ delay: 1600, duration: 500 }}
          style={styles.sectionTitle}
        >
          🛠️ O que você pode fazer?
        </MotiText>

        {[
          '• Use transporte público, bicicleta ou caminhe sempre que possível 🚲',
          '• Reduza, Reutilize, Recicle ♻️',
          '• Economize energia elétrica 💡',
          '• Evite produtos com excesso de embalagem 📦',
          '• Apoie políticas públicas e projetos ambientais locais 🌱',
        ].map((item, index) => (
          <MotiText
            key={`action-${index}`}
            from={{ opacity: 0, translateY: 15 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 1800 + index * 150, duration: 400 }}
            style={styles.paragraph}
          >
            {item}
          </MotiText>
        ))}

        <MotiView
          from={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2800, duration: 700 }}
        >
          <MotiText style={styles.footer}>
            “Não herdamos a Terra de nossos antepassados, nós a tomamos emprestada de nossos filhos.” – Provérbio indígena
          </MotiText>
        </MotiView>
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
