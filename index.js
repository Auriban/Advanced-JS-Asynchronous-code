// Ejercicio 1.- Declara una funcion getAllBreeds que devuelva un array de strings con todas las razas de perro > La función devuelve todas las razas de perro
  
const getAllBreeds = async () => {

    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();

    const razas = Object.keys(data.message);
    return razas;
}





//  Ejercicio 2.- Obten una imagen random de una raza > La función devuelve una imagen de un perro

const getRandomDog  = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();

    return data.message;
};

//console.log(getRandomDog());




// Ejercicio 3.- Obten todas las imágenes de la raza komondor > La función devuelve todas las fotos de la raza komondor

const getAllImagesByBreed = async () => {

    const response = await fetch("https://dog.ceo/api/breed/komondor/images");
    const data = await response.json(); //json es como abrir el paquete que hemos guardado en response

    const images = data.message; //como ese paquete abierto lo hemos guardado en data, oues queremos conseguir la parte de message, que son los url de las fotos

    return images;
}





// Ejercicio 4.- Obten las imagenes de una raza pasada como argumento a la función > La función devuelve todas las fotos de una raza pasada como argumento

const getAllImagesByBreed2  = async (raza) => {

    const response = await fetch(`https://dog.ceo/api/breed/${raza}/images`);
    const data = await response.json();

    return data.message;

}


//  Ejercicio 5.-  Declarara una función getGitHubUserProfile(username) que obtenga el perfil de usuario de github a partir de su nombre de usuario. (https://api.github.com/users/{username}).

const getGitHubUserProfile = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    return data;
}


// Ejercicio 6.- Declara una función printGithubUserProfile(username) que reciba como argumento el nombre de un usuario (username), retorne {img, name} y pinte la foto y el nombre en el DOM.

const printGithubUserProfile = async (username) => {

    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    const user = {
    img: data.avatar_url,
    name: data.name 
    };

    const contenedor = document.createElement("div");

    const imagen = document.createElement("img");
    imagen.src = user.img;

    const nombre = document.createElement("h2");
    nombre.textContent = user.name;

    contenedor.append(imagen);
    contenedor.append(nombre);
    
    return user;
}





//Ejercicio 7.- Crea una función getAndPrintGitHubUserProfile(username) que contenga una petición a la API para obtener información de ese usuario y devuelva un string que represente una tarjeta HTML como en el ejemplo, la estructura debe ser exactamente la misma:


const getAndPrintGitHubUserProfile = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();

  const img = data.avatar_url;
  const name = data.name
  const repos = data.public_repos;

    const tarjeta = 
    `<section>
        <img src="${img}" alt="imagen de usuario">
        <h1>${name}</h1>
        <p>Public repos: ${repos}</p>
    </section>`;

  return tarjeta;
}


// <section>
//     <img src="url de imagen" alt="imagen de usuario">
//     <h1>Nombre de usuario</h1>
//     <p>Public repos: (número de repos)</p>
// </section>