# Dashboard de Personajes - Rick & Morty

Aplicación web desarrollada como prueba técnica para consumir y visualizar información de personajes de la API pública de Rick & Morty.

## Descripción

El proyecto permite consultar los personajes de Rick & Morty y visualizar información relevante en un dashboard.

La aplicación muestra:

* Total de personajes cargados.
* Porcentaje de personajes de especie humana.
* Personaje con mayor cantidad de episodios.
* Imagen de cada personaje.
* Nombre.
* Estado: Alive, Dead o Unknown.
* Especie.
* Cantidad de episodios.
* Buscador de personajes en tiempo real.

## Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript Vanilla
* API REST de Rick & Morty

## API utilizada

Se utilizó la API pública de Rick & Morty:

`https://rickandmortyapi.com/api/character`

La aplicación consulta las diferentes páginas de la API para cargar todos los personajes disponibles.

## Ejecución local

1. Clonar el repositorio:

bash
git clone https://github.com/Moncho33/dashboard-rick-and-morty.git


2. Entrar a la carpeta del proyecto:

bash
cd dashboard-rick-and-morty


3. Abrir el archivo `index.html` en un navegador.

También puede ejecutarse utilizando una extensión como **Live Server** en Visual Studio Code.

## Estructura del proyecto


dashboard-rick-and-morty/
│
├── index.html
├── script.js
├── styles.css
└── README.md


# Funcionalidades principales

### Consumo de API

La aplicación utiliza `fetch()` para obtener la información de los personajes.

### Procesamiento de datos

Los datos recibidos se almacenan y procesan utilizando métodos de JavaScript como:

* `filter()`
* `reduce()`
* `forEach()`
* `concat()`

### Buscador

El buscador permite filtrar los personajes por nombre mientras el usuario escribe.

### Tabla de personajes

La información se muestra dinámicamente en una tabla HTML utilizando JavaScript.

## Autor

**Ramón Cardona**

Proyecto realizado como parte de un proceso de selección para práctica de Desarrollo de Software.
