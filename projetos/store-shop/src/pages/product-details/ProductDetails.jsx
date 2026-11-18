import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Breadcrumb } from "@primereact/ui/breadcrumb";
import { ChevronRight } from "@primeicons/react/chevron-right";
import { Minus } from "@primeicons/react/minus";
import { Plus } from "@primeicons/react/plus";
import ProductRate from "../../assets/images/products/product-rate.png";
import { Tabs } from 'primereact/tabs';

function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [totalItems, setTotalItems] = useState(0);

  async function fetchProductDetailsById() {
    const request = await fetch(
      `http://localhost:8001/store/product/${params.id}`,
    );
    const response = await request.json();
    setProduct(response);
  }

  function incrementItem() {
    setTotalItems(totalItems + 1);
  }

  function decrementItem() {
    if (totalItems <= 0) {
      setTotalItems(0);
      return;
    }
    setTotalItems(totalItems - 1);
  }

  useEffect(() => {
    //eslint-disable-next-line
    fetchProductDetailsById();
  }, []);

  return (
    <>
      <div>
        <Breadcrumb.Root>
          <Breadcrumb.List>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Separator>
              <ChevronRight />
            </Breadcrumb.Separator>
            <Breadcrumb.Item>{product.name}</Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
      </div>
      {product && product.id ? (
        <>
          <section className="flex gap-3">
            <div className="w-2/12 flex flex-col gap-7">
              <img
                className="rounded-2xl"
                src={`http://localhost:8001/assets/products-images/${product.image}`}
                alt={product.name}
              />
              <img
                className="rounded-2xl"
                src={`http://localhost:8001/assets/products-images/${product.image}`}
                alt={product.name}
              />
              <img
                className="rounded-2xl"
                src={`http://localhost:8001/assets/products-images/${product.image}`}
                alt={product.name}
              />
            </div>
            <div className="w-7/12">
              <img
                className="w-full rounded-2xl"
                src={`http://localhost:8001/assets/products-images/${product.image}`}
                alt={product.name}
              />
            </div>
            <div className="px-3 w-9/12">
              <h3 className="text-3xl mb-3">{product.name}</h3>
              <img src={ProductRate} alt="" />
              <div className="my-2">
                <p className="font-semibold! text-black! text-2xl!">
                  R$ {product.price}
                </p>
              </div>
              <p>{product.description.slice(1, 140)}...</p>
              <hr className="border-gray-200 w-full my-3" />
              <div>
                <p>Selecione um cor</p>
                <div className="flex gap-4 mt-2">
                  <div className="w-10 h-10 bg-olive-700 rounded-4xl"></div>
                  <div className="w-10 h-10 bg-emerald-900 rounded-4xl"></div>
                  <div className="w-10 h-10 bg-cyan-950 rounded-4xl"></div>
                </div>
              </div>
              <hr className="border-gray-200 w-full my-3" />
              <div>
                <p>Selecione um tamanho</p>
                <div className="flex gap-4 mt-2">
                  <button className="bg-gray-100 px-4 py-2 rounded-3xl">
                    Pequeno
                  </button>
                  <button className="bg-gray-100 px-4 py-2 rounded-3xl">
                    Médio
                  </button>
                  <button className="bg-black text-white px-4 py-2 rounded-3xl">
                    Grande
                  </button>
                  <button className="bg-gray-100 px-4 py-2 rounded-3xl">
                    Extra Grande
                  </button>
                </div>
              </div>
              <hr className="border-gray-200 w-full my-3" />
              <div className="flex gap-4">
                <div className="bg-gray-100 px-4 py-2 rounded-3xl flex justify-between w-3/12 items-center">
                  <button className="cursor-pointer" onClick={decrementItem}>
                    {" "}
                    <Minus size={18} />{" "}
                  </button>
                  <p>{totalItems}</p>
                  <button className="cursor-pointer" onClick={incrementItem}>
                    {" "}
                    <Plus size={18} />{" "}
                  </button>
                </div>
                <button className="bg-black text-white rounded-3xl px-3 py-2 w-9/12 cursor-pointer">
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          </section>
          <section className="mt-10">
            <Tabs.Root defaultValue="tab2">
              <Tabs.List className="flex justify-center gap-12 border-b border-gray-300">
                <Tabs.Tab value="tab1" className="cursor-pointer py-4">
                  Detalhes do Produto
                </Tabs.Tab>
                <Tabs.Tab value="tab2" className="cursor-pointer py-4">
                  Avaliação
                </Tabs.Tab>
                <Tabs.Tab value="tab3" className="cursor-pointer py-4">
                  Perguntas frequentes
                </Tabs.Tab>
              </Tabs.List>
              <Tabs.Panels>
                <Tabs.Panel value="tab1">
                  PAINEL 1
                </Tabs.Panel>
                <Tabs.Panel value="tab2">
                   PAINEL 2
                </Tabs.Panel>
                <Tabs.Panel value="tab3">
                   PAINEL 3
                </Tabs.Panel>
              </Tabs.Panels>
            </Tabs.Root>
          </section>
        </>
      ) : (
        <h1>Produto não encontrado</h1>
      )}
    </>
  );
}

export default ProductDetails;
