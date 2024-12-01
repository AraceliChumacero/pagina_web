document.addEventListener("DOMContentLoaded", () => {
    const anuncio = document.getElementById('anuncio'); // Asegúrate de que el elemento con id 'anuncio' existe

    console.log('Intentando obtener el día importante...'); // Mensaje de intento

    const checkImportantDay = () => {
        fetch('http://localhost:4000/dia-importante') // Asegúrate de que esta URL es correcta
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok: ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                console.log('Datos recibidos:', data); // Verificar datos

                // Verificar si se recibieron datos
                if (Array.isArray(data) && data.length > 0) {
                    const { nombre, descripcion } = data[0];
                    anuncio.innerHTML = `<strong>Hoy es ${nombre}:</strong> ${descripcion} <button id="cerrar-anuncio">Cerrar</button>`;
                    anuncio.style.display = 'block';  // Mostrar anuncio

                    // Agregar evento para el botón "Cerrar"
                    document.getElementById('cerrar-anuncio').addEventListener('click', () => {
                        anuncio.style.display = 'none';
                    });
                } else {
                    console.log('No hay días importantes para mostrar.');
                    anuncio.style.display = 'none'; // Asegúrate de ocultar el anuncio si no hay datos
                }
            })
            .catch(error => {
                console.error('Error al obtener el día importante:', error);
                alert('Ocurrió un error: ' + error.message);
            });
    };

    // Verificar el día importante al cargar la página
    checkImportantDay();

    // Configurar actualización automática cada cierto tiempo (por ejemplo, cada hora)
    setInterval(checkImportantDay, 3600000); // 3600000 ms = 1 hora
});
