import React from 'react';
import { FlatList, StatusBar, Text, View } from 'react-native';
import { PRIMARY_COLOR } from '../../theme/commons/constants';
import { TitleComponent } from '../../components/TitleComponent';
import { BodyComponent } from '../../components/BodyComponent';
import { CardProduct } from './components/CardProduct';

//interface para objeto Productos
export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}

export const HomeScreen = () => {
    //Arreglo de productos
    const products: Product[] = [
        { id: 1, name: 'Funda de arroz', price: 2.50, stock: 10, pathImage: 'https://www.pronacafoodservice.com/wp-content/uploads/2018/06/8275-arroz-blanco-vitaminas.jpg' },
        { id: 2, name: 'Funda de azucar', price: 1.30, stock: 0, pathImage: 'https://sihai.ec/wp-content/uploads/2020/09/A006.png' },
        { id: 3, name: 'Funda de papas', price: 1.45, stock: 20, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/65702_G.jpg' },
        { id: 4, name: 'Funda de fideos', price: 1.00, stock: 14, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/77563_G.jpg' },
        { id: 5, name: 'Funda de sal', price: 0.50, stock: 30, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/87990_M.jpg' },
        { id: 6, name: 'Funda de papas', price: 1.45, stock: 20, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/65702_G.jpg' },
        { id: 7, name: 'Funda de fideos', price: 1.00, stock: 14, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/77563_G.jpg' },
        { id: 8, name: 'Funda de sal', price: 0.50, stock: 30, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/87990_M.jpg' },
    ];

    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TitleComponent title='Productos' />
            <BodyComponent>
                <FlatList
                    data={products}
                    renderItem={({ item }) => <CardProduct product={item} />}
                    keyExtractor={item => item.id.toString()} />
            </BodyComponent>
        </View>
    )
}
