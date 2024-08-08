import {useState} from "react";

export const UseCounter = (valorInicial = 0) => {

    const [contador, setContador] = useState(valorInicial)

    const incrementar = (valor = 1)  => setContador(contador + valor)
    const decrementar = (valor = 1) => {
        if ((contador - valor)  < 1) return
        setContador(0)}
    const resetear = () => setContador(0)

    return {
        contador,
        incrementar,
        decrementar,
        resetear
    }
}
