import {useState} from "react";

export const useForm = (initialForm = {}) => {

    //obtener la información del formulario

    // se crea un estado
    const [formState, setFormState] = useState(initialForm);

    // Desestructuración del formState


    // función que maneja el cambio del input
    const onInputChange = ({target})  => {
        // desestructuración del atributo name y value de target
        const {name, value} = target
        // hacer la modificación
        setFormState({
            ...formState,
            [name]: value
        })

    }

    return {
        formState,
        onInputChange
    }

}
