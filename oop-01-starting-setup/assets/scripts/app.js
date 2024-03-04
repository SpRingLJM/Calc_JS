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

    class ElementAttribute {
        constructor(attrName, attrValue){
            this.name = attrName;
            this.value = attrValue;
        }
    }

    class Component{
        constructor(renderHookId){
            this.hookId = renderHookId;
        }
        
        createRootElement(tag, cssClasses, attributes){
            const rootElement = document.createElement(tag);
            if(cssClasses) {
                rootElement.className = cssClasses;
            }
            if(attributes && attributes.length > 0) {
                for(const attr of attributes){
                    rootElement.setAttribute(attr.name, attr.value);
                }
            }
            document.getElementById(this.hookId).append(rootElement);
            return rootElement; 
        }
    }

class ShoppingCart extends Component {
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

    constructor(renderHookId) {
        super(renderHookId);
    }

    addProdcut(product) {
        const updatedItems = [...this.items];
        updatedItems.push(product);
        this.cartItems = updatedItems;
        
    }

    render() {
        const cartEl = this.createRootElement('section', 'cart');
        cartEl.innerHTML =`
            <h2>Total: \$${0}</h2>
            <button>Order Now!</button>
            `;
            this.totalOutput = cartEl.querySelector('h2');
    }
}
class ProductItem extends Component {
    constructor(product, renderHookId) {
        super(renderHookId);
        this.product = product;
        // In this case, calling "super" should precede tasks related to "this".
    }

    addToCart() {
        App.addProdcutToCart(this.product);
    }

    render() {
        const prodEl = this.createRootElement('li', 'product-item');
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
    }
}
// below the class has a 'products' array.
class ProductList extends Component {
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

    constructor(renderHookId) {
        super(renderHookId);
    }

    render() {
        const prodList = this.createRootElement('ul', 'product-list', [new ElementAttribute('id', 'prod-list')]);
        // ul = unordered list
        for(const prod of this.products) {
            const productItem = new ProductItem(prod, 'prod-list');
            productItem.render();
        }
    }
}

class Shop {
    render(){
        this.cart = new ShoppingCart('app');
        this.cart.render();
        const productList = new ProductList('app');
        productList.render();
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

// 49, 76, 100 Line : if you want to use standard dollar character, you will use 'Escape Character(\$)'