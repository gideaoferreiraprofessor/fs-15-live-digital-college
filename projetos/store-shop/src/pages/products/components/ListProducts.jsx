import ProductCard from "../../../components/product/card/ProductCard";
import ProductRate from "../../../assets/images/products/product-rate.png"
import { useEffect, useState } from "react";
import { NavLink } from "react-router"

function ListProducts() {

  const [productsList, setProductsList] = useState([])
  const limit = 15
  
  async function fetchProducts() {

    const request = await fetch(`http://localhost:8001/store/products?limit=${limit}&orderby=DESC`)
    const response = await request.json()
    setProductsList(response)
  }

  useEffect(() => {
    // eslint-disable-next-line
    fetchProducts()
  }, [])
  

  return (
    <>
      <div className="w-full">
        <div className="mb-4 flex justify-between">
          <h1>Todos os produtos</h1>
          <div className="flex gap-6">
            <p className="text-sm!">Mostrando 1 - {limit} de 100 produtos</p>
            <p className="text-sm!">Ordenar por: </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-5">
          {productsList && productsList.length > 0 ?
            productsList.map((product, index) => (
            <NavLink to={`/produto-detalhes/${product.id}`} className="w-[31%]">
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
            <p>Carregando...</p>
          }
        </div>
        <hr className="text-gray-300 mt-6 mb-6" />
        <div className="flex justify-between">
          <button>SETA PARA ESQUERDA</button>
          <div> numeros das paginas</div>
          <button>SETA PARA DIREITA</button>
        </div>
      </div>
    </>
  )
}

export default ListProducts;