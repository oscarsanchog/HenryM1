let persona = {
    nombre: 'Ignacio',
    apellido: 'Cenni'
}

function saludar (saludo) {
    console.log(`${saludo}, mi nombre es ${this.nombre}`);
}

let saludarPersona = saludar.bind(persona, 'Hola') // Lo que hago aquí fue pasarle un parámetro varaible a la función. Es decir, primero a qué objeto se refiere la función, y luego, qué parametros recibe.
saludarPersona(); // se conoce como función currying

//* Si la función no usa this, igual hay que pasarle algo. Se le suele pasar NULL. Entonces el Bind tiene  dos funciones