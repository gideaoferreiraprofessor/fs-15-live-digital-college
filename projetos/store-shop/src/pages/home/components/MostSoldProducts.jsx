
import ProductRate from "../../../assets/images/products/product-rate.png"
import ProductCard from "../../../components/product/card/ProductCard"
import { useState } from "react"
import { useEffect } from "react"
import { NavLink } from "react-router"

function MostSoldProducts() {
  const [productsList, setProductsList] = useState([])

  async function fetchProducts() {
    const limit = 4
    const request = await fetch(`http://localhost:8001/store/products?limit=${limit}&orderby=ASC`)
    const response = await request.json()
    setProductsList(response)
  }

  useEffect(() => {
    // eslint-disable-next-line
    fetchProducts()
  },[])
  return (
      <section>
        <h3 className="text-4xl w-full text-center mt-13 mb-15">MAIS VENDIDOS</h3>
        <div className="flex justify-between gap-4">
        {
          productsList && productsList.length > 0 ?
            productsList.map((product, index) => (
            <NavLink to={`/produto-detalhes/${product.id}`}>
              <ProductCard
                key={index}
                image={`http://localhost:8001/assets/products-images/${product.image}`}
                productRate={ProductRate}
                title={product.name}
                price={product.price}
              />
              </NavLink>
          ))
            :
            <p>Productos nao encontrado</p>
        }
        </div>
        <div className="w-full mt-10 flex justify-center">
          <button className="border rounded-4xl! py-3 px-20 border-gray-300 cursor-pointer">Ver Todos</button>
        </div>
      </section>
  );
}

export default MostSoldProducts