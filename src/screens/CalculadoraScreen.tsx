import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { BotonCalc } from '../components/BotonCalc'
import { useCalculadora } from '../hooks/useCalculadora'

export const CalculadoraScreen = () => {
    const { numeroAnterior,
        numero,
        limpiar,
        armarNumero,
        positivoNegativo,
        borrar,
        dividir,
        multiplicar,
        restar,
        sumar,
        calcular } = useCalculadora();

    return (
        <View style={styles.calculadoraContainer}>
            {
                (numeroAnterior !== '0') && (
                    <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
                )
            }
            <Text
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            >{numero}</Text>

            {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCalc texto='C' color='#9B9B9B' action={limpiar}></BotonCalc>
                <BotonCalc texto='+/-' color='#9B9B9B' action={positivoNegativo}></BotonCalc>
                <BotonCalc texto='del' color='#9B9B9B' action={borrar}></BotonCalc>
                <BotonCalc texto='/' color='#FF9427' action={dividir}></BotonCalc>
            </View>

            {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCalc texto='7' action={armarNumero}></BotonCalc>
                <BotonCalc texto='8' action={armarNumero}></BotonCalc>
                <BotonCalc texto='9' action={armarNumero}></BotonCalc>
                <BotonCalc texto='X' color='#FF9427' action={multiplicar}></BotonCalc>
            </View>

            {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCalc texto='4' action={armarNumero}></BotonCalc>
                <BotonCalc texto='5' action={armarNumero}></BotonCalc>
                <BotonCalc texto='6' action={armarNumero}></BotonCalc>
                <BotonCalc texto='-' color='#FF9427' action={restar}></BotonCalc>
            </View>

            {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCalc texto='1' action={armarNumero}></BotonCalc>
                <BotonCalc texto='2' action={armarNumero}></BotonCalc>
                <BotonCalc texto='3' action={armarNumero}></BotonCalc>
                <BotonCalc texto='+' color='#FF9427' action={sumar}></BotonCalc>
            </View>

            {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCalc texto='0' ancho action={armarNumero}></BotonCalc>
                <BotonCalc texto='.' action={armarNumero}></BotonCalc>
                <BotonCalc texto='=' color='#FF9427' action={calcular}></BotonCalc>
            </View>

        </View>
    )
}
