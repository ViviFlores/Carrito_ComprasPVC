import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

//interfaz para definir las propiedades del componente
interface Props {
    title: string;
    handleLogin: () => void;
}

export const ButtonComponent = ({ title, handleLogin }: Props) => {
    return (
        <TouchableOpacity style={styles.button}
            onPress={handleLogin}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}
