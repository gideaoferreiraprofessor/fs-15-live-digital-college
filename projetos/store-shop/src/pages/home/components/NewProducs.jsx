
import ProductRate from "../../../assets/images/products/product-rate.png"
import TShirtLongsize from "../../../assets/images/products/t-shirt-longsize.png"
import ProductCard from "../../../components/product/card/ProductCard"
import { NavLink } from "react-router"
import { useEffect } from "react"
import { useState } from "react"

function NewProducs() {
  const [productsList, setProductsList] = useState([])

  async function fetchProducts() {
    const limit = 4
    const request = await fetch(`http://localhost:8001/store/products?limit=${limit}`)
    const response = await request.json()
    setProductsList(response)
  }

  useEffect(() => {
    // eslint-disable-next-line
    fetchProducts()
  },[])

  return (
      <section>
        <h3 className="text-4xl w-full text-center mt-13 mb-15">NOVOS PRODUTOS</h3>
        <div className="flex justify-between gap-4">
          {
            productsList && productsList.length > 0 ?
              productsList.map((product, index) => (
                <ProductCard
                  key={index}
                  image={TShirtLongsize}
                  productRate={ProductRate}
                  title={product.name}
                  price={product.price}
                />
              ))
              :
              <p>Nenhum produto encontrado</p>
          }
        </div>
        <div className="w-full mt-10 flex justify-center">
          <NavLink to="produtos">
            <button
              className="border rounded-4xl! py-3 px-20 border-gray-300 cursor-pointer"
            >
              Ver Todos
            </button>
          </NavLink>
        </div>
      </section>
  );
}

export default NewProducs