precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

botonMas = document.querySelector(".boton-mas");

valorTotal = document.querySelector(".valor-total");
cantidad = document.querySelector(".cantidad");
valorTotal.innerHTML = Number(cantidad.textContent) * precio;