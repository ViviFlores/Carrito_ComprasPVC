import React, { useState } from 'react';
import { Alert, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { PRIMARY_COLOR } from '../theme/commons/constants';
import { TitleComponent } from '../components/TitleComponent';
import { BodyComponent } from '../components/BodyComponent';
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from '../navigator/StackNavigator';

//interface para objeto formulario
interface FormRegister {
  name: string;
  email: string;
  password: string;
}

//interface para definir las propiedades del componente desde StackNavigator
interface Props {
  users: User[];
  addUser: (user: User) => void;
}

export const RegisterScreen = ({ users, addUser }: Props) => {
  //hook useState para manejar el estado del formulario
  const [formRegister, setFormRegister] = useState<FormRegister>({
    name: '',
    email: '',
    password: ''
  });

  //hook useNavigation para navegar a otra pantalla
  const navigation = useNavigation();

  //función para cambiar el valor del formulario
  const handleChangeValue = (name: string, value: string): void => {
    setFormRegister({ ...formRegister, [name]: value })
  }

  //función para verificar si el usuario existe
  const verifyUser = (): User | undefined => {
    const existUser = users.find(user => user.email === formRegister.email);
    return existUser;
  }

  //función para registrar usuario
  const handleRegister = () => {
    if (formRegister.name === '' || formRegister.email === '' || formRegister.password === '') {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return; //salir de la función
    }
    //Verificar si el usuario existe
    if (verifyUser()) {
      Alert.alert('Error', 'El usuario ya existe');
      return;
    }
    //Agregar un nuevo usuario
    const newUser: User = {
      id: users.length + 1,
      name: formRegister.name,
      email: formRegister.email,
      password: formRegister.password
    }
    addUser(newUser);
    Alert.alert('Registro', 'Usuario registrado correctamente');
    navigation.goBack(); //regresar a la pantalla anterior
    //console.log(formRegister);
  }

  return (
    <View>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <TitleComponent title='Regístrate' />
      <BodyComponent>
        <Text style={styles.titlePrincipal}>
          Bienvenido de nuevo
        </Text>
        <Text style={styles.titleDescription}>
          Realiza tus compras de manera rápida y segura
        </Text>
        <View style={styles.containerForm}>
          <InputComponent placeholder='Nombre'
            keyboardType='default'
            handleChangeValue={handleChangeValue}
            name='name' />
          <InputComponent placeholder='Correo'
            keyboardType='email-address'
            handleChangeValue={handleChangeValue}
            name='email' />
          <InputComponent placeholder='Contraseña'
            keyboardType='default'
            handleChangeValue={handleChangeValue}
            name='password' />
        </View>
        <ButtonComponent title='Registrar' handleLogin={handleRegister} />
        <TouchableOpacity
          onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Login' }))}>
          <Text style={styles.textRedirect}>
            Ya tienes una cuenta? Iniciar sesión ahora
          </Text>
        </TouchableOpacity>
      </BodyComponent>
    </View>
  )
}
