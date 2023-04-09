import { useRef, useState } from "react";

enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {
    const [numeroAnterior, setNumeroAnterior] = useState('0');
    const [numero, setNumero] = useState('0');

    const ultimaOperacion = useRef<Operadores>();

    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('0');
    }

    const armarNumero = (numeroTexto: string) => {
        // No aceptar doble punto
        if (numero.includes('.') && numeroTexto === '.') return;
        if (numero === '-0')
            setNumero('-' + numeroTexto);
        else if (numero === '0' && numeroTexto !== '.')
            setNumero(numeroTexto)
        else
            setNumero(numero + numeroTexto);
    }

    const positivoNegativo = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''));
        } else {
            setNumero('-' + numero);
        }
    }

    const borrar = () => {
        if (numero.length == 1 || (numero.length == 2 && numero.includes('-')))
            setNumero('0');
        else
            setNumero(numero.slice(0, -1))
    }

    const cambiarNumPorAnterior = () => {
        if (numero.endsWith('.'))
            setNumeroAnterior(numero.slice(0, -1));
        else
            setNumeroAnterior(numero);
        setNumeroAnterior(numero);
        setNumero('0');
    }

    const dividir = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.dividir;
    }

    const multiplicar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.multiplicar;
    }

    const restar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.restar;
    }

    const sumar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.sumar;
    }

    const calcular = () => {

        const num1 = Number(numero);
        const num2 = Number(numeroAnterior)
        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumero(`${num1 + num2}`);
                break;
            case Operadores.restar:
                setNumero(`${num2 - num1}`);
                break;
            case Operadores.multiplicar:
                setNumero(`${num1 * num2}`);
                break;
            case Operadores.dividir:
                setNumero(`${num2 / num1}`);
                break;
            default:
                break;
        }

        setNumeroAnterior('0');

    }
    return {
        numeroAnterior,
        numero,
        limpiar,
        armarNumero,
        positivoNegativo,
        borrar,
        dividir,
        multiplicar,
        restar,
        sumar,
        calcular
    }
}
