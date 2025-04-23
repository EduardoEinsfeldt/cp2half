import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function FormScreen() {
  const [nome, setNome] = useState('');
  const [local, setLocal] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = () => {
    if (nome && local && mensagem) {
      Alert.alert('Obrigado!', 'Sua contribuição foi registrada.');
      setNome('');
      setLocal('');
      setMensagem('');
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={styles.screen}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.container}>

        <Text style={styles.title}>Contribua com a Nossa Causa</Text>
        <Image 
          source={require('../../public/assets/pollution5.png')}
          style={styles.imageTop}
        />        
        <Text style={styles.description}>
          Envie uma sugestão ou denúncia relacionada à poluição. Sua voz importa!
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Seu nome"
          placeholderTextColor="#aaa"
          value={nome}
          onChangeText={setNome}
        />

        <TextInput
          style={styles.input}
          placeholder="Localidade (bairro ou cidade)"
          placeholderTextColor="#aaa"
          value={local}
          onChangeText={setLocal}
        />

        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Descreva sua sugestão ou denúncia"
          placeholderTextColor="#aaa"
          value={mensagem}
          onChangeText={setMensagem}
          multiline
          numberOfLines={6}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
        <Image 
          source={require('../../public/assets/pollution6.png')}
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
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#f0f0f0',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  input: {
    backgroundColor: '#2c2c2c',
    color: '#fff',
    width: '100%',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#81c784',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#1e1e1e',
    fontWeight: 'bold',
    fontSize: 16,
  },
  imageTop: {
    width: 300,
    height: 180,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 10,
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
