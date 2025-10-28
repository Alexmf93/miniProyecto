export function mostrarCatalogo(videoJuegos){
let contenido = ""
videoJuegos.forEach(juego => {
    contenido += `
    <div class="card">
        <div class="card-container">
        <h2>${juego.nombre}</h2>
        <p>${juego.id}</p>
        <p>${juego.categoria}</p>
        <p>${juego.precio}</p>
        <p>${juego.puntuacion}</p>
        </div>
    </div>
    `;
});
return contenido;
};

export function precioPromedio(videoJuegos){
    const total = videoJuegos.reduce((acumulador, juego) => {
        return acumulador + juego.precio
    }, 0)
    return total/videoJuegos.length;
};

export function valoracionPromedio(videoJuegos){
    const total2 = videoJuegos.reduce((acumulador, juego) =>{
        return acumulador + juego.puntuacion
    }, 0)
    return total2/videoJuegos.length;
};

export function totalJuegos(videoJuegos){
    return videoJuegos.length;
};

export function mejorValorados (videoJuegos){
    const mejor = [...videoJuegos].sort((a,b) => b.puntuacion - a.puntuacion);
    return mostrarCatalogo(mejor.slice(0,5))
}

export function verificacionCategoria(videoJuegos, categoria){
    const resultado = videoJuegos.filter(genero => genero.categoria === categoria)

    if(resultado.length >0){
        return `Hay juegos del tipo ${categoria}: Sí `
    } else{
        return `Hay juegos del tipo ${categoria}: No`
    }
}
export function verificacionPrecio(videoJuegos, precio){
    const valor = videoJuegos.every(dinero => dinero.precio > precio)

    if(valor){
        return `Todos los juegos cuestan más de ${precio}€?: Sí `
    } else{
        return `Todos los juegos cuesta más de  ${precio}€?: No`
    }
}

export function verificacionPlataforma(videoJuegos, categoria){
    const filtro = videoJuegos.filter(genero =>genero.categoria === categoria)

    let contenido =""
    if(filtro.length >0){
        filtro.forEach(juego => {
    contenido += `
    <div class="card">
        <div class="card-container">
        <p>${juego.nombre} - ${juego.precio}€ (⭐ ${juego.puntuacion}/10)</p>
        </div>
    </div>
    `;
})
    } 
    return contenido
}

export function mejorCalidad(videoJuegos, puntuacion ){
    const valorado = videoJuegos.filter(valoracion => valoracion.puntuacion > puntuacion)

    if(valorado){
        return `Juegos de maxima calidad ${nombre} ${puntuacion} ${precio} `
    }else{
        return `No hay juegos con tan alta puntuacion`
    }
}

export function busqueda(videoJuegos, id){
    const buscar = videoJuegos.find(busqueda => busqueda.id === id)
    const indice = videoJuegos.findIndex(juego => juego.id === id)
    let contenido2 =""
    if(buscar){
        contenido2 += `
        <div class="card">
            <div class="card-container">
            <p>${buscar.nombre} - ${buscar.precio}€ (${buscar.puntuacion}/10) Indice: ${indice+1}</p>
            </div>
        </div>
    `;
        
    }
    return contenido2
}

export function busquedaTitulo(videoJuegos, nombre){
    const buscar2 = videoJuegos.find(busqueda => busqueda.nombre.toLowerCase() === nombre.toLowerCase())
    let contenido2 =""
    if(buscar2){
        contenido2 += `
        <div class="card">
            <div class="card-container">
            <p>${buscar2.nombre} - ${buscar2.precio}€ (${buscar2.puntuacion}/10)</p>
            </div>
        </div>
    `;
    }
    return contenido2
}

export function obtenerPropiedades (juego){
    let propiedades = Object.keys(juego)
    let html = "<p>"
    propiedades.forEach(prop => {
        html += `
        <span>${prop}</span> 
        `
    })
    html += '</p>'
    return html
}

export function conversorEntrada (juego){
    const entradas = Object.entries(juego)

    let html = ""
    entradas.forEach(entrada => {
        html += `<p>${entrada[0]}: ${entrada[1]}</p>`
    })
     return html 
}

export function masEconomicos (videoJuegos){
    const mejor2 = [...videoJuegos].sort((a,b) => a.precio - b.precio);
    return mostrarCatalogo(mejor2.slice(0,5))
}