import {UseCounter} from "../hooks/useCounter.js";

export const ContadorComponent = () => {
    //creación de un custom hook

    // desestructuracion de las cosas que se van a exportar
    const {contador, incrementar, decrementar, resetear } = UseCounter(0)


    return (
        <>
            <h1>Contador: {contador}</h1>
            <button onClick={ () => decrementar(1) }  type='button' className="btn btn-warning mx-2 px-4"> -1 </button>
            <button onClick={ () => resetear()} type='button' className="btn btn-danger mx-2 px-4"> Reset </button>
            <button onClick={() => incrementar(1)} type='button' className="btn btn-success mx-2 px-4"> +1 </button>
        </>
    )
}
