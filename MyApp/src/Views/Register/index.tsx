import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

// import { Container } from './styles';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#DA5552',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  textLogo: {
    fontSize: 46,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  input: {
    backgroundColor: '#fff',
    textAlign: 'center',
    fontSize: 23,
    color: '#B3B6B7',
  },
  button: {
    alignItems: 'center',
    color: '#fff',
    backgroundColor: '#891C1A',
    padding: 10,
  },
  layout: {
    width: '100%',
    padding: 10,
    margin: 5,
    borderRadius: 6,
  },
  text: {
    color: '#fff',
  },
});

const Register: React.FC = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  return (
    <View style={style.container}>
      <SafeAreaView>
        <View style={{marginTop: 50, marginBottom: 140}}>
          <Text style={style.textLogo}>iHelp</Text>
        </View>
        <KeyboardAvoidingView behavior="padding" style={{width: 380}}>
          <TextInput
            secureTextEntry
            placeholder="Seu nome"
            style={[style.input, style.layout]}
            onChangeText={(value) => setPassword(value)}></TextInput>

          <TextInput
            placeholder="Digite uma senha"
            style={[style.input, style.layout]}
            onChangeText={(value) => setEmail(value)}></TextInput>
          <TextInput
            secureTextEntry
            placeholder="Confirme sua senha"
            style={[style.input, style.layout]}
            onChangeText={(value) => setPassword(value)}></TextInput>

          <TouchableOpacity
            style={[style.button, style.layout, {marginTop: 40}]}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={[style.text, {fontSize: 20, margin: 5}]}>
              Concluir
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default Register;
