import Product from "../models/product.js"

async function productDetailsController(request, response) {
    const id = request.params.id
    const product = await Product.findByPk(id)
    return  response.json(product)
}

export default productDetailsController