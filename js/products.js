// Configuración de productos
const products = [
    // Collares
    {
        id: 'collar01',
        name: 'Collar Cadena Dorada',
        description: 'Elegante collar de cadena con diseño moderno',
        price: 24.99,
        category: 'collares',
        subcategory: 'casual',
        image: 'images/De Vigo fotos/collares/collar01.jpg',
        featured: true,
        stock: 10
    },
    {
        id: 'collar02',
        name: 'Collar Perlas Delicadas',
        description: 'Collar de perlas sintéticas con acabado brillante',
        price: 29.99,
        category: 'collares',
        subcategory: 'elegante',
        image: 'images/De Vigo fotos/collares/collar02.jpg',
        featured: true,
        stock: 8
    },
    {
        id: 'collar03',
        name: 'Gargantilla Moderna',
        description: 'Gargantilla con diseño contemporáneo',
        price: 19.99,
        category: 'collares',
        subcategory: 'casual',
        image: 'images/De Vigo fotos/collares/collar03.jpg',
        featured: false,
        stock: 15
    },
    {
        id: 'collar04',
        name: 'Collar Fantasía Brillante',
        description: 'Collar con detalles brillantes y diseño único',
        originalPrice: 34.99,
        price: 27.99,
        category: 'collares',
        subcategory: 'elegante',
        image: 'images/De Vigo fotos/collares/collar04.jpg',
        featured: false,
        stock: 12
    },

    // Aretes
    {
        id: 'aretes01',
        name: 'Aretes Clásicos',
        description: 'Aretes con diseño clásico y versátil',
        price: 14.99,
        category: 'aretes',
        subcategory: 'casual',
        image: 'images/De Vigo fotos/aretes/aretes01.jpg',
        featured: true,
        stock: 20
    },
    {
        id: 'aretes02',
        name: 'Aretes Colgantes',
        description: 'Aretes largos con diseño elegante',
        price: 19.99,
        category: 'aretes',
        subcategory: 'elegante',
        image: 'images/De Vigo fotos/aretes/aretes02.jpg',
        featured: true,
        stock: 15
    },
    {
        id: 'aretes03',
        name: 'Aretes Modernos',
        description: 'Aretes con diseño geométrico moderno',
        price: 16.99,
        category: 'aretes',
        subcategory: 'casual',
        image: 'images/De Vigo fotos/aretes/aretes03.jpg',
        featured: false,
        stock: 18
    },
    {
        id: 'aretes04',
        name: 'Aretes Minimalistas',
        description: 'Aretes pequeños con estilo minimalista',
        price: 12.99,
        category: 'aretes',
        subcategory: 'casual',
        image: 'images/De Vigo fotos/aretes/aretes04.jpg',
        featured: false,
        stock: 25
    },
    {
        id: 'aretes05',
        name: 'Aretes Brillantes',
        description: 'Aretes con cristales brillantes',
        originalPrice: 24.99,
        price: 19.99,
        category: 'aretes',
        subcategory: 'elegante',
        image: 'images/De Vigo fotos/aretes/aretes05.jpg',
        featured: true,
        stock: 10
    },

    // Pulseras
    {
        id: 'pulsera01',
        name: 'Pulsera Delicada',
        description: 'Pulsera fina con diseño delicado',
        price: 16.99,
        category: 'pulseras',
        subcategory: 'casual',
        image: 'images/De Vigo fotos/pulseras/pulsera01.jpg',
        featured: true,
        stock: 20
    },
    {
        id: 'pulsera02',
        name: 'Pulsera Moderna',
        description: 'Pulsera con diseño contemporáneo',
        price: 18.99,
        category: 'pulseras',
        subcategory: 'casual',
        image: 'images/De Vigo fotos/pulseras/pulsera02.jpg',
        featured: false,
        stock: 15
    },
    {
        id: 'pulsera03',
        name: 'Pulsera Elegante',
        description: 'Pulsera con detalles brillantes',
        originalPrice: 29.99,
        price: 22.99,
        category: 'pulseras',
        subcategory: 'elegante',
        image: 'images/De Vigo fotos/pulseras/pulsera03.jpg',
        featured: true,
        stock: 12
    },
    {
        id: 'pulsera04',
        name: 'Pulsera Fantasia',
        description: 'Pulsera con diseño único y llamativo',
        price: 21.99,
        category: 'pulseras',
        subcategory: 'elegante',
        image: 'images/De Vigo fotos/pulseras/pulsera04.jpg',
        featured: false,
        stock: 18
    }
];

// Configuración de categorías
const categories = {
    collares: {
        name: 'Collares',
        description: 'Collares y gargantillas para todo estilo',
        subcategories: ['casual', 'elegante']
    },
    aretes: {
        name: 'Aretes',
        description: 'Aretes y pendientes con diseños únicos',
        subcategories: ['casual', 'elegante']
    },
    pulseras: {
        name: 'Pulseras',
        description: 'Pulseras para complementar tu look',
        subcategories: ['casual', 'elegante']
    }
};

// Funciones de utilidad para productos
const ProductUtils = {
    // Obtener productos por categoría
    getByCategory: (category) => {
        return products.filter(product => product.category === category);
    },

    // Obtener productos por subcategoría
    getBySubcategory: (category, subcategory) => {
        return products.filter(product => 
            product.category === category && 
            product.subcategory === subcategory
        );
    },

    // Obtener productos destacados
    getFeatured: () => {
        return products.filter(product => product.featured);
    },

    // Obtener productos en oferta
    getOnSale: () => {
        return products.filter(product => product.originalPrice);
    },

    // Verificar stock
    checkStock: (productId) => {
        const product = products.find(p => p.id === productId);
        return product ? product.stock > 0 : false;
    },

    // Ordenar productos
    sortProducts: (productList, criteria) => {
        const sortedProducts = [...productList];
        switch(criteria) {
            case 'menor':
                return sortedProducts.sort((a, b) => a.price - b.price);
            case 'mayor':
                return sortedProducts.sort((a, b) => b.price - a.price);
            case 'popular':
                return sortedProducts.sort((a, b) => b.stock - a.stock);
            default:
                return sortedProducts;
        }
    }
};

// Exportar las configuraciones y utilidades
window.DeVigoStore = {
    products,
    categories,
    ProductUtils
}; 