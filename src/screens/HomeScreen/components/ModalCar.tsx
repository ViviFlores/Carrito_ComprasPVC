import React from 'react';
import { FlatList, Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { Car } from '../HomeScreen';
import { styles } from '../../../theme/appTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../../../theme/commons/constants';

//interface para propiedades del componente
interface Props {
    car: Car[];
    isVisible: boolean;
    setShowModal: () => void; //cerrar modal
    setCar: (car: Car[]) => void; //actualizar carrito
}

export const ModalCar = ({ car, isVisible, setShowModal, setCar }: Props) => {
    //hook useWindowDimensions para obtener las dimensiones de la ventana
    const { width } = useWindowDimensions();

    //función para calcular el total del carrito
    const totalPay = () => {
        //acumulador
        let total: number = 0;
        car.forEach(item => {
            //total = total + item.total;
            total += item.total;
        });
        return total;
    }

    //función para realizar compra
    const handleBuy = () => {
        //cerrar modal
        setShowModal();
        //reiniciar carrito
        setCar([]);
    }

    return (
        <Modal visible={isVisible} animationType='fade' transparent={true}>
            <View style={styles.containerModal}>
                <View style={{
                    ...styles.contentModal,
                    width: width * 0.80
                }}>
                    <View style={styles.headerModal}>
                        <Text style={styles.titleModal}>
                            Mis Productos
                        </Text>
                        <View style={styles.iconCart}>
                            <Icon name='cancel'
                                size={23}
                                color={PRIMARY_COLOR}
                                onPress={setShowModal} />
                        </View>
                    </View>
                    <View style={styles.headerTable}>
                        <Text style={styles.textHeaderTable}>Producto</Text>
                        <View style={styles.headerDescription}>
                            <Text style={{
                                ...styles.textHeaderTable,
                                marginHorizontal: 10
                            }}>Precio</Text>
                            <Text style={styles.textHeaderTable}>Cantidad</Text>
                            <Text style={{
                                ...styles.textHeaderTable,
                                marginHorizontal: 10
                            }}>Total</Text>
                        </View>
                    </View>
                    <FlatList
                        data={car}
                        renderItem={({ item }) =>
                            <View style={styles.headerTable}>
                                <Text>{item.name}</Text>
                                <View style={styles.headerDescription}>
                                    <Text style={{ marginHorizontal: 10 }}>${(item.price).toFixed(2)}</Text>
                                    <Text style={{ paddingHorizontal: 22 }}>{item.quantity}</Text>
                                    <Text style={{ marginHorizontal: 10 }}>${(item.total).toFixed(2)}</Text>
                                </View>
                            </View>}
                        keyExtractor={item => item.id.toString()} />
                    <View style={styles.containerTotal}>
                        <Text style={styles.textTotal}>Total Pagar: ${totalPay()}</Text>
                    </View>
                    <TouchableOpacity style={styles.buttonCart}
                        onPress={handleBuy}>
                        <Text style={styles.buttonCartText}>Comprar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}
