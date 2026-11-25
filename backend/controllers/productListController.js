import Product from "../models/product.js"

async function productListController(request, response) {
  const maxLimitPerPage = 30
  const minLimitPerPage = 10
  let limit = minLimitPerPage
  let page = parseInt(request.query.page) ? parseInt(request.query.page) : 1

  if (request.query.limit && request.query.limit > maxLimitPerPage) {
    limit = maxLimitPerPage
  }

  if (request.query.limit && request.query.limit >= minLimitPerPage && request.query.limit <= maxLimitPerPage) {
    limit = parseInt(request.query.limit)
  }

  const offset = (page - 1) * limit

  const items = await Product.findAndCountAll({
    limit: limit,
    offset: offset
  })

  const products = {
    data: items.rows,
    pagination: {
      total: items.count,
      totalPage: Math.ceil(items.count / limit),
      current: page,
      limit
    }
  }

  return response.json(products)
}

export default productListController