import React from 'react';
import { KeyboardAvoidingView, View, Platform, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Title, BackToSignIn, BackToSignInText } from './styles';

const SignUp: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <View>
              <Title>Crie sua conta</Title>
            </View>
            <Input name="name" icon="user" placeholder="Nome" />

            <Input name="email" icon="mail" placeholder="E-mail" />

            <Input name="password" icon="lock" placeholder="Senha" />

            <Button onPress={() => {}}>Criar conta</Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackToSignIn onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="#000d1a" />
        <BackToSignInText>Criar uma conta</BackToSignInText>
      </BackToSignIn>
    </>
  );
};

export default SignUp;
