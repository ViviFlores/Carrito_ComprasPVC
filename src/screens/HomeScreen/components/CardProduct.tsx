import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Product } from '../HomeScreen';
import { styles } from '../../../theme/appTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../../../theme/commons/constants';
import { ModalProduct } from './ModalProduct';

//interface para propiedades del componente
interface Props {
  product: Product; //objeto producto
  updateStock: (idProduct: number, quantity: number) => void; //función para actualizar el stock de los productos
}

export const CardProduct = ({ product, updateStock }: Props) => {
  //hook useState para manejar la visibilidad del modal
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <View>
      <View style={styles.containerCard}>
        <Image source={{ uri: product.pathImage }} style={styles.imageProduct} />
        <View>
          <Text style={styles.titleProduct}>{product.name}</Text>
          <Text>Precio: ${product.price.toFixed(2)}</Text>
        </View>
        <View style={styles.iconCart}>
          <Icon name='add-shopping-cart'
            size={30}
            color={PRIMARY_COLOR}
            onPress={() => setShowModal(!showModal)} />
        </View>
      </View>
      <ModalProduct product={product}
        isVisible={showModal}
        setShowModal={() => setShowModal(!showModal)}
        updateStock={updateStock} />
    </View>
  )
}
