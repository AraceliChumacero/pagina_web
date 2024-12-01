

const signInBtnLink = document.querySelector('.signInBtn-link'); //selecciona la clase
const signUpBtnLink = document.querySelector('.signUpBtn-link'); //selecciona la clase
const wrapper = document.querySelector('.wrapper'); //selecciona la clase


/* para cuando haga click me lleve a sign up */
signUpBtnLink.addEventListener('click', () => { // tiene un evento click que al hacer click dirigira.
    wrapper.classList.toggle('active'); // toggle anade una clase 
});
/* para cuando haga click me lleve a sign in */
signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

/* efecto particulas */

particlesJS('particles-js',
    {
        "particles": {
            "number": {
                "value": 80, //la cantidad de particulas
                "density": {  //controla la densidad de las particulas
                    "enable": true, //ajusta el numero de particulas de la densidad
                    "value_area": 800 //es el area donde se distribuyen las particulas
                }
            },
            "color": {
                "value": "#ffffff" //cambiar el color a los puntos de la particula por eso lo dejaremos con #ffffff
            },
            "shape": {  //sobre la forma de las particulas
                "type": "circle",  //"circle", "triangle", "edge"
                "stroke": {  //border de las particulas
                    "width": 0, 
                    "color": "#000000"  
                },
                "polygon": {
                    "nb_sides": 5 // Define el número de lados de la partícula si es un polígono
                },
                "image": {  //usar una imagen como partícula, aunque en este caso no se está utilizando.
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": { //transparencia de las particulas
                "value": 0.5,  //la opacidad
                "random": false,  /* hacer que la opacidad sea aleatoria para 
                                     cada particula, pero como es "false" no hace eso */
                "anim": {   //Configura animaciones para el tamaño
                    "enable": false, //lineas desavilitadas
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": { // Ajusta el tamaño de las partículas.
                "value": 5,//Tamaño base de las partículas
                "random": true, //los tamanos varian
                "anim": {   //configura las animaciones para el tamano
                    "enable": false,    //lineas desavilitadas
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": { // Controla si las partículas están conectadas por líneas.
                "enable": true,  //son las lineas de conexion que estan habilitadas
                "distance": 150, //las distancia entre las conexion de particulas
                "color": "#ffffff", //color
                "opacity": 0.4, //opacidad(transparencia de las lineas)
                "width": 1 //ancho de las lineas
            },
            "move": {  //controla el movimiento de las particulas
                "enable": true,  //son las lineas de conexion que estan habilitadas
                "speed": 5,  //velocidad de movimiento de las particulas
                "direction": "none", /* direccion de movimiento, como esta en "none" 
                                        quiere decir que son movimientos aleatorios */
                "random": false, // los tamanos no varian son fijos
                "straight": false,  /* las lienas se mueven en cualquier direccion,
                                        y si fuera "true" se mueven en linea recta */
                "out_mode": "out", //Define lo que pasa cuando una partícula sale del canvas
                "attract": {   // Atrae las partículas entre sí en función de su posición
                    "enable": false, //lienas de conexion inavilitadas
                    "rotateX": 600, //hacer rotar a las particulas de forma horizontal
                    "rotateY": 1200 // hacer rotar a las particulas de forma vertical
                }
            }
        },
        "interactivity": { // Configura cómo interactúan las partículas con el usuario
            "detect_on": "canvas", //Define dónde se detectan las interacciones
            "events": {  //Configura los eventos de interacción.
                "onhover": {  //Activa la interacción cuando el usuario pasa el ratón sobre el área
                    "enable": true, //Activa o desactiva la interacción por hover.
                    "mode": "repulse" //Modo de interacción, en este caso "repulse" que hace que las partículas se repelan.
                },
                "onclick": {  //Define la interacción al hacer clic
                    "enable": true,  //Activa el efecto al hacer clic.
                    "mode": "push"  //El modo "push" añade más partículas al hacer clic
                },
                "resize": true  //Permite ajustar las partículas al redimensionar la ventana.
            },
            "modes": {  //Define los modos de interacción.
                "grab": {   //Conecta las partículas cuando el ratón se acerca a ellas.
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": { //Agranda y cambia la opacidad de las partículas cuando se acercan al puntero.
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {    //Repele las partículas al pasar el ratón sobre ellas.
                    "distance": 200
                },
                "push": {   // Añade más partículas al hacer clic.
                    "particles_nb": 4 
                },
                "remove": { //Elimina partículas al hacer clic.
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,  //Si es true, ajusta la configuración para pantallas de alta resolución.
        "config_demo": {    /* Configura la demostración,
                               como el fondo del canvas (en este caso, el color de fondo es #b61924). */
            "hide_card": false,
            "background_color": "#b61924",
            "background_image": "",
            "background_position": "50% 50%",
            "background_repeat": "no-repeat",
            "background_size": "cover"
        }
    }
);

/* validaciones de login y register */
function mostrarError(campoId, errorId, mensaje) {/* "campoid" campo de entrada que contiene el error
    "errorid"  mostrara el mensaje de error
    "mensaje"  el mensaje k se mostrara*/

    const campo = document.getElementById(campoId);
    const error = document.getElementById(errorId);

    error.textContent = mensaje;
    error.style.display = "block";  // Muestra el globo

    // Posiciona el mensaje de error justo arriba del campo
    const campoRect = campo.getBoundingClientRect();
    error.style.left = "0";  // ajusta para centrar el comentario el comentario
    error.style.top = "-35px";  // Ajuste para que esté justo arriba

    // Oculta el globo después de 3 segundos
    setTimeout(() => {
        error.style.display = "none";
    }, 3000);
}

// Función para ocultar el globo de comentario
function ocultarError(errorId) {
    const error = document.getElementById(errorId);
    error.style.display = "none";
}

// Validación de Login
function validarLogin() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
    let isValid = true;

    // Limpiar errores previos
    ocultarError("loginUsernameError");//oculata los errores
    ocultarError("loginPasswordError");

    const usernameRegex = /^[a-zA-Z]+$/; // Solo letras

    if (!usernameRegex.test(username)) {// aqui verifica que el usuario solo tenga letra
        mostrarError("loginUsername", "loginUsernameError", "El nombre de usuario solo debe contener letras.");
        isValid = false;
    }

    if (password.length < 6) {//esto nos servira para saber si la persona coloco menos de 6 caracteres
        mostrarError("loginPassword", "loginPasswordError", "La contraseña debe tener al menos 6 caracteres.");
        isValid = false;
    }

    return isValid;
}

// Validación de Registro
function validarRegistro() {// captura o obtiene todo los valores ingresados
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const pais = document.getElementById("pais").value;
    const password = document.getElementById("password").value;
    const terms = document.getElementById("terms").checked;
    let isValid = true;

    // Limpiar errores previos o dezaparecen
    ocultarError("usernameError");
    ocultarError("emailError");
    ocultarError("paisError");
    ocultarError("passwordError");
    ocultarError("termsError");

    const usernameRegex = /^[a-zA-Z]+$/; // Solo letras

    if (!usernameRegex.test(username)) { //verifica k lo ingresado ne usuario contenga letras
        mostrarError("username", "usernameError", "El nombre de usuario solo debe contener letras.");
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) { //verifica k el correo tenga un formato valido
        mostrarError("email", "emailError", "El correo electrónico no es válido.");
        isValid = false;
    }

    if (pais.trim() === "") {// si esta vacio
        mostrarError("pais", "paisError", "El país es obligatorio.");
        isValid = false;
    }

    if (password.length < 6) { //permite mas de 6 caracteres
        mostrarError("password", "passwordError", "La contraseña debe tener al menos 6 caracteres.");
        isValid = false;
    }

    if (!terms) {//muestra k el checkbox este marcado 
        mostrarError("terms", "termsError", "Debes aceptar los términos y condiciones.");
        isValid = false;
    }

    return isValid;
}