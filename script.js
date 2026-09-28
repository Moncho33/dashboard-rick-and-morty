const URL_API = 'https://rickandmortyapi.com/api/character';

let personajes = [];

const elementoTotalPersonajes = document.getElementById('total-personajes');
const elementoPorcentajeHumanos = document.getElementById('porcentaje-humanos');
const elementoPersonajeTop = document.getElementById('personaje-top');
const inputBusqueda = document.getElementById('input-busqueda');
const cuerpoTabla = document.getElementById('cuerpo-tabla-personajes');

async function obtenerPersonajes() {

    let url = URL_API;
    let todosLosPersonajes = [];

    while (url) {
        const respuesta = await fetch(url);

        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }

        const datos = await respuesta.json();

       
        todosLosPersonajes = todosLosPersonajes.concat(datos.results);

        url = datos.info.next;
    }

    personajes = todosLosPersonajes;

    elementoTotalPersonajes.textContent = personajes.length;

    const personajesHumanos = personajes.filter(function (personaje) {
        return personaje.species === 'Human'; 
    });

    const porcentaje = (personajesHumanos.length / personajes.length) * 100;

    elementoPorcentajeHumanos.textContent = porcentaje.toFixed(1) + '%';

    const personajeMasEpisodios = personajes.reduce(function (maximo, personaje) {
        return personaje.episode.length > maximo.episode.length ? personaje : maximo;
    }, personajes[0]);

    elementoPersonajeTop.textContent =
        personajeMasEpisodios.name + ' (' + personajeMasEpisodios.episode.length + ' episodios)';

    renderizarTabla(personajes);
}

function renderizarTabla(listaPersonajes) {

    cuerpoTabla.textContent = '';

    listaPersonajes.forEach(function (personaje) {

        const fila = document.createElement('tr');
        const tdImagen = document.createElement('td');
        const img = document.createElement('img');
        img.src = personaje.image;
        img.alt = personaje.name;
        img.width = 50;
        img.height = 50;
        img.style.borderRadius = '50%';
        tdImagen.appendChild(img);

        const tdNombre = document.createElement('td');
        tdNombre.textContent = personaje.name;

        const tdEstado = document.createElement('td');

        const estado = document.createElement('span');

        estado.textContent = personaje.status;

        estado.classList.add('status-badge');
        estado.classList.add(personaje.status.toLowerCase());

        tdEstado.appendChild(estado);

        const tdEspecie = document.createElement('td');
        tdEspecie.textContent = personaje.species;

        const tdEpisodios = document.createElement('td');
        tdEpisodios.textContent = personaje.episode.length;

        fila.appendChild(tdImagen);
        fila.appendChild(tdNombre);
        fila.appendChild(tdEstado);
        fila.appendChild(tdEspecie);
        fila.appendChild(tdEpisodios);

        cuerpoTabla.appendChild(fila);
    });
}

if (inputBusqueda) {
    inputBusqueda.addEventListener('input', function(evento) {
        const terminoBusqueda = evento.target.value.toLowerCase().trim();
        const filtrados = personajes.filter(function(personaje) {
            return personaje.name.toLowerCase().includes(terminoBusqueda);
        });
        renderizarTabla(filtrados);
    });
}

obtenerPersonajes();