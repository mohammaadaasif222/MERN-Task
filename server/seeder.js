import Product from './models/product.model.js';
import {products} from './products.js'
import {connectDataBase} from './utils/connectDB.js'


const uri = 'mongodb+srv://test:s57hbgML5XGiQHAp@cluster0.hmulnre.mongodb.net/'
connectDataBase(uri)
const seedProducts =async ()=>{
    try {
        // await Product.deleteMany();
        console.log("Deleting all products");

        await Product.insertMany(products)
        console.log("adding all products from file");
        
    } catch (error) {
        console.log(error);
        process.exit();
    }
}

seedProducts()