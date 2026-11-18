import Product from "../../../models/product.js"

async function detailsController(request, response) {
    const productId = request.params.id

    const product = await Product.findByPk(productId)

    return response.json(product)
}

export default detailsController 