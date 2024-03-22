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

export const editarReceta = async(nuevosDatosReceta, id) =>{
    try {
        const respuesta = await fetch(APIRecetas+'/'+id, {
            method: "PUT",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(nuevosDatosReceta)
        });
        return respuesta
    } catch (error) {
        console.log(error)
    }
}

const userAdmin = {
    email:"admin@lisandrocivili.com",
    password: "123Aa$123"
}

export const login = (usuario)=>{
    if (usuario.mail === userAdmin.email && usuario.pass === userAdmin.password) {
        sessionStorage.setItem('loginRC', JSON.stringify(usuario.mail))
        return true
    }else{
        return false
    }
}