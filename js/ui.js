// Funciones de UI para la tienda
const UI = {
    // Renderizar productos en el grid
    renderProducts: (products, containerId = 'productos-grid') => {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = products.map(product => `
            <article class="producto-card">
                ${product.originalPrice ? `
                    <div class="producto-etiqueta oferta">
                        -${Math.round((1 - product.price/product.originalPrice) * 100)}%
                    </div>
                ` : product.category === 'nuevo' ? `
                    <div class="producto-etiqueta">Nuevo</div>
                ` : ''}
                
                <img src="${product.image}" alt="${product.name}" class="producto-imagen">
                <div class="producto-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    ${product.originalPrice ? `
                        <div class="precio-container">
                            <p class="precio-anterior">$${product.originalPrice.toFixed(2)}</p>
                            <p class="producto-precio">$${product.price.toFixed(2)}</p>
                        </div>
                    ` : `
                        <p class="producto-precio">$${product.price.toFixed(2)}</p>
                    `}
                    <button class="boton" onclick="UI.addToCart('${product.id}')" 
                            ${!DeVigoStore.ProductUtils.checkStock(product.id) ? 'disabled' : ''}>
                        ${DeVigoStore.ProductUtils.checkStock(product.id) ? 'Agregar al Carrito' : 'Sin Stock'}
                    </button>
                </div>
            </article>
        `).join('');
    },

    // Inicializar filtros
    initializeFilters: () => {
        const categorySelect = document.getElementById('categoria');
        const priceSelect = document.getElementById('precio');

        if (categorySelect) {
            categorySelect.addEventListener('change', (e) => {
                const products = e.target.value ? 
                    DeVigoStore.ProductUtils.getByCategory(e.target.value) : 
                    DeVigoStore.products;
                
                const sortedProducts = priceSelect ? 
                    DeVigoStore.ProductUtils.sortProducts(products, priceSelect.value) : 
                    products;
                
                UI.renderProducts(sortedProducts);
            });
        }

        if (priceSelect) {
            priceSelect.addEventListener('change', (e) => {
                const products = categorySelect && categorySelect.value ? 
                    DeVigoStore.ProductUtils.getByCategory(categorySelect.value) : 
                    DeVigoStore.products;
                
                const sortedProducts = DeVigoStore.ProductUtils.sortProducts(products, e.target.value);
                UI.renderProducts(sortedProducts);
            });
        }
    },

    // Agregar al carrito
    addToCart: (productId) => {
        const product = DeVigoStore.products.find(p => p.id === productId);
        if (product && DeVigoStore.ProductUtils.checkStock(productId)) {
            cart.addItem({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image
            });
            
            // Mostrar mensaje de éxito
            UI.showNotification('Producto agregado al carrito');
        }
    },

    // Mostrar notificación
    showNotification: (message, type = 'success') => {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => {
                    notification.remove();
                }, 300);
            }, 2000);
        }, 100);
    },

    // Inicializar la UI
    initialize: () => {
        // Renderizar productos destacados
        const featuredProducts = DeVigoStore.ProductUtils.getFeatured();
        UI.renderProducts(featuredProducts, 'featured-products-grid');

        // Renderizar todos los productos
        UI.renderProducts(DeVigoStore.products);

        // Inicializar filtros
        UI.initializeFilters();

        // Inicializar carrito
        cart.updateCartUI();
    }
};

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', UI.initialize);

// Función para cargar productos destacados
function loadFeaturedProducts() {
    const featuredContainer = document.getElementById('featured-products-grid');
    const featuredProducts = DeVigoStore.ProductUtils.getFeatured();
    
    featuredContainer.innerHTML = '';
    featuredProducts.forEach(product => {
        featuredContainer.appendChild(createProductCard(product));
    });
}

// Función para cargar productos por categoría
function loadProductsByCategory(category) {
    const gridContainer = document.querySelector(`.${category}-grid`);
    const products = DeVigoStore.ProductUtils.getByCategory(category);
    
    gridContainer.innerHTML = '';
    products.forEach(product => {
        gridContainer.appendChild(createProductCard(product));
    });
}

// Función para formatear precio en pesos mexicanos
function formatPrice(price) {
    return `$${price.toFixed(2)} MXN`;
}

// Función para crear una tarjeta de producto
function createProductCard(product) {
    const card = document.createElement('article');
    card.className = 'producto-card';

    // Agregar etiqueta si es necesario
    if (product.originalPrice) {
        const discount = Math.round((1 - product.price / product.originalPrice) * 100);
        const etiqueta = document.createElement('div');
        etiqueta.className = 'producto-etiqueta oferta';
        etiqueta.textContent = `-${discount}%`;
        card.appendChild(etiqueta);
    }

    // Crear contenido de la tarjeta
    card.innerHTML += `
        <img src="${product.image}" alt="${product.name}" class="producto-imagen">
        <div class="producto-info">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            ${product.originalPrice ? 
                `<div class="precio-container">
                    <p class="precio-anterior">${formatPrice(product.originalPrice)}</p>
                    <p class="producto-precio">${formatPrice(product.price)}</p>
                </div>` :
                `<p class="producto-precio">${formatPrice(product.price)}</p>`
            }
            <button class="boton" onclick="addToCart('${product.id}', '${product.name}', ${product.price}, '${product.image}')">
                Agregar al Carrito
            </button>
        </div>
    `;

    return card;
}

// Función para aplicar filtros
function applyFilters() {
    const categoria = document.getElementById('categoria').value;
    const subcategoria = document.getElementById('subcategoria').value;
    const ordenPrecio = document.getElementById('precio').value;

    let productos = [];

    if (categoria) {
        productos = DeVigoStore.ProductUtils.getByCategory(categoria);
        if (subcategoria) {
            productos = DeVigoStore.ProductUtils.getBySubcategory(categoria, subcategoria);
        }
    } else {
        // Si no hay categoría seleccionada, mostrar todos los productos
        productos = DeVigoStore.products;
    }

    // Aplicar ordenamiento
    productos = DeVigoStore.ProductUtils.sortProducts(productos, ordenPrecio);

    // Actualizar visualización
    updateProductsDisplay(productos);
}

// Función para actualizar la visualización de productos
function updateProductsDisplay(productos) {
    // Limpiar todas las grids
    document.querySelectorAll('.products-grid').forEach(grid => {
        grid.innerHTML = '';
    });

    // Agrupar productos por categoría
    const productosPorCategoria = {};
    productos.forEach(producto => {
        if (!productosPorCategoria[producto.category]) {
            productosPorCategoria[producto.category] = [];
        }
        productosPorCategoria[producto.category].push(producto);
    });

    // Actualizar cada grid de categoría
    Object.entries(productosPorCategoria).forEach(([categoria, productos]) => {
        const grid = document.querySelector(`.${categoria}-grid`);
        if (grid) {
            productos.forEach(producto => {
                grid.appendChild(createProductCard(producto));
            });
        }
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Cargar productos destacados
    loadFeaturedProducts();

    // Cargar productos por categoría
    ['collares', 'aretes', 'pulseras'].forEach(category => {
        loadProductsByCategory(category);
    });

    // Event listeners para filtros
    document.getElementById('categoria').addEventListener('change', applyFilters);
    document.getElementById('subcategoria').addEventListener('change', applyFilters);
    document.getElementById('precio').addEventListener('change', applyFilters);
});

// Función para mostrar notificaciones
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateY(0)';
        notification.style.opacity = '1';
    }, 100);

    // Animar salida y remover
    setTimeout(() => {
        notification.style.transform = 'translateY(-100%)';
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Exportar funciones necesarias
window.showNotification = showNotification; 