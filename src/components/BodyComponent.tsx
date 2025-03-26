import React, { ReactNode } from 'react';
import { Text, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';

//interface para definir las propiedades del componente
interface Props {
    children: ReactNode;  //colocar elementos hijos
}

export const BodyComponent = ({ children }: Props) => {
    //hook useWindowDimensions para obtener las dimensiones de la ventana
    const { height } = useWindowDimensions();
    return (
        <View style={{
            ...styles.containerBody,
            height: height * 0.88
        }}>
            {children}
        </View>
    )
}
