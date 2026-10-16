
import ProductRate from "../../../assets/images/products/product-rate.png"
import TShirtLongsize from "../../../assets/images/products/t-shirt-longsize.png"
import Jeans2 from "../../../assets/images/products/jeans-2.png"
import CasualLong from "../../../assets/images/products/casual-long.png"
import TShirtBaseboll from "../../../assets/images/products/t-shirt-baseboll.png"
import ProductCard from "../../../components/product/card/ProductCard"
import { NavLink } from "react-router"

function NewProducs() {
  return (
      <section>
        <h3 className="text-4xl w-full text-center mt-13 mb-15">NOVOS PRODUTOS</h3>
        <div className="flex justify-between gap-4">
          <ProductCard
            image={TShirtLongsize}
            productRate={ProductRate}
            title="Camiseta estampada"
            price="120"
          />
          <ProductCard
            image={Jeans2}
            productRate={ProductRate}
            title="Calça Jeans Skinny"
            price="260"
            priceDiscount="240"
            discount="20"
          />
          <ProductCard
            image={CasualLong}
            productRate={ProductRate}
            title="Camisa Xadrez Manga Comprida"
            price="180"
          />
          <ProductCard
            image={TShirtBaseboll}
            productRate={ProductRate}
            title="Camiseta Oversize Listrada"
            price="160"
            priceDiscount="130"
            discount="30"
          />
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