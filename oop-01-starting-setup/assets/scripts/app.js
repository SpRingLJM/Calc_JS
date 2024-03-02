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

class ProductItem {
    constructor(product) {
        this.product = product;
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
        const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul'); 
    // ul = unordered list
    prodList.className = 'product-list';
    for(const prod of this.products) {
        const productItem = new ProductItem(prod);
        const prodEl = productItem.render(); 
        prodList.append(prodEl);
    }
    renderHook.append(prodList);
    }
}

const productList = new ProductList();
productList.render();

// 28 Line : if you want to use standard dollar character, you will use 'Escape Character(\$)'