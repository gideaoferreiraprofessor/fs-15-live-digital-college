import Product from "../../../models/product.js"

async function listController(request, response) {
  let limit = 10
  let orderBy = 'DESC'
  const maxLimit = 30
  
  if (request.query.limit && request.query.limit <= maxLimit) {
    limit = Number.parseInt(request.query.limit)
  }

  if (request.query.orderby && (request.query.orderby === 'DESC' || request.query.orderby === 'ASC')) {
    orderBy = request.query.orderby
  }

  const products = await Product.findAll({
    order: [
      ['createdAt', orderBy]
    ],
    limit: limit,
  })

  return response.json(products)
}

export default listController


// /store/products?limit=100
