const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('#name');//Debemos llamar a la clase name con #, ya que es una clase
const $b = document.querySelector('#blog'); /// 
const $l = document.querySelector('.location');

// await solo se utiliza dentro de una funcion async
async function displayUser(username) {
  $n.textContent = 'cargando...'; // duda
  try{ //dentro de una función async
    // necesitas utilizar json para pasarlo a un texto plano
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json();
    console.log(data); //te da el nombre respuesta data asigando al json
    $n.textContent = '${data.name}';
    $b.textContent = '${data.blog}';
    $l.textContent = '${data.location}';

  } catch(error){ // va dentro de una función assync
    console.log(error);
  }
  //Estammos creando un arreglo de Objetos

}

function handleError(err) { ///duda
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}` //No se estaba llamando correctamente a la constante $n, ya asignada
}

displayUser('stolinski').catch(handleError);