import { Button } from "@primereact/ui/button";
import { Check } from '@primeicons/react/check';
import { toast } from '@primereact/ui/toaster';
import { Toast } from '@primereact/ui/toast';
import { Toaster } from '@primereact/ui/toaster';
import { InputNumber } from "@primereact/ui/inputnumber";
import { InputText } from "@primereact/ui/inputtext";
import { Label } from "@primereact/ui/label";
import { Textarea } from "@primereact/ui/textarea";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Times } from "@primeicons/react/times";

function ProductDetails() {
  const params = useParams();
  const [productDetails, setProductDetails] = useState({});

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);

  async function getProductById() {
    const request = await fetch(
      `http://localhost:8001/product/${params.productId}`,
    );
    const response = await request.json();
    setProductDetails(response);
    setName(response.name)
    setDescription(response.description)
    setPrice(response.price)
    setStock(response.stock)
  }

  async function updateProduct() {
    console.log(description)
    const product = {
      name: name,
      description: description,
      price: price,
      stock: stock
    }

    const request = await fetch(`http://localhost:8001/product/${params.productId}`, {
      method: 'PUT',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    await request.json()

    toast.success({
      title: 'Atualização de Produto',
      description: 'Produto atualizado com sucesso!',
      group: 'severity',
      duration: 2000
    })
  }

  useEffect(() => {
    // eslint-disable-next-line
    getProductById();
  },[]);

  return (
    <>
      <Toaster.Root group="severity">
        <Toaster.Portal>
          <Toaster.Region>
            {
              ({toaster}) => toaster?.toasts.map((toast, index) => (
                <Toast.Root key={index} toast={toast}>
                  <Toast.Content>
                    <Toast.Icon match="success">
                      <Check /> 
                    </Toast.Icon>
                    <Toast.Message>
                      <Toast.Title />
                      <Toast.Description />
                    </Toast.Message>
                    <Toast.Close>
                      <Times />
                    </Toast.Close>
                  </Toast.Content>
                </Toast.Root>
              ))
            }
          </Toaster.Region>
        </Toaster.Portal>
      </Toaster.Root>
      {productDetails && productDetails.id ? (
        <section className="bg-gray-50 px-5 py-3">
          <h1 className="text-3xl mb-6">Detalhes do produto</h1>
          <form className="w-full">
            <div>
              <Label>Nome</Label>
              <InputText
                defaultValue={name}
                placeholder="Camisa ofical Liverpool"
                className="w-full mt-2"
                onInput={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mt-5">
              <Label>Descrição</Label>
              <Textarea
                placeholder="Camisal oficial de alta qualidade para amantes do futebol britânico"
                className="w-full mt-2"
                defaultValue={description}
                onInput={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="mt-5 grid grid-cols-2 w-full gap-4">
              <div className="col-span-1">
                <Label>Preço</Label>
                <InputNumber.Root
                  className="w-full"
                  mode="currency"
                  currency="BRL"
                  locale="pt-BR"
                  value={price}
                  onValueChange={(e) => setPrice(e.value)}
                >
                  <InputNumber.Input />
                </InputNumber.Root>
              </div>
              <div className="col-span-1">
                <Label>Estoque</Label>
                <InputNumber.Root
                  value={stock}
                  className="w-full"
                  onValueChange={(e) => setStock(e.value)}
                >
                  <InputNumber.Input />
                </InputNumber.Root>
              </div>
            </div>
            <Button type="button" className="mt-3" severity="primary" onClick={updateProduct}>
              Editar
            </Button>
          </form>
        </section>
      ) : (
        <h1>Produco não encontrado</h1>
      )}
    </>
  );
}

export default ProductDetails;
