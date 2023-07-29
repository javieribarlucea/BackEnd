class ProductManager{

    constructor(){
        this.product=[];
    }

    static id=0;
    addProduct(title,description,price,image,code,stock){
        ProductManager.id++
        this.product.push({title,description,price,image,code,stock,id:ProductManager.id});

    }

    getProduct(){
        return this.product;
    }

    getProductById(id){
        if(!this.product.find((producto)=>producto.id===id)){
            console.log("Not Found")
        }else{
            console.log("Existe")
        }

    }
}

const productos=new ProductManager;

console.log(productos.getProduct());

productos.addProduct("producto prueba1","Este es un producto prueba",100,"Sin imagen","abc123",25);
productos.addProduct("tproducto prueba2","Este es un producto prueba2",200,"Sin imagen","abc123",25);

console.log(productos.getProduct());

productos.getProductById(5);