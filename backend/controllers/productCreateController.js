import Product from "../models/product.js"

async function productCreateController(request, response) {
    console.log(request.body)
    console.log(request.file)

    const data = {
        name: request.body.name,
        description: request.body.description,
        price: request.body.price,
        stock: request.body.stock,
        image: request.file.originalname
    }
    
    const product = await Product.create(data)
    return response.json(product)
}

export default productCreateController
