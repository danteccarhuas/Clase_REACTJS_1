//Promuse con Ajax

const descargaUsuarios = cantidad => new Promise((resolve,reject)=>{
    //pasar la cantidad a la api
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    //llamada a ajax
    const xhr = new XMLHttpRequest();

    //abrir la conexion
    xhr.open('GET', api, true);

    //on load
    xhr.onload = ()=>{
        if(xhr.status === 200){
            resolve(JSON.parse(xhr.responseText).results);
        }else{
            reject(Error(xhr.statusText));
        }
    }

    ///Opcional
    xhr.onerror = error=> reject(error)

    //send
    xhr.send();
});

descargaUsuarios(30).then(
    miembros => imprimirHTML(miembros),
    error => console.error(new Error('Hubo un error '+error))
);

function imprimirHTML(usuarios){
    let html = '';
    usuarios.forEach(usuario => {
        html += `
            <li>
                Nombre: ${usuario.name.last} ${usuario.name.last}
                País: ${usuario.nat}
                Imagen: <img src="${usuario.picture.medium}">
            </li>
        `;
    });

    const contenedorApp = document.querySelector('#app');
    contenedorApp.innerHTML = html;
}