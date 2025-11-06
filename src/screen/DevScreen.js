import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { MotiView, MotiText, MotiImage } from 'moti';

export default function Dev() {
  const [refreshKey, setRefreshKey] = useState(0);

  useFocusEffect(
    React.useCallback(() => {
      setRefreshKey(prev => prev + 1);
    }, [])
  );

  const devs = [
    {
      nome: 'Vicenzo Massao',
      funcao: 'Dev Full Stack',
      imagem: require('../../public/assets/vicenzo.png'),
    },
    {
      nome: 'Eduardo Einsfeldt',
      funcao: 'Dev Full Stack',
      imagem: require('../../public/assets/vlad_the_chad.png'),
    },
  ];

  return (
    <View style={styles.screen}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.container}>
        <MotiText
          key={`title-${refreshKey}`}
          from={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing', duration: 800 }}
          style={styles.title}
        >
          Nossos Arautos
        </MotiText>

        <MotiText
          key={`desc-${refreshKey}`}
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'timing', duration: 1000, delay: 400 }}
          style={styles.description}
        >
          Conheça os desenvolvedores por trás deste projeto de conscientização ambiental.
        </MotiText>

        {devs.map((dev, index) => (
          <MotiView
            key={`card-${refreshKey}-${index}`}
            from={{ opacity: 0, translateY: 30 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              type: 'spring',
              delay: 600 + index * 200,
            }}
            style={styles.card}
          >
            <MotiImage
              key={`img-${refreshKey}-${index}`}
              from={{ scale: 1 }}
              animate={{ scale: 1.05 }}
              transition={{
                type: 'timing',
                duration: 2000,
                loop: true,
                repeatReverse: true,
              }}
              style={styles.avatar}
              source={dev.imagem}
            />

            <View style={styles.textContainer}>
              <MotiText
                key={`name-${refreshKey}-${index}`}
                from={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 900 + index * 200 }}
                style={styles.name}
              >
                {dev.nome}
              </MotiText>

              <MotiText
                key={`role-${refreshKey}-${index}`}
                from={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1100 + index * 200 }}
                style={styles.role}
              >
                {dev.funcao}
              </MotiText>
            </View>
          </MotiView>
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
