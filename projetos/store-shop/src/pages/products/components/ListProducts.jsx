import ProductCard from "../../../components/product/card/ProductCard";
import ProductRate from "../../../assets/images/products/product-rate.png"
import TShirtLongsize from "../../../assets/images/products/t-shirt-longsize-2.png"
import Jeans from "../../../assets/images/products/jeans.png"
import CasualLong from "../../../assets/images/products/casual-long-2.png"
import ShorJeans from "../../../assets/images/products/short-jeans.png"

function ListProducts() {
  return (
    <>
      <div className="w-full">
        <div className="mb-4 flex justify-between">
          <h1>Todos os produtos</h1>
          <div className="flex gap-6">
            <p className="text-sm!">Mostrando 1-10 de 100 produtos</p>
            <p className="text-sm!">Ordenar por: </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-5">
          <ProductCard
            image={CasualLong}
            productRate={ProductRate}
            title="Camisa Listrada Manga Comprida"
            price="232"
            priceDiscount="212"
            discount="20"
          />
          <ProductCard
            image={TShirtLongsize}
            productRate={ProductRate}
            title="Camiseta Courage Graphic"
            price="145"
          />
          <ProductCard
            image={ShorJeans}
            productRate={ProductRate}
            title="Bermuda Jeans"
            price="80"
          />
          <ProductCard
            image={Jeans}
            productRate={ProductRate}
            title="Calça Jeans Preta Skinny"
            price="210"
          />
          <ProductCard
            image={CasualLong}
            productRate={ProductRate}
            title="Camisa Listrada Manga Comprida"
            price="232"
            priceDiscount="212"
            discount="20"
          />
          <ProductCard
            image={TShirtLongsize}
            productRate={ProductRate}
            title="Camiseta Courage Graphic"
            price="145"
          />
          <ProductCard
            image={ShorJeans}
            productRate={ProductRate}
            title="Bermuda Jeans"
            price="80"
          />
          <ProductCard
            image={Jeans}
            productRate={ProductRate}
            title="Calça Jeans Preta Skinny"
            price="210"
          />

          <ProductCard
            image={Jeans}
            productRate={ProductRate}
            title="Calça Jeans Preta Skinny"
            price="210"
          />
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