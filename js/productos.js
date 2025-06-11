// Datos de ejemplo de productos
const productos = [
    // Aretes
    {
        id: 1,
        nombre: "Aretes Flor de Plata",
        precio: 890,
        categoria: "aretes",
        estilo: "elegante",
        imagen: "images/De Vigo fotos/aretes/aretes01.jpg",
        descripcion: "Elegantes aretes con diseño floral en plata"
    },
    {
        id: 2,
        nombre: "Aretes Cascada",
        precio: 950,
        categoria: "aretes",
        estilo: "casual",
        imagen: "images/De Vigo fotos/aretes/aretes02.jpg",
        descripcion: "Aretes con diseño fluido tipo cascada"
    },
    {
        id: 3,
        nombre: "Aretes Mariposa",
        precio: 780,
        categoria: "aretes",
        estilo: "elegante",
        imagen: "images/De Vigo fotos/aretes/aretes03.jpg",
        descripcion: "Delicados aretes con forma de mariposa"
    },
    {
        id: 4,
        nombre: "Aretes Gota de Plata",
        precio: 850,
        categoria: "aretes",
        estilo: "casual",
        imagen: "images/De Vigo fotos/aretes/aretes04.jpg",
        descripcion: "Aretes minimalistas en forma de gota"
    },
    {
        id: 5,
        nombre: "Aretes Espiral",
        precio: 920,
        categoria: "aretes",
        estilo: "elegante",
        imagen: "images/De Vigo fotos/aretes/aretes05.jpg",
        descripcion: "Aretes con diseño en espiral"
    },
    {
        id: 6,
        nombre: "Aretes Luna Creciente",
        precio: 990,
        categoria: "aretes",
        estilo: "casual",
        imagen: "images/De Vigo fotos/aretes/aretes06.jpg",
        descripcion: "Aretes inspirados en la luna creciente"
    },
    {
        id: 7,
        nombre: "Aretes Hoja de Plata",
        precio: 860,
        categoria: "aretes",
        estilo: "elegante",
        imagen: "images/De Vigo fotos/aretes/aretes07.jpg",
        descripcion: "Aretes con motivo de hojas naturales"
    },
    {
        id: 8,
        nombre: "Aretes Geometría",
        precio: 890,
        categoria: "aretes",
        estilo: "casual",
        imagen: "images/De Vigo fotos/aretes/aretes08.jpg",
        descripcion: "Aretes con diseño geométrico moderno"
    },
    {
        id: 9,
        nombre: "Aretes Ondas",
        precio: 950,
        categoria: "aretes",
        estilo: "elegante",
        imagen: "images/De Vigo fotos/aretes/aretes09.jpg",
        descripcion: "Aretes con patrón ondulado"
    },
    {
        id: 10,
        nombre: "Aretes Estrella",
        precio: 880,
        categoria: "aretes",
        estilo: "casual",
        imagen: "images/De Vigo fotos/aretes/aretes010.jpg",
        descripcion: "Aretes con forma de estrella"
    },
    {
        id: 11,
        nombre: "Aretes Cristal",
        precio: 1200,
        categoria: "aretes",
        estilo: "elegante",
        imagen: "images/De Vigo fotos/aretes/aretes011.jpg",
        descripcion: "Aretes con cristales incrustados"
    },
    {
        id: 12,
        nombre: "Aretes Flor de Luna",
        precio: 980,
        categoria: "aretes",
        estilo: "casual",
        imagen: "images/De Vigo fotos/aretes/aretes012.jpg",
        descripcion: "Aretes con diseño floral y lunar"
    },
    {
        id: 13,
        nombre: "Aretes Cascabel",
        precio: 850,
        categoria: "aretes",
        estilo: "elegante",
        imagen: "images/De Vigo fotos/aretes/aretes013.jpg",
        descripcion: "Aretes con pequeños cascabeles decorativos"
    },
    {
        id: 14,
        nombre: "Aretes Sol",
        precio: 920,
        categoria: "aretes",
        estilo: "casual",
        imagen: "images/De Vigo fotos/aretes/aretes014.jpg",
        descripcion: "Aretes inspirados en el sol"
    },
    {
        id: 15,
        nombre: "Aretes Lluvia",
        precio: 890,
        categoria: "aretes",
        estilo: "elegante",
        imagen: "images/De Vigo fotos/aretes/aretes015.jpg",
        descripcion: "Aretes con diseño de gotas de lluvia"
    },
    {
        id: 16,
        nombre: "Aretes Pluma",
        precio: 950,
        categoria: "aretes",
        estilo: "casual",
        imagen: "images/De Vigo fotos/aretes/aretes016.jpg",
        descripcion: "Aretes con forma de pluma delicada"
    },
    {
        id: 17,
        nombre: "Aretes Coral",
        precio: 1100,
        categoria: "aretes",
        estilo: "elegante",
        imagen: "images/De Vigo fotos/aretes/aretes017.jpg",
        descripcion: "Aretes inspirados en corales marinos"
    },
    {
        id: 18,
        nombre: "Aretes Perla",
        precio: 1300,
        categoria: "aretes",
        estilo: "elegante",
        imagen: "images/De Vigo fotos/aretes/aretes018.jpg",
        descripcion: "Aretes con perlas naturales"
    },

    // Pulseras
    {
        id: 19,
        nombre: "Pulsera Eslabones de Plata",
        precio: 1500,
        categoria: "pulseras",
        estilo: "casual",
        imagen: "images/De Vigo fotos/pulseras/pulsera01.jpg",
        descripcion: "Pulsera de eslabones en plata pura"
    },
    {
        id: 20,
        nombre: "Pulsera Tejido Fino",
        precio: 1800,
        categoria: "pulseras",
        estilo: "elegante",
        imagen: "images/De Vigo fotos/pulseras/pulsera02.jpg",
        descripcion: "Pulsera con tejido artesanal fino"
    },
    {
        id: 21,
        nombre: "Pulsera Perlas y Plata",
        precio: 2200,
        categoria: "pulseras",
        estilo: "elegante",
        imagen: "images/De Vigo fotos/pulseras/pulsera03.jpg",
        descripcion: "Pulsera combinada de perlas y plata"
    },
    {
        id: 22,
        nombre: "Pulsera Diseño Geométrico",
        precio: 1900,
        categoria: "pulseras",
        estilo: "casual",
        imagen: "images/De Vigo fotos/pulseras/pulsera04.jpg",
        descripcion: "Pulsera con patrones geométricos modernos"
    },

    // Collares
    {
        id: 23,
        nombre: "Collar Cascada de Plata",
        precio: 2500,
        categoria: "collares",
        estilo: "elegante",
        imagen: "images/De Vigo fotos/collares/collar01.jpg",
        descripcion: "Collar con diseño de cascada en plata"
    },
    {
        id: 24,
        nombre: "Collar Medallón Artesanal",
        precio: 2800,
        categoria: "collares",
        estilo: "casual",
        imagen: "images/De Vigo fotos/collares/collar02.jpg",
        descripcion: "Collar con medallón trabajado a mano"
    },
    {
        id: 25,
        nombre: "Collar Perlas y Plata",
        precio: 3200,
        categoria: "collares",
        estilo: "elegante",
        imagen: "images/De Vigo fotos/collares/collar03.jpg",
        descripcion: "Collar elegante de perlas y plata"
    },
    {
        id: 26,
        nombre: "Collar Diseño Contemporáneo",
        precio: 2900,
        categoria: "collares",
        estilo: "casual",
        imagen: "images/De Vigo fotos/collares/collar04.jpg",
        descripcion: "Collar con diseño moderno y contemporáneo"
    }
];

document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const productosGrid = document.getElementById('productos-grid');
    const filtroCategoria = document.querySelector('.filtro-categoria');
    const filtroEstilo = document.querySelector('.filtro-estilo');

    let categoriaActual = 'todos';
    let estiloActual = 'todos';

    // Función para renderizar productos
    function renderizarProductos(productos) {
        productosGrid.innerHTML = '';
        productos.forEach(producto => {
            const productoElement = document.createElement('div');
            productoElement.className = 'producto-card';
            productoElement.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-imagen">
                <div class="producto-info">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                    <p class="producto-precio">$${producto.precio} MXN</p>
                    <button class="add-to-cart" data-id="${producto.id}">
                        Agregar al carrito
                    </button>
                </div>
            `;
            productosGrid.appendChild(productoElement);
        });
    }

    // Función para filtrar productos
    function filtrarProductos() {
        let productosFiltrados = productos;

        if (categoriaActual !== 'todos') {
            productosFiltrados = productosFiltrados.filter(p => p.categoria === categoriaActual);
        }

        if (estiloActual !== 'todos') {
            productosFiltrados = productosFiltrados.filter(p => p.estilo === estiloActual);
        }

        renderizarProductos(productosFiltrados);
    }

    // Event listeners para los filtros
    filtroCategoria.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            filtroCategoria.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            categoriaActual = e.target.dataset.filter;
            filtrarProductos();
        }
    });

    filtroEstilo.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            filtroEstilo.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            estiloActual = e.target.dataset.style;
            filtrarProductos();
        }
    });

    // Event listener para agregar al carrito
    productosGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const productoId = parseInt(e.target.dataset.id);
            const producto = productos.find(p => p.id === productoId);
            if (producto) {
                // Aquí se integra con la funcionalidad del carrito
                const event = new CustomEvent('agregarAlCarrito', { detail: producto });
                document.dispatchEvent(event);
            }
        }
    });

    // Renderizar productos inicialmente
    renderizarProductos(productos);
}); 