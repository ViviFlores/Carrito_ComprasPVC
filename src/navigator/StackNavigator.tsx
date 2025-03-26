import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { PRIMARY_COLOR } from '../theme/commons/constants';
import { RegisterScreen } from '../screens/RegisterScreen';
import { useState } from 'react';
import { HomeScreen } from '../screens/HomeScreen';

//interface para lista de objetos usuario
export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

const Stack = createStackNavigator();

export const StackNavigator = () => {
    //Definir el arreglo con la data base de usuarios
    const users: User[] = [
        { id: 1, name: 'Viviana Flores', email: 'vflores@gmail.com', password: '123456' },
        { id: 2, name: 'Carlos Aguas', email: 'caguas@gmail.com', password: '123456' }
    ]

    //hook useState para manipular los nuevos usuarios - arreglo gestiona lista usuarios
    const [usersManage, setUsersManage] = useState<User[]>(users);

    //función para agregar un nuevo usuario
    const addUser = (user: User): void => {
        //modificar el estado del arreglo de usersManage
        setUsersManage([...usersManage, user]);
    }

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: PRIMARY_COLOR
                }
            }}>
            <Stack.Screen name="Login" children={() => <LoginScreen users={usersManage} />} />
            <Stack.Screen name="Register" children={() => <RegisterScreen users={usersManage} addUser={addUser}/>} />
            <Stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>
    );
}