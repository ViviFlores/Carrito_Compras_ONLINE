import React from 'react';
import { FlatList, StatusBar, Text, View } from 'react-native';
import { TitleComponent } from '../../components/TitleComponent';
import { BodyComponent } from '../../components/BodyComponent';
import { PRIMARY_COLOR } from '../../commons/constants';

//interface - arreglo productos
interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}

export const HomeScreen = () => {
    //arreglo de productos
    const products: Product[] = [
        { id: 1, name: 'Funda de arroz', price: 1.80, stock: 5, pathImage: 'https://www.pronacafoodservice.com/wp-content/uploads/2018/06/8275-arroz-blanco-vitaminas.jpg' },
        { id: 2, name: 'Funda de azucar', price: 1.30, stock: 6, pathImage: 'https://tienda.propieta.ec/wp-content/uploads/2021/03/azucar-blanca.jpg' },
        { id: 3, name: 'Funda de papas', price: 2.00, stock: 7, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/73829_M.jpg' },
        { id: 4, name: 'Funda de fideos', price: 0.80, stock: 9, pathImage: 'https://gruporiental.com/shop/wp-content/uploads/2018/11/Fideo-Sopita-Criolla-200g.jpg' },
        { id: 5, name: 'Funda de sal', price: 0.60, stock: 3, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/87990_M.jpg' },
    ];

    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TitleComponent title='Productos' />
            <BodyComponent>
                <FlatList
                    data={products}
                    renderItem={({ item }) => <Text>{item.name}</Text>} 
                    keyExtractor={item => item.id.toString()}/>
            </BodyComponent>
        </View>
    )
}
