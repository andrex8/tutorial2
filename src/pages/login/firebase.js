// Initialize Firebase
      var config = {
        apiKey: "AIzaSyDUVaEsT0ShLoeDKihjBeYyNtnoNPuUPP4",
        authDomain: "drupalfacebook-22f0d.firebaseapp.com",
        databaseURL: "https://drupalfacebook-22f0d.firebaseio.com",
        projectId: "drupalfacebook-22f0d",
        storageBucket: "drupalfacebook-22f0d.appspot.com",
        messagingSenderId: "881271025074"
      };
      firebase.initializeApp(config);


      /*
Autentificacion y registro de usuarios por correo y contraseña
*/

//************************Por correo y contraseña******************************************
//funcion para registrar un nuevo usuario
function registrar(){
  //Se obtiene el valor de cada campo
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .catch(function(error) {
    /* Manejo de errores, usuario ya existente, contraseña no valida,
    que no se ingrese la contraseña por parte del usuario etc...
    se pueden hacer validaciones o dar retroalimentacion dependiendo del codigo de error
    */
    var errorCode = error.code;
    var errorMessage = error.message;
    var infol = document.getElementById('infol'); //Parrafo de información sobre login incorrecto
    console.log(errorCode);
    console.log(errorMessage);
    console.log(infol);
    infol.innerHTML = "Los datos no son correctos";
    // ...
  });
}

function registrar2(){
  //Se obtiene el valor de cada campo
  var email = document.getElementById('correos').value;
  var password = document.getElementById('contra').value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .catch(function(error) {
    /* Manejo de errores, usuario ya existente, contraseña no valida,
    que no se ingrese la contraseña por parte del usuario etc...
    se pueden hacer validaciones o dar retroalimentacion dependiendo del codigo de error
    */
    var errorCode = error.code;
    var errorMessage = error.message;
    var infol = document.getElementById('infol'); //Parrafo de información sobre login incorrecto
    console.log(errorCode);
    console.log(errorMessage);
    console.log(infol);
    infol.innerHTML = "Los datos no son correctos";
    // ...
  });
}

//Abrir modal
function modal(){
  // Get the modal
  var modal = document.getElementById('myModal');
  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
      modal.style.display = "block";
      modal.innerHTML = "El código de la promocion es: " + codigo();
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
}


//Acceso a usuarios que ya existen
function ingresar() {
  var email2 = document.getElementById('email').value;
  var password2 = document.getElementById('password').value;
  firebase.auth().signInWithEmailAndPassword(email2,password2).catch(function (error) {
    //Aqui es manejo de e
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}

//Verificar el estado del usuario dentro de la app
function observador() {
  firebase.auth().onAuthStateChanged(function(user) {
    if(user){
      console.log('El usuario esta logueado');
      acceder();
    }
    else{
      console.log('El usuario no esta logueado');
    }
  });
}
observador();

function acceder(){
  	$.mobile.changePage("#promo");
}


function mensaje(){
  var anuncio = document.getElementById('anuncio');
  anuncio.innerHTML = codigo();
  anuncio.style.color = 'red';
}

function codigo() {
  var texto = "";
  var cadena = "ABCDEFGHIJKLMNOPQRSTUVWKYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++) {
    texto += cadena.charAt(Math.floor(Math.random() * cadena.length));
  }
  return texto
}

//************************************Acceso mediante Facebook********************************
function registrarFacebook1() {
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().languagCode = 'es-GT';
  firebase.auth().signInWithRedirect(provider);
  firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // ...
  }
  // The signed-in user info.
  var user = result.user;
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});


//Segunda opcion, no utiliza provider de Face
function registrarFacebook() {
  firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
}
}

function insert() {


}
