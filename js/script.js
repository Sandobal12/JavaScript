const btnCart = document.querySelector('.container-cart-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart') 
});



// =================

const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');


// variable de arreglos de productos



let allProducts = JSON.parse(localStorage.getItem('carrito')) || [];


const productsLocal = () => {
  localStorage.setItem('carrito', JSON.stringify(allProducts));
};
const valorTotal = document.querySelector('.total-pagar');
const countProducts = document.querySelector('#contador-productos');

// catalogo

const galeria = document.getElementById('galeria');

fetch('../js/data.json')
.then(response => response.json())
.then(data => {
  if(Array.isArray(data.productos)) {
    data.productos.forEach((product) => {
      const content = document.createElement('div');
      content.className = 'card';
      content.innerHTML =  `
      <img src='${product.img}' class="card-img-top img" alt="...">
      <div class="card-body descripcion">
          <h5 class="card-title title">${product.nombre}</h5>
          <p class="card-text price">$${product.precio}</p>
          <button type="button" class="btn btn-add-cart btn-outline-secondary">Añadir al carrito</button>
          </div>
          `;
          
          galeria.append(content)
          
        });
      }else {
        console.error('La variable productos no es un arreglo')
      }
    })
    .then (() => {
      galeria.addEventListener('click', e => {

      if(e.target.classList.contains('btn-add-cart')){
          const product = e.target.parentElement;
          
          const infoProduct = {
              quantity: 1,
              title: product.querySelector('.title').textContent,         
              price: product.querySelector('.price').textContent,
          };
  
          console.log(infoProduct);

          const exist = allProducts.some(product => product.title === infoProduct.title);
  
          if(exist){
              const products = allProducts.map(product => {
                  if(product.title === infoProduct.title){
                      product.quantity++;
                      return product;
                  }else{
                      return product;
                  }
              })
  
              allProducts = [...products];
          }else{
            allProducts = [...allProducts, infoProduct];
          }
          
          productsLocal()
          showHtml();
        }
      });
    })
    .catch(error => console.log(error));


    rowProduct.addEventListener('click', e => {
      if(e.target.classList.contains('icon-close')){
        const product = e.target.parentElement;
        const title = product.querySelector('p').textContent;

        allProducts = allProducts.filter( 
            product => product.title !== title
        );

        productsLocal();
        showHtml();
        
      }
    })
    
    // Funcion para mostrar HTML
    
    const showHtml = () => {
      
      
      if(!allProducts.length){
        containerCartProducts.innerHTML = `
        <p class="cart-empty">El carrito está vacío</p>
        `
    } else {
      rowProduct.innerHTML = '';
    }



    let total = 0;
    let totalOfProducts = 0;

    

    allProducts.forEach(product => {

        const containerProduct = document.createElement('div')
        containerProduct.classList.add('cart-product')

        containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                    <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="icon-close"
            >
            <path
            stroke-linecap="round"
            stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        `;

        rowProduct.append(containerProduct);

        total = total + parseInt(product.quantity * product.price.slice(1));
        totalOfProducts = totalOfProducts + product.quantity;
    });

    valorTotal.innerText = `$${total}`;
    countProducts.innerText = totalOfProducts;

}
showHtml();






const registroForm = document.getElementById('registro-form');
const loginForm = document.getElementById('login-form');

// let usuarios = [];

//                                         // Registro de usuario

// registroForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const nombre = registroForm.elements['registro-nombre'].value;
//     const apellido = registroForm.elements['registro-apellido'].value;
//     const usuario = registroForm.elements['registro-usuario'].value;
//     const contrasena = registroForm.elements['registro-contrasena'].value;

//     const nuevoUsuario = {
//         nombre: nombre,
//         apellido: apellido,
//         usuario: usuario,
//         contrasena: contrasena
//     }

//     usuarios.push(nuevoUsuario);

//     localStorage.setItem('usuarios', JSON.stringify(usuarios));

//     Swal.fire({
//         position: 'center',
//         icon: 'success',
//         title: '¡Usuario registrado con éxito!',
//         showConfirmButton: false,
//         timer: 1500
//       })
// })

                                        // Inicio de sesion

// loginForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const usuario = loginForm.elements['login-usuario'].value;
//     const contrasena = loginForm.elements['login-contrasena'].value;


//     const storageUsuario = localStorage.getItem('usuario');
//     const storageContrasena = localStorage.getItem('contrasena');


//     // if (usuario === storageUsuario && contrasena === storageContrasena) {
//     //     Swal.fire({
//     //         position: 'center',
//     //         icon: 'success',
//     //         title: '¡Inicio de sesión exitoso!',
//     //         showConfirmButton: false,
//     //         timer: 1500
//     //       })
//     // }else{
//     //     Swal.fire({
//     //         position: 'center',
//     //         icon: 'error',
//     //         title: 'Usuario o contraseña incorrecto',
//     //         showConfirmButton: false,
//     //         timer: 1500
//     //       })
//     // }

//     usuario === storageUsuario && contrasena === storageContrasena ? 
//     Swal.fire({
//         position: 'center',
//         icon: 'success',
//         title: '¡Inicio de sesión exitoso!',
//         showConfirmButton: false,
//         timer: 1500
//       }) :
//       Swal.fire({
//         position: 'center',
//         icon: 'error',
//         title: 'Usuario o contraseña incorrecto',
//         showConfirmButton: false,
//         timer: 1500
//       })
      

// })


// Leer datos del archivo data.json
fetch('./../js/data.json')
  .then(response => response.json())
  .then(data => {
    // Almacenar los usuarios en una variable
    let usuarios = data.usuarios || [];

    // Registro de usuario
    registroForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nombre = registroForm.elements['registro-nombre'].value;
      const apellido = registroForm.elements['registro-apellido'].value;
      const usuario = registroForm.elements['registro-usuario'].value;
      const contrasena = registroForm.elements['registro-contrasena'].value;

      const nuevoUsuario = {
          nombre: nombre,
          apellido: apellido,
          usuario: usuario,
          contrasena: contrasena
      }

      usuarios.push(nuevoUsuario);

      fetch('data.json', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({usuarios})
      }).then(() => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: '¡Usuario registrado con éxito!',
          showConfirmButton: false,
          timer: 1500
        });
      }).catch(error => console.error(error));
    });

    // Inicio de sesión
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const usuario = loginForm.elements['login-usuario'].value;
      const contrasena = loginForm.elements['login-contrasena'].value;

      const user = usuarios.find(u => u.usuario === usuario && u.contrasena === contrasena);

      user ?
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: '¡Inicio de sesión exitoso!',
          showConfirmButton: false,
          timer: 1500})
        :
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Usuario o contraseña incorrecto',
          showConfirmButton: false,
          timer: 1500
        })
      })
  })
    .catch(error => console.log(error));





                                                    // Interaccion de botones

const btnUnete = document.getElementById('btn-unete-ya');
const btnsOpciones = document.getElementById('btns-opciones');
const btnLogin = document.getElementsByClassName('btn-login');
const btnRegistro = document.getElementsByClassName('btn-registro');
const classRegistroForm = document.getElementsByClassName('registro-form');
const classLoginForm = document.getElementsByClassName('login-form');

btnUnete.addEventListener('click', function() {
    btnsOpciones.style.display = 'block';
})

for (let i = 0; i < btnLogin.length; i++) {
    btnLogin[i].addEventListener('click', function() {
      for (let j = 0; j < classLoginForm.length; j++) {
        classLoginForm[j].style.display = 'block';
        registroForm.style.display = 'none';
      }
    });
  }

  for (let i = 0; i < btnRegistro.length; i++) {
    btnRegistro[i].addEventListener('click', function() {
      for (let j = 0; j < classRegistroForm.length; j++) {
        classRegistroForm[j].style.display = 'block';
        loginForm.style.display = 'none';
    }
});
}

// document.addEventListener('click', function(event) {

//     if (!event.target.closest('.btn-login') && !event.target.closest('.btn-registro') && !event.target.closest('#btn-unete-ya')){

//         for (let i = 0; i < classRegistroForm.length; i++) {
//             classRegistroForm[i].style.display = 'none';
//         }
//         for (let i = 0; i < classLoginForm.length; i++) {
//             classLoginForm[i].style.display = 'none';
//         }

//     }
// });













































