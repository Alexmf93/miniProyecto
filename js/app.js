import {videoJuegos} from './datos.js'

import {mostrarCatalogo, precioPromedio, valoracionPromedio, totalJuegos, mejorValorados, verificacionCategoria, verificacionPrecio, verificacionPlataforma} from './funciones.js'

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