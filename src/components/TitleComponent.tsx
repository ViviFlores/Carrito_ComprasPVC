import React from 'react';
import { Text, useWindowDimensions } from 'react-native';
import { styles } from '../theme/appTheme';

//interface para definir las propiedades del componente
interface Props {
    title: string;
}

export const TitleComponent = ({ title }: Props) => {
    //hook useWindowDimensions para obtener las dimensiones de la ventana
    const { height } = useWindowDimensions();
    return (
        <Text style={{
            ...styles.title,
            height: height * 0.12
        }}>
            {title}
        </Text>
    )
}
