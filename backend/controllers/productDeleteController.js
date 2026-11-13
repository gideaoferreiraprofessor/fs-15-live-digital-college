import Product from "../models/product.js"

async function productDeleteController(request, response) {
    const productId = request.params.id

    const product = await Product.destroy({
        where: {
            id: productId
        }
    })
    return response.json(product)
}


export default productDeleteController