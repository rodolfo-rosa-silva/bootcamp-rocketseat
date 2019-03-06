import React from 'react';

import {
  View, Text, TextInput, TouchableOpacity, StatusBar,
} from 'react-native';

import styles from './styles';

const Welcome = () => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" />
    <Text style={styles.title}>Bem vindo</Text>
    <Text style={styles.text}>
      Para continuar precisamos que voce informe seu usuario no GitHub.
    </Text>

    <View style={styles.form}>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Digite seu usuario"
        underlineColorAndroid="transparent"
      />
    </View>

    <TouchableOpacity style={styles.button} onPress={() => {}}>
      <Text style={styles.buttonText}>Prosseguir</Text>
    </TouchableOpacity>
  </View>
);

export default Welcome;