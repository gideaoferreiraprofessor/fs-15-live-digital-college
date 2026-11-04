import Product from "../models/product.js"

async function productListController(request, response) {
  const products = await Product.findAll()
  return response.json(products)
}

export default productListController
