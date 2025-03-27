import React, { useState } from 'react';
import { Image, Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { Product } from '../HomeScreen';
import { styles } from '../../../theme/appTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../../../theme/commons/constants';

//interface para propiedades del componente
interface Props {
    product: Product;
    isVisible: boolean;
    setShowModal: () => void;
}

export const ModalProduct = ({ product, isVisible, setShowModal }: Props) => {
    //hook useWindowDimensions para obtener las dimensiones de la ventana
    const { width } = useWindowDimensions();

    //hook useState para manejar la cantidad de productos
    const [quantity, setQuantity] = useState<number>(1);

    return (
        <Modal visible={isVisible} animationType='fade' transparent={true}>
            <View style={styles.containerModal}>
                <View style={{
                    ...styles.contentModal,
                    width: width * 0.80
                }}>
                    <View style={styles.headerModal}>
                        <Text style={styles.titleModal}>
                            {product.name} - ${product.price.toFixed(2)}
                        </Text>
                        <View style={styles.iconCart}>
                            <Icon name='cancel'
                                size={23}
                                color={PRIMARY_COLOR}
                                onPress={setShowModal} />
                        </View>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={{
                            uri: product.pathImage
                        }}
                            style={styles.imageModal} />
                    </View>
                    {
                        (product.stock === 0)
                            ? <Text style={styles.textStock}>
                                Producto agotado!
                            </Text>
                            :
                            <View>
                                <View style={styles.containerQuantity}>
                                    <TouchableOpacity style={styles.buttonQuantity}
                                        onPress={() => setQuantity(quantity - 1)}
                                        disabled={quantity === 1}>
                                        <Text style={styles.buttonQuantityText}>-</Text>
                                    </TouchableOpacity>

                                    <Text style={styles.textQuantity}>{quantity}</Text>

                                    <TouchableOpacity style={styles.buttonQuantity}
                                        onPress={() => setQuantity(quantity + 1)}
                                        disabled={quantity === product.stock}>
                                        <Text style={styles.buttonQuantityText}>+</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={styles.textQuantity}>
                                        Total: ${(product.price * quantity).toFixed(2)}
                                    </Text>
                                </View>
                                <TouchableOpacity style={styles.buttonCart}>
                                    <Text style={styles.buttonCartText}>Agregar Carrito</Text>
                                </TouchableOpacity>
                            </View>
                    }
                </View>
            </View>
        </Modal>
    )
}
