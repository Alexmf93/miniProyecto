import {videoJuegos} from './datos.js'

import {mostrarCatalogo, precioPromedio, valoracionPromedio, totalJuegos, mejorValorados, verificacionCategoria,
verificacionPrecio, verificacionPlataforma, mejorCalidad, busqueda, busquedaTitulo, obtenerPropiedades, conversorEntrada, masEconomicos} from './funciones.js'

let filtro = document.getElementById('filtro')
let resultado = document.getElementById('resultado')
let resultado2 = document.getElementById('resultado2')
let valor = document.getElementById('valor')
let valor2 = document.getElementById('valor2')
let total2 = document.getElementById('total2')
let totalJuegos1 = document.getElementById('totalJuegos1')
let total = document.getElementById('total')
let catalogo = document.getElementById('catalogo')
let ordenado = document.getElementById('mejor')
let valorado = document.getElementById('valorado')
let buscar = document.getElementById('buscar')
let buscar2 = document.getElementById('buscar2')
let juego = document.getElementById('juego')
let entradas = document.getElementById('entradas')
let mejor2 = document.getElementById('mejor2')


catalogo.innerHTML = mostrarCatalogo(videoJuegos)
total.innerHTML = precioPromedio(videoJuegos)
total2.innerHTML = valoracionPromedio(videoJuegos)
totalJuegos1.innerHTML = totalJuegos(videoJuegos)
mejor.innerHTML = mejorValorados(videoJuegos)
resultado.innerHTML = verificacionCategoria(videoJuegos, 'roguelike')
resultado2.innerHTML = verificacionCategoria(videoJuegos, 'Horror')
valor2.innerHTML = verificacionPrecio(videoJuegos, 50)
valor.innerHTML = verificacionPrecio(videoJuegos, 20)
filtro.innerHTML = verificacionPlataforma(videoJuegos, 'Plataformas')
valorado.innerHTML = mejorValorados(videoJuegos, 9)
buscar.innerHTML = busqueda(videoJuegos, 'ps1_001')
buscar2.innerHTML = busquedaTitulo(videoJuegos, 'MediEvil')
juego.innerHTML = obtenerPropiedades(videoJuegos[1])
entradas.innerHTML = conversorEntrada(videoJuegos[1])
mejor2.innerHTML = masEconomicos(videoJuegos)