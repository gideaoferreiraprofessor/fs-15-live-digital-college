import Product from "../models/product.js"

async function productUpdateController(request, response) {
    const id = request.params.id
    const body = request.body

    const product = await Product.update({
        name: body.name,
        description: body.description,
        price: body.price,
        stock: body.stock
    }, {
        where: { id: id }
    })
    
    return response.json(product)
}

export default productUpdateController