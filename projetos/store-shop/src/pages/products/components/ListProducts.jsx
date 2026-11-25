import ProductCard from "../../../components/product/card/ProductCard";
import ProductRate from "../../../assets/images/products/product-rate.png"
import { useEffect, useState } from "react";
import { NavLink } from "react-router"
import { Paginator } from '@primereact/ui/paginator';
import { AngleDoubleLeft } from '@primeicons/react/angle-double-left';
import { AngleDoubleRight } from '@primeicons/react/angle-double-right';
import { AngleLeft } from '@primeicons/react/angle-left';
import { AngleRight } from '@primeicons/react/angle-right';
import { EllipsisH } from '@primeicons/react';

function ListProducts() {

  const [productsList, setProductsList] = useState([])
  const [pagination, setPagination] = useState({})
  let perPage = 15
  let orderBy = "DESC"
  
  async function fetchProducts(page=1, limit=perPage, orderby=orderBy) {

    const request = await fetch(`http://localhost:8001/store/products?limit=${limit}&orderby=${orderby}&page=${page}`)
    const response = await request.json()
    setProductsList(response.data)
    setPagination(response.pagination)
  }

  function setPage(page) {
    fetchProducts(page)
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
            <p className="text-sm!">
              Mostrando {(pagination.current - 1) * perPage === 0 ? 1 : (pagination.current - 1) * perPage} - {perPage * pagination.current > pagination.total ? pagination.total : perPage * pagination.current} de {pagination.total} produtos
            </p>
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
      <Paginator.Root
        className="mt-4"
        total={pagination.total}
        itemsPerPage={pagination.limit}
        onPageChange={(event) => setPage(event.value)}
      >
        <Paginator.Content>
          <Paginator.First>
            <AngleDoubleLeft />
          </Paginator.First>
          <Paginator.Prev>
            <AngleLeft />
          </Paginator.Prev>

          <Paginator.Pages>
            {
              ({paginator}) =>
                paginator?.pages.map((item, index) =>
                  item.type === 'page' ? (
                    <Paginator.Page key={index} value={item.value}/>
                  ) : (
                      <Paginator.Ellipsis key={index} >
                        <EllipsisH />
                      </Paginator.Ellipsis>
                  )
                )
            }
          </Paginator.Pages>


          <Paginator.Next>
            <AngleRight />
          </Paginator.Next>
          <Paginator.Last>
            <AngleDoubleRight />
          </Paginator.Last>
        </Paginator.Content>
      </Paginator.Root>
      </div>
    </>
  )
}

export default ListProducts;