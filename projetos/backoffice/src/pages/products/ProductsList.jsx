import { useEffect, useState } from "react"
import { DataTable } from '@primereact/ui/datatable';
import { Button } from '@primereact/ui/button';
import { Drawer } from '@primereact/ui/drawer';
import { Times } from '@primeicons/react/times';
import { Plus } from '@primeicons/react/plus';
import { Textarea } from '@primereact/ui/textarea';
import { InputText } from '@primereact/ui/inputtext';
import { InputNumber } from '@primereact/ui/inputnumber';
import { Label } from '@primereact/ui/label';

function ProductsList() {
  const [products, setProducts] = useState([])
  const [createProductDrawer, setCreateProductDrawer] = useState(false)

  const [name, setName] = useState()
  const [description, setDescription] = useState()
  const [price, setPrice] = useState()
  const [stock, setStock] = useState()


  async function listProducts() {
    const request = await fetch('http://localhost:8001/products')
    const response = await request.json()
    setProducts(response)
    console.log(response)
  }

  function openCreateProductDrawer() {
    setCreateProductDrawer(!createProductDrawer)
  }

  async function createProduct() {
    try {
      const product = {
        name: name,
        description: description,
        price: price,
        stock: stock
      }

      await fetch('http://localhost:8001/products',
        {
          method: 'POST',
          body: JSON.stringify(product),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )

      await listProducts()
      openCreateProductDrawer()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    listProducts()
  }, [])
  
  return (
    <>
      <div>
        <Button onClick={openCreateProductDrawer}>
          <Plus />
        </Button>
      </div>
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

      {/* Criar produto */}
      <Drawer.Root position="right" open={createProductDrawer} onOpenChange={openCreateProductDrawer}>
        <Drawer.Portal>
          <Drawer.Backdrop />
          <Drawer.Popup className="!w-110">
            <Drawer.Header>
              <Drawer.Title>
                Cadastro de produtos
              </Drawer.Title>
              <Drawer.Close className="cursor-pointer">
                <Times />
              </Drawer.Close>
            </Drawer.Header>
            <Drawer.Content>
              <form className="w-full">
                <div>
                  <Label>Nome</Label>
                  <InputText placeholder="Camisa ofical Liverpool" className="w-full mt-2" onInput={(e) => setName(e.target.value)} />
                </div>
                <div className="mt-5">
                  <Label>Descrição</Label>
                  <Textarea
                    placeholder="Camisal oficial de alta qualidade para amantes do futebol britânico"
                    className="w-full mt-2"
                    onInput={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="mt-5 grid grid-cols-2 w-full gap-4">
                  <div className="col-span-1">
                    <Label>Preço</Label>
                    <InputNumber.Root className="w-full" mode="currency" currency="BRL" locale="pt-BR" onValueChange={(e) => setPrice(e.value)} >
                      <InputNumber.Input />
                    </InputNumber.Root>
                  </div>
                  <div className="col-span-1">
                    <Label>Estoque</Label>
                    <InputNumber.Root className="w-full" onValueChange={(e) => setStock(e.value)}>
                      <InputNumber.Input />
                    </InputNumber.Root>
                  </div>
                </div>
              </form>
            </Drawer.Content> 
            <Drawer.Footer>
              <div className="flex justify-between">
                <Button severity="secondary" onClick={openCreateProductDrawer}>
                  Cancelar
                </Button>
                <Button onClick={createProduct}>
                  Cadastrar
                </Button>
              </div>
            </Drawer.Footer>
          </Drawer.Popup>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  )
}

export default ProductsList
