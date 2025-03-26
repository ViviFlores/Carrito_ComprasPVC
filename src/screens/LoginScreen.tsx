import React, { useState } from 'react';
import { Alert, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { TitleComponent } from '../components/TitleComponent';
import { PRIMARY_COLOR } from '../theme/commons/constants';
import { BodyComponent } from '../components/BodyComponent';
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from '../navigator/StackNavigator';

//interface para objeto formulario
interface FormLogin {
    email: string;
    password: string;
}

//interface para definir las propiedades del componente desde StackNavigator
interface Props {
    users: User[];
}

export const LoginScreen = ({ users }: Props) => {
    //hook useState para manejar el estado del formulario
    const [formLogin, setFormLogin] = useState<FormLogin>({
        email: '',
        password: ''
    });

    //hook useState para manejar el estado de la contraseña
    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

    //hook useNavigation para navegar a otra pantalla
    const navigation = useNavigation();

    //función para cambiar el valor del formulario
    const handleChangeValue = (name: string, value: string): void => {
        setFormLogin({ ...formLogin, [name]: value }) //email = vflores@gmail.com, password = 123456
    }

    //función para verificar si el usuario existe
    const verifyUser = (): User | undefined => {
        const existUser = users.find(user => user.email === formLogin.email && user.password === formLogin.password);
        return existUser;
    }

    //función para iniciar sesión
    const handleLogin = (): void => {
        //Validar formulario campos llenos
        if (formLogin.email === '' || formLogin.password === '') {
            Alert.alert('Error', 'Todos los campos son obligatorios');
            return; //salir de la función
        }
        //Verificar si el usuario existe
        if (!verifyUser()) {
            Alert.alert('Error', 'Usuario y/o contraseña incorrectos');
            return;
        }
        //Navegar a la pantalla Home
        navigation.dispatch(CommonActions.navigate({ name: 'Home' }))
        //console.log(formLogin);
    }

    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TitleComponent title='Iniciar Sesión' />
            <BodyComponent>
                <Text style={styles.titlePrincipal}>
                    Bienvenido de nuevo
                </Text>
                <Text style={styles.titleDescription}>
                    Realiza tus compras de manera rápida y segura
                </Text>
                <View style={styles.containerForm}>
                    <InputComponent placeholder='Correo'
                        keyboardType='email-address'
                        handleChangeValue={handleChangeValue}
                        name='email' />
                    <InputComponent placeholder='Contraseña'
                        keyboardType='default'
                        handleChangeValue={handleChangeValue}
                        name='password'
                        isPassword={hiddenPassword} />
                    <Icon name={hiddenPassword ? 'visibility' : 'visibility-off'}
                        size={20}
                        color={PRIMARY_COLOR}
                        style={styles.icon}
                        onPress={() => setHiddenPassword(!hiddenPassword)} />
                </View>
                <ButtonComponent title='Iniciar' handleLogin={handleLogin} />
                <TouchableOpacity
                    onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Register' }))}>
                    <Text style={styles.textRedirect}>
                        No tienes una cuenta? Regístrate ahora
                    </Text>
                </TouchableOpacity>
            </BodyComponent>
        </View>
    )
}
