document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const cartToggle = document.getElementById('cart-toggle');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCart = document.getElementById('close-cart');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Estado del carrito
    let cart = [];

    // Toggle menú móvil
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Toggle carrito
    cartToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        cartSidebar.classList.add('active');
    });

    closeCart.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
    });

    // Cerrar carrito al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!cartSidebar.contains(e.target) && !cartToggle.contains(e.target)) {
            cartSidebar.classList.remove('active');
        }
    });

    // Manejo de dropdowns en móvil
    if (window.innerWidth <= 768) {
        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('click', (e) => {
                e.preventDefault();
                dropdown.classList.toggle('active');
            });
        });
    }

    // Funciones del carrito
    function updateCartUI() {
        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            total += item.precio * item.cantidad;
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <img src="${item.imagen}" alt="${item.nombre}" class="cart-item-image">
                <div class="cart-item-details">
                    <h3>${item.nombre}</h3>
                    <p class="cart-item-price">$${item.precio} MXN</p>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn minus" data-id="${item.id}">-</button>
                        <span>${item.cantidad}</span>
                        <button class="quantity-btn plus" data-id="${item.id}">+</button>
                    </div>
                </div>
            `;
            cartItems.appendChild(itemElement);
        });

        cartTotal.textContent = `$${total.toFixed(2)} MXN`;
        cartCount.textContent = cart.reduce((sum, item) => sum + item.cantidad, 0);
    }

    // Event listener para agregar productos al carrito
    document.addEventListener('agregarAlCarrito', (e) => {
        const producto = e.detail;
        const itemExistente = cart.find(item => item.id === producto.id);

        if (itemExistente) {
            itemExistente.cantidad++;
        } else {
            cart.push({...producto, cantidad: 1});
        }

        updateCartUI();
        cartSidebar.classList.add('active');
    });

    // Event listeners para los botones de cantidad
    cartItems.addEventListener('click', (e) => {
        if (e.target.classList.contains('quantity-btn')) {
            const id = parseInt(e.target.dataset.id);
            const item = cart.find(item => item.id === id);
            
            if (e.target.classList.contains('plus')) {
                item.cantidad++;
            } else if (e.target.classList.contains('minus')) {
                item.cantidad--;
                if (item.cantidad === 0) {
                    cart = cart.filter(item => item.id !== id);
                }
            }
            
            updateCartUI();
        }
    });

    // Cargar productos inicialmente
    cargarProductos(productos);

    // Filtros de categoría
    document.querySelectorAll('.filtro-categoria button').forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase active de todos los botones de categoría
            document.querySelectorAll('.filtro-categoria button').forEach(b => b.classList.remove('active'));
            button.classList.add('active');

            const categoria = button.getAttribute('data-filter');
            const estilo = document.querySelector('.filtro-estilo button.active').getAttribute('data-style');
            filtrarProductos(categoria, estilo);
        });
    });

    // Filtros de estilo
    document.querySelectorAll('.filtro-estilo button').forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase active de todos los botones de estilo
            document.querySelectorAll('.filtro-estilo button').forEach(b => b.classList.remove('active'));
            button.classList.add('active');

            const categoria = document.querySelector('.filtro-categoria button.active').getAttribute('data-filter');
            const estilo = button.getAttribute('data-style');
            filtrarProductos(categoria, estilo);
        });
    });
});

function filtrarProductos(categoria, estilo) {
    let productosFiltrados = productos;

    if (categoria !== 'todos') {
        productosFiltrados = productosFiltrados.filter(producto => producto.categoria === categoria);
    }

    if (estilo !== 'todos') {
        productosFiltrados = productosFiltrados.filter(producto => producto.estilo === estilo);
    }

    cargarProductos(productosFiltrados);
}

function cargarProductos(productosAMostrar) {
    const contenedor = document.getElementById('productos-grid');
    contenedor.innerHTML = '';

    productosAMostrar.forEach(producto => {
        const productoHTML = `
            <div class="producto">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p class="precio">$${producto.precio} MXN</p>
                <p class="descripcion">${producto.descripcion}</p>
                <button onclick="agregarAlCarrito(${JSON.stringify(producto).replace(/"/g, '&quot;')})">
                    Agregar al Carrito
                </button>
            </div>
        `;
        contenedor.innerHTML += productoHTML;
    });
} 