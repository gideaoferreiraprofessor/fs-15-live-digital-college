import { Button } from "@primereact/ui/button";
import { InputNumber } from "@primereact/ui/inputnumber";
import { InputText } from "@primereact/ui/inputtext";
import { Label } from "@primereact/ui/label";
import { Textarea } from "@primereact/ui/textarea";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

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

    const response = await request.json()

    console.log(response)
  }

  useEffect(() => {
    getProductById();
  }, []);

  return (
    <>
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
