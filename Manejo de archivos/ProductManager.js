import{ promises as fs, readFile} from "fs"

class ProductManager{
    constructor(){
        this.patch="./productos.txt"
        this.products =[]
    }

    static id=0

    addProduct=async(title,description,price,imagen,code,stock)=>{
        ProductManager.id++
        let newProduct={
            id:ProductManager.id,
            title,
            description,
            price,
            imagen,
            code,
            stock

        };
        this.products.push(newProduct)


        await fs.writeFile(this.patch,JSON.stringify(this.products))
    

    };

    readProducts = async()=>{
            let respuesta = await fs.readFile(this.patch,"utf-8")
            return JSON.parse(respuesta)
    }


    getProducts = async()=>{
            let respuesta2 =  await this.readProducts()
            return  console.log(respuesta2) 
     }

    
    getProductsById=async(id)=>{
        let respuesta3=await this.readProducts()
        if(!respuesta3.find(product=>product.id===id)){
            console.log("Producto no encontrado")
        }else{
        console.log(respuesta3.find(product=>product.id===id))
        }
    }
    deleteProductById= async()=>{
        let respuesta3=await this.readProducts();
        let productFilter=respuesta3.filter(products=>products.id!=id) 
        await fs.writeFile(this.patch,JSON.stringify(productFilter))
        console.log("producto eliminado");
    }

    updateProducts = async({id,...producto})=>{
        await this.deleteProductById(id);
    let productOld= await this.readProducts();

    let productsMod=[{...producto, id},...productOld]
    await fs.writeFile(this.patch,JSON.stringify(productmod))
    }
}
const productos =new ProductManager;

