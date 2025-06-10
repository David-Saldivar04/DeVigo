// Array de productos
const products = [
    // Collares
    {
        id: 'collar01',
        name: 'Collar Cadena Dorada',
        description: 'Elegante collar de cadena con diseño moderno',
        price: 459.99,
        image: 'images/De Vigo fotos/collares/collar01.jpg',
        category: 'collares',
        style: 'elegante'
    },
    {
        id: 'collar02',
        name: 'Collar Perlas Delicadas',
        description: 'Collar de perlas sintéticas con acabado brillante',
        price: 549.99,
        image: 'images/De Vigo fotos/collares/collar02.jpg',
        category: 'collares',
        style: 'elegante'
    },
    {
        id: 'collar03',
        name: 'Gargantilla Moderna',
        description: 'Gargantilla con diseño contemporáneo',
        price: 369.99,
        image: 'images/De Vigo fotos/collares/collar03.jpg',
        category: 'collares',
        style: 'casual'
    },
    {
        id: 'collar04',
        name: 'Collar Fantasía Brillante',
        description: 'Collar con detalles brillantes y diseño único',
        price: 519.99,
        image: 'images/De Vigo fotos/collares/collar04.jpg',
        category: 'collares',
        style: 'elegante'
    },
    // Aretes
    {
        id: 'aretes01',
        name: 'Aretes Clásicos',
        description: 'Aretes con diseño clásico y versátil',
        price: 279.99,
        image: 'images/De Vigo fotos/aretes/aretes01.jpg',
        category: 'aretes',
        style: 'casual'
    },
    {
        id: 'aretes02',
        name: 'Aretes Colgantes',
        description: 'Aretes largos con diseño elegante',
        price: 369.99,
        image: 'images/De Vigo fotos/aretes/aretes02.jpg',
        category: 'aretes',
        style: 'elegante'
    },
    {
        id: 'aretes03',
        name: 'Aretes Modernos',
        description: 'Aretes con diseño geométrico moderno',
        price: 319.99,
        image: 'images/De Vigo fotos/aretes/aretes03.jpg',
        category: 'aretes',
        style: 'casual'
    },
    {
        id: 'aretes04',
        name: 'Aretes Minimalistas',
        description: 'Aretes pequeños con estilo minimalista',
        price: 239.99,
        image: 'images/De Vigo fotos/aretes/aretes04.jpg',
        category: 'aretes',
        style: 'casual'
    },
    {
        id: 'aretes05',
        name: 'Aretes Brillantes',
        description: 'Aretes con cristales brillantes',
        price: 369.99,
        image: 'images/De Vigo fotos/aretes/aretes05.jpg',
        category: 'aretes',
        style: 'elegante'
    },
    // Pulseras
    {
        id: 'pulsera01',
        name: 'Pulsera Delicada',
        description: 'Pulsera fina con diseño delicado',
        price: 319.99,
        image: 'images/De Vigo fotos/pulseras/pulsera01.jpg',
        category: 'pulseras',
        style: 'casual'
    },
    {
        id: 'pulsera02',
        name: 'Pulsera Moderna',
        description: 'Pulsera con diseño contemporáneo',
        price: 349.99,
        image: 'images/De Vigo fotos/pulseras/pulsera02.jpg',
        category: 'pulseras',
        style: 'casual'
    },
    {
        id: 'pulsera03',
        name: 'Pulsera Elegante',
        description: 'Pulsera con detalles brillantes',
        price: 419.99,
        image: 'images/De Vigo fotos/pulseras/pulsera03.jpg',
        category: 'pulseras',
        style: 'elegante'
    },
    {
        id: 'pulsera04',
        name: 'Pulsera Fantasia',
        description: 'Pulsera con diseño único y llamativo',
        price: 399.99,
        image: 'images/De Vigo fotos/pulseras/pulsera04.jpg',
        category: 'pulseras',
        style: 'elegante'
    }
];

// Variables para el filtrado
let activeCategory = 'todos';
let activeStyle = 'todos';

// Función para mostrar productos
function displayProducts() {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;

    // Filtrar productos
    let filtered = products;
    
    if (activeCategory !== 'todos') {
        filtered = filtered.filter(product => product.category === activeCategory);
    }
    
    if (activeStyle !== 'todos') {
        filtered = filtered.filter(product => product.style === activeStyle);
    }

    // Generar HTML
    productsGrid.innerHTML = filtered.map(product => `
        <article class="producto-card">
            <img src="${product.image}" alt="${product.name}" class="producto-imagen">
            <div class="producto-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="producto-precio">$${product.price.toFixed(2)} MXN</p>
                <button class="boton" onclick="addToCart('${product.id}', '${product.name}', ${product.price}, '${product.image}')">
                    Agregar al Carrito
                </button>
            </div>
        </article>
    `).join('');
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Mostrar todos los productos inicialmente
    displayProducts();

    // Configurar filtros de categoría
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', () => {
            // Actualizar botones
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Actualizar filtro
            activeCategory = button.dataset.category;
            displayProducts();
        });
    });

    // Configurar filtros de estilo
    document.querySelectorAll('.sub-filter-btn').forEach(button => {
        button.addEventListener('click', () => {
            // Actualizar botones
            document.querySelectorAll('.sub-filter-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Actualizar filtro
            activeStyle = button.dataset.style;
            displayProducts();
        });
    });
}); 