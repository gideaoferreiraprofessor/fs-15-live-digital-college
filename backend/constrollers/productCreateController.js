import Product from "../models/product.js"

async function productCreateController(request, response) {
    console.log(request.body)
    const product = await Product.create(request.body)
    return response.json(product)
}

export default productCreateController
