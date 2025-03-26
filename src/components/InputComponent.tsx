import React from 'react';
import { KeyboardTypeOptions, TextInput } from 'react-native';
import { styles } from '../theme/appTheme';

//interface para definir las propiedades del componente
interface Props {
    placeholder: string;
    keyboardType: KeyboardTypeOptions;
    handleChangeValue: (name: string, value: string) => void;
    name: string;
    isPassword?: boolean;  //propiedad opcional
}

export const InputComponent = ({ placeholder, keyboardType, handleChangeValue, name, isPassword = false }: Props) => {
    return (
        <TextInput
            placeholder={placeholder}
            keyboardType={keyboardType}
            onChangeText={(value) => handleChangeValue(name, value)}
            secureTextEntry={isPassword}
            style={styles.input}
        />
    )
}
