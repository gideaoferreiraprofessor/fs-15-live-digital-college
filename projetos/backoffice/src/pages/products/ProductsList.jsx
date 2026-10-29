import { useEffect, useState } from "react"
import { DataTable } from '@primereact/ui/datatable';

function ProductsList() {
  const [products, setProducts] = useState([])

  async function listProducts() {
    const request = await fetch('http://localhost:8001/products')
    const response = await request.json()
    setProducts(response)
    console.log(response)
  }

  useEffect(() => {
    listProducts()
  }, [])
  
  return (
    <>
      <DataTable.Root data={products}>
        <DataTable.TableContainer>
          <DataTable.Table>
            <DataTable.THead>
              <DataTable.TFootRow>
                <DataTable.THeadCell>
                  ID
                </DataTable.THeadCell>
                <DataTable.THeadCell>
                  NOME
                </DataTable.THeadCell>
                <DataTable.THeadCell>
                  DESCRIÇÃO
                </DataTable.THeadCell>
                <DataTable.THeadCell>
                  PREÇO
                </DataTable.THeadCell>
                <DataTable.THeadCell>
                  ESTOQUE
                </DataTable.THeadCell>
                <DataTable.THeadCell>
                </DataTable.THeadCell>
              </DataTable.TFootRow>
            </DataTable.THead>
            <DataTable.TBody>
              {({ item }) => (
                <DataTable.Row key={item.id}>
                  <DataTable.Cell>
                    {item.id}
                  </DataTable.Cell>
                  <DataTable.Cell>
                    {item.name}
                  </DataTable.Cell>
                  <DataTable.Cell>
                    {item.description}
                  </DataTable.Cell>
                  <DataTable.Cell>
                    {item.price}
                  </DataTable.Cell>
                  <DataTable.Cell>
                    {item.stock}
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <button className="!bg-blue-400 px-3 py-1 rounded cursor-pointer text-white">Editar</button>
                    <button className="!bg-red-400 px-3 py-1 rounded cursor-pointer text-white">Deletar</button>
                  </DataTable.Cell>
                </DataTable.Row>
              )}
            </DataTable.TBody>
          </DataTable.Table>
        </DataTable.TableContainer>
      </DataTable.Root>
    </>
  )
}

export default ProductsList
