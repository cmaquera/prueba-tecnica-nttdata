document.addEventListener('DOMContentLoaded', function() {
    const tablaPersonas = document.getElementById('tablaPersonas');
    const filtroNombre = document.getElementById('filtroNombre');
    const filtroGenero = document.getElementById('filtroGenero');

    // Función para listar todas las personas
    function listarPersonas() {
        $.ajax({
            url: '/api/personas',
            method: 'GET',
            success: function(response) {
                const personas = response;
                tablaPersonas.innerHTML = personas.map(persona => `
                    <tr>
                        <td>${persona.name.first} ${persona.name.last}</td>
                        <td>${persona.gender}</td>
                        <td>${persona.location.street.number} ${persona.location.street.name},
                            ${persona.location.city}, ${persona.location.state},
                            ${persona.location.country}</td>
                        <td>${persona.email}</td>
                        <td>${new Date(persona.dob.date).toLocaleDateString()}</td>
                        <td>
                            <img src="${persona.picture.medium}" 
                                 alt="${persona.name.first} ${persona.name.last}" 
                                 class="rounded-circle" width="40" height="40">
                        </td>
                    </tr>
                `).join('');
            },
            error: function(xhr, status, error) {
                alert('Error al cargar las personas: ' + error);
            }
        });
    }

    // Función para buscar personas con filtros
    function buscarPersonas() {
        const nombreFiltro = filtroNombre.value.toLowerCase();
        const generoFiltro = filtroGenero.value;

        $.ajax({
            url: '/api/personas',
            method: 'GET',
            success: function(response) {
                const personas = response;
                
                // Filtrar personas
                const personasFiltradas = personas.filter(persona => {
                    const nombreCompleto = `${persona.name.first} ${persona.name.last}`.toLowerCase();
                    const cumpleNombre = nombreCompleto.includes(nombreFiltro);
                    const cumpleGenero = !generoFiltro || persona.gender === generoFiltro;
                    return cumpleNombre && cumpleGenero;
                });

                tablaPersonas.innerHTML = personasFiltradas.map(persona => `
                    <tr>
                        <td>${persona.name.first} ${persona.name.last}</td>
                        <td>${persona.gender}</td>
                        <td>${persona.location.city}, ${persona.location.state},
                            ${persona.location.country}</td>
                        <td>${persona.email}</td>
                        <td>${new Date(persona.dob.date).toLocaleDateString()}</td>
                        <td>
                            <img src="${persona.picture.medium}" 
                                 alt="${persona.name.first} ${persona.name.last}" 
                                 class="rounded-circle" width="40" height="40">
                        </td>
                    </tr>
                `).join('');
            },
            error: function(xhr, status, error) {
                alert('Error al cargar las personas: ' + error);
            }
        });
    }

    // Eventos
    filtroNombre.addEventListener('input', buscarPersonas);
    filtroGenero.addEventListener('change', buscarPersonas);

    // Mostrar todas las personas al cargar la página
    listarPersonas();
});
