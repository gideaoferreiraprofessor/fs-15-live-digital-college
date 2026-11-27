import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Breadcrumb } from "@primereact/ui/breadcrumb";
import { ChevronRight } from "@primeicons/react/chevron-right";
import { ChevronDown } from "@primeicons/react/chevron-down";
import { Minus } from "@primeicons/react/minus";
import { Plus } from "@primeicons/react/plus";
import { SlidersV } from "@primeicons/react/sliders-v";
import ProductRate from "../../assets/images/products/product-rate.png";
import CheckGreenIcon from "../../assets/images/icones/check.png"
import { Tabs } from 'primereact/tabs';
import { Select } from '@primereact/ui/select';
import { useOutletContext } from "react-router";

function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [totalItems, setTotalItems] = useState([]);
  const { setProductCart } = useOutletContext()

  const reviews = [
    {
      rate: ProductRate,
      customer: "Samantha D.",
      comment: "Eu simplesmente amo esta camiseta! O design é único e o tecido é superconfortável. Como também sou designer, valorizo muito a atenção aos detalhes. Ela se tornou minha camiseta favorita para qualquer ocasião.",
      createdAt: new Date("2026-06-24").toLocaleDateString()
    },
    {
      rate: ProductRate,
      customer: "Alex M.",
      comment: "A camiseta superou minhas expectativas! As cores são vibrantes e a qualidade da estampa é excelente. Como também sou designer de UI/UX, sou bastante exigente quando o assunto é estética, e esta camiseta tem minha aprovação!",
      createdAt: new Date("2026-06-13").toLocaleDateString()
    },
    {
      rate: ProductRate,
      customer: "Ethan R.",
      comment: "Esta camiseta é indispensável para quem aprecia um bom design. O padrão minimalista, mas cheio de estilo, chamou minha atenção, e o caimento é perfeito. É possível perceber o toque do designer em cada detalhe desta peça.",
      createdAt: new Date("2026-06-10").toLocaleDateString()
    },
    {
      rate: ProductRate,
      customer: "Olivi P.",
      comment: "Como entusiasta de UI/UX, valorizo a simplicidade e a funcionalidade. Esta camiseta não apenas representa esses princípios, como também é muito confortável de usar. É evidente que o designer colocou toda a sua criatividade para fazer esta peça se destacar.",
      createdAt: new Date("2026-05-29").toLocaleDateString()
    },
    {
      rate: ProductRate,
      customer: "Liam K.",
      comment: "Esta camiseta é a combinação perfeita de conforto e criatividade. O tecido é macio, e o design revela muito sobre a habilidade do designer. É como vestir uma obra de arte que representa minha paixão tanto pelo design e moda.",
      createdAt: new Date("2026-05-29").toLocaleDateString()
    },
    {
      rate: ProductRate,
      customer: "Ava H.",
      comment: "Não estou apenas vestindo uma camiseta; estou vestindo uma verdadeira filosofia de design. Os detalhes elaborados e a composição cuidadosa da estampa fazem desta peça um ótimo assunto para iniciar uma conversa.",
      createdAt: new Date("2026-05-20").toLocaleDateString()
    }
  ]

  const sortBy = [
      { label: 'Mais recentes', value: 'asc' },
      { label: 'Mais antigos', value: 'desc' },
  ];

  async function fetchProductDetailsById() {
    const request = await fetch(
      `http://localhost:8001/store/product/${params.id}`,
    );
    const response = await request.json();
    setProduct(response);
  }

  function incrementItem(item) {
    setTotalItems((prev) => [...prev, item]);
  }

  function decrementItem() {
    setTotalItems((prev) => {
      prev.pop()
      return [...prev]
    });
  }
  
  function addCart() {
    setProductCart(totalItems)
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
                    <Minus size={18} />{" "}
                  </button>
                  <p>{totalItems.length}</p>
                  <button className="cursor-pointer" onClick={() => incrementItem(product)}>
                    {" "}
                    <Plus size={18} />{" "}
                  </button>
                </div>
                <button
                  className="bg-black text-white rounded-3xl px-3 py-2 w-9/12 cursor-pointer"
                  onClick={addCart}
                >
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
                  <div className="my-6">
                    <p>{product.description}</p>
                  </div>
                </Tabs.Panel>
                <Tabs.Panel value="tab2">
                  <div className="mt-6 flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                      <p className="text-2xl! font-bold text-black!">Todas as avaliações</p>
                      <p className="text-xl!">({ reviews.length })</p>
                    </div>
                    <div className="flex gap-3 items-center">
                      <button className="bg-gray-200 py-2 px-2 rounded-4xl cursor-pointer">
                        <SlidersV size={20} />
                      </button>
                      <Select.Root
                        options={sortBy}
                        optionLabel="label"
                        optionValue="value"
                        className="w-full md:w-40 bg-gray-200! border-0! rounded-3xl!"
                        defaultValue="asc"
                      >
                        <Select.Trigger>
                          <Select.Value></Select.Value>
                          <Select.Indicator>
                            <ChevronDown />
                          </Select.Indicator>
                        </Select.Trigger>
                        <Select.Portal>
                          <Select.Positioner>
                            <Select.Popup>
                              <Select.List />
                            </Select.Popup>
                          </Select.Positioner>
                        </Select.Portal>
                      </Select.Root>
                      <button className="bg-black text-white rounded-3xl px-3 py-2 w-9/12 cursor-pointer">
                        Avaliar
                      </button>
                    </div>
                  </div>
                  <div className="py-10 flex gap-6 flex-wrap">
                    {
                      reviews.map(review => (
                        <div className="w-[49%] border border-gray-100 rounded-2xl py-5 px-5">
                          <img src={review.rate} alt="" />
                          <div className="flex gap-3 my-4">
                            <p>{ review.customer }</p>
                            <img src={CheckGreenIcon} alt="" />
                          </div>
                          <p> { review.comment } </p>
                          <p className="mt-6"> Postado em: { review.createdAt } </p>
                        </div>
                      ))
                    }
                  </div>
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
