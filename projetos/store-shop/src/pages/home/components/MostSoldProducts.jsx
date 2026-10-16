
import ProductRate from "../../../assets/images/products/product-rate.png"
import TShirtLongsize from "../../../assets/images/products/t-shirt-longsize-2.png"
import Jeans from "../../../assets/images/products/jeans.png"
import CasualLong from "../../../assets/images/products/casual-long-2.png"
import ShorJeans from "../../../assets/images/products/short-jeans.png"
import ProductCard from "../../../components/product/card/ProductCard"

function MostSoldProducts() {
  return (
      <section>
        <h3 className="text-4xl w-full text-center mt-13 mb-15">MAIS VENDIDOS</h3>
        <div className="flex justify-between gap-4">
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

        </div>
        <div className="w-full mt-10 flex justify-center">
          <button className="border rounded-4xl! py-3 px-20 border-gray-300 cursor-pointer">Ver Todos</button>
        </div>
      </section>
  );
}

export default MostSoldProducts