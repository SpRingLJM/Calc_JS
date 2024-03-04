class Product {
    // title = 'DEFAULT';
    // imageUrl;
    // description;
    // price;

    constructor(title,image,desc, price) {
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.price = price;
    }
}

class ShoppingCart {
    items = [];

    set cartItems(value){
        this.items = value;
        // value will be array of cartItems.
        // So, this means overwriting the existing array with a new array.
        this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`;
    }

    get totalAmount() {
        const sum = this.items.reduce((prevValue, curItem) => prevValue +curItem.price
        , 0);
        // first parameter is 'anonymous arrow function' '=>'
        // second optional parameter is initial value(0).
        // anonymous arrow fucntion has many parameters. 
        // prevValue, curItem
        return sum;
    }

    addProdcut(product) {
        const updatedItems = [...this.items];
        updatedItems.push(product);
        this.cartItems = updatedItems;
        
    }

    render() {
        const cartEl = document.createElement('section');
        cartEl.innerHTML =`
            <h2>Total: \$${0}</h2>
            <button>Order Now!</button>
            `;
            cartEl.className = 'cart';
            this.totalOutput = cartEl.querySelector('h2');
            return cartEl;
    }
}
class ProductItem {
    constructor(product) {
        this.product = product;
    }

    addToCart() {
        App.addProdcutToCart(this.product);
    }

    render() {
        const prodEl = document.createElement('li');
        prodEl.className = 'product-item';
        prodEl.innerHTML = `
        <div>
            <img src="${this.product.imageUrl}" alt="${this.product.title}" >
            <div class="product-item__content">
                <h2>${this.product.title}</h2>
                <h3>\$${this.product.price}</h3>
                <p>${this.product.description}</p>
                <button>Add to Cart</button>
            </div>
        </div>
        `;
        const addCartButton = prodEl.querySelector('button');
        addCartButton.addEventListener('click', this.addToCart.bind(this));
        return prodEl;
    }
}
// below the class has a 'products' array.
class ProductList {
    products = [
        new Product(
            'A Pillow',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOy5mqWGX5ZEYG2y9v151Novuo6x7sEne1ypjogJlYEw&s',
            'A soft pillow!',
            19.99
        ),
        new Product(
            'A Carpet',
            'https://m.media-amazon.com/images/I/81GyZXnRB5L._AC_UF894,1000_QL80_.jpg',
            'A carpet which you might like - or not.', 89.99
        )
    ];

    constructor() {
        
    }

    render() {
    const prodList = document.createElement('ul'); 
    // ul = unordered list
    prodList.className = 'product-list';
    for(const prod of this.products) {
        const productItem = new ProductItem(prod);
        const prodEl = productItem.render(); 
        prodList.append(prodEl);
    }
        return prodList;
    }
}

class Shop {
    render(){
        const renderHook = document.getElementById('app');
        this.cart = new ShoppingCart();
        const cartEl = this.cart.render();
        const productList = new ProductList();
        const prodListEl = productList.render();

        renderHook.append(cartEl);
        renderHook.append(prodListEl);
    }
}

class App {  // static property, static method -> static init()
    static cart;

    static init() {
        const shop = new Shop();
        shop.render();
        this.cart = shop.cart;
    }

    static addProdcutToCart(product){
        this.cart.addProdcut(product);
    }
}

App.init();

// 28 Line : if you want to use standard dollar character, you will use 'Escape Character(\$)'