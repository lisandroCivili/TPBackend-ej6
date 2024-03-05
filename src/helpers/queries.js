const APIRecetas = import.meta.env.VITE_API_RECETA

export const leerRecetas = async() =>{
    try {
        const respuesta = await fetch(APIRecetas);
        return respuesta
    } catch (error) {
        console.log(error)
    }
}

export const crearReceta = async(nuevaReceta) =>{
    try {
        const respuesta = await fetch(APIRecetas, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(nuevaReceta)
        });
        return respuesta
    } catch (error) {
        console.log(error)
    }
}

export const borrarReceta = async(id) =>{
    try {
        const respuesta = await fetch(APIRecetas+'/'+id, {
            method: "DELETE",
        });
        return respuesta
    } catch (error) {
        console.log(error)
    }
}

export const obtenerReceta = async(id) =>{
    try {
        const respuesta = await fetch(APIRecetas+'/'+id)
        return respuesta
    } catch (error) {
        console.log(error)
    }
}