class ShoppingCart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart')) || [];
        this.total = 0;
        this.updateTotal();
    }

    addItem(product) {
        const existingItem = this.items.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({...product, quantity: 1});
        }
        this.updateCart();
        this.showNotification('Producto agregado al carrito');
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.updateCart();
    }

    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            item.quantity = parseInt(quantity);
            if (item.quantity <= 0) {
                this.removeItem(productId);
            }
        }
        this.updateCart();
    }

    updateTotal() {
        this.total = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }

    updateCart() {
        this.updateTotal();
        localStorage.setItem('cart', JSON.stringify(this.items));
        this.updateCartUI();
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => notification.classList.add('show'), 100);
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }

    updateCartUI() {
        const cartCount = document.getElementById('cart-count');
        const cartTotal = document.getElementById('cart-total');
        const cartItems = document.getElementById('cart-items');

        if (cartCount) {
            cartCount.textContent = this.items.reduce((sum, item) => sum + item.quantity, 0);
        }

        if (cartTotal) {
            cartTotal.textContent = `$${this.total.toFixed(2)} MXN`;
        }

        if (cartItems) {
            if (this.items.length === 0) {
                cartItems.innerHTML = '<div class="cart-empty">Tu carrito está vacío</div>';
            } else {
                cartItems.innerHTML = this.items.map(item => `
                    <div class="cart-item" data-id="${item.id}">
                        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                        <div class="cart-item-details">
                            <h4>${item.name}</h4>
                            <p>$${item.price.toFixed(2)} MXN</p>
                            <div class="quantity-controls">
                                <button onclick="cart.updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
                                <span>${item.quantity}</span>
                                <button onclick="cart.updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
                            </div>
                        </div>
                        <button class="remove-item" onclick="cart.removeItem('${item.id}')">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                `).join('');
            }
        }
    }

    clearCart() {
        this.items = [];
        this.updateCart();
    }
}

// Inicializar el carrito
const cart = new ShoppingCart();

// Función para mostrar/ocultar el carrito
function toggleCart() {
    const cartPanel = document.getElementById('cart-panel');
    if (cartPanel) {
        cartPanel.classList.toggle('show');
    }
}

// Función para agregar producto al carrito
function addToCart(productId, name, price, image) {
    cart.addItem({
        id: productId,
        name: name,
        price: price,
        image: image
    });
}

// Función para proceder al pago
function procederPago() {
    if (cart.items.length === 0) {
        cart.showNotification('El carrito está vacío');
        return;
    }
    
    const mensaje = `¿Deseas proceder con la compra de ${cart.items.length} productos por un total de $${cart.total.toFixed(2)} MXN?`;
    if (confirm(mensaje)) {
        cart.showNotification('Procesando tu pago...');
        setTimeout(() => {
            cart.items = [];
            cart.updateCart();
            cart.showNotification('¡Gracias por tu compra!');
            toggleCart();
        }, 2000);
    }
}

// Hacer globales las funciones necesarias
window.cart = cart;
window.toggleCart = toggleCart;
window.addToCart = addToCart;
window.procederPago = procederPago;

// Estilos para la notificación
const style = document.createElement('style');
style.textContent = `
    .notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--color-primary);
        color: white;
        padding: 12px 24px;
        border-radius: 4px;
        opacity: 0;
        transform: translateY(10px);
        transition: all 0.3s ease;
        z-index: 1001;
    }
    .notification.show {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style); 