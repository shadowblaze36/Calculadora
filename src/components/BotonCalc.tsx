import React from 'react'
import { Dimensions, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface props {
    texto: string;
    color?: string;
    ancho?: boolean;
    action: (numeroTexto: string) => void;
}

const { width, height } = Dimensions.get('window');

export const BotonCalc = ({ texto, color = '#2D2D2D', ancho = false, action }: props) => {
    return (
        <TouchableOpacity
            onPress={() => action(texto)}
        >
            <View style={{
                ...styles.boton,
                backgroundColor: color,
                width: (ancho) ? width / 2 - 20 : width / 4 - 20,
                height: width / 4 - 20
            }}>
                <Text style={{
                    ...styles.botonTexto,
                    color: (color === '#9B9B9B') ? 'black' : 'white'
                }}>{texto}</Text>
            </View>
        </TouchableOpacity>
    )
}
