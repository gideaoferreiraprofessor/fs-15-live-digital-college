import Product from "../models/product.js"

export async function productListController(request, response) {
  const products = await Product.findAll()
  return response.json(products)
}
