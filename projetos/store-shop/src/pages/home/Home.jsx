import MainBanner from "../../assets/images/banners/banner-main.png"
import VersaceBrand from "../../assets/images/brands/versace.png"
import ZaraBrand from "../../assets/images/brands/zara-logo.png"
import GucciBrand from "../../assets/images/brands/gucci-logo.png"
import PradaBrand from "../../assets/images/brands/prada-logo.png"
import CalvinKleinBrand from "../../assets/images/brands/calvin-klein.png"
import ProductRate from "../../assets/images/products/product-rate.png"
import TShirtLongsize from "../../assets/images/products/t-shirt-longsize.png"
import Jeans2 from "../../assets/images/products/jeans-2.png"
import CasualLong from "../../assets/images/products/casual-long.png"
import TShirtBaseboll from "../../assets/images/products/t-shirt-baseboll.png"




function Home() {
  return (
    <>
      <div>
        <img src={MainBanner} alt="" />
      </div>
      <div className="bg-black! py-10 flex justify-evenly items-center">
        <img src={VersaceBrand} alt="" />
        <img src={ZaraBrand} alt="" />
        <img src={GucciBrand} alt="" />
        <img src={PradaBrand} alt="" />
        <img src={CalvinKleinBrand} alt="" />
      </div>
      <section className="mb-15">
        <h3 className="text-4xl w-full text-center mt-20 mb-15">NOVOS PRODUTOS</h3>
        <div className="flex justify-between gap-4">
          <div>
            <img src={TShirtLongsize} alt="" className="rounded-xl mb-3" />
            <p className="font-semibold! text-black! mb-2">
              Camiseta estampada
            </p>
            <img src={ProductRate} alt="" className=" mb-2" />
            <div>
              <p className="font-semibold! text-black! text-xl!">
                R$ 120
              </p>
            </div>
          </div>
          <div>
            <img src={Jeans2} alt="" className="rounded-xl mb-3" />
            <p className="font-semibold! text-black! mb-2">
              Calça Jeans Skinny
            </p>
            <img src={ProductRate} alt="" className=" mb-2" />
            <div className="flex gap-3">
              <p className="font-semibold! text-black! text-xl!">
                R$ 240
              </p>
              <p className="font-semibold! text-gray-400! text-xl! line-through">
                R$ 260
              </p>
              <span className="bg-red-100 py-1 px-3 text-sm! rounded-2xl text-red-400 font-semibold!">
                -20%
              </span>
            </div>
          </div>
          <div>
            <img src={CasualLong} alt="" className="rounded-xl mb-3" />
            <p className="font-semibold! text-black! mb-2">
              Camisa Xadrez Manga Comprida
            </p>
            <img src={ProductRate} alt="" className=" mb-2" />
            <div>
              <p className="font-semibold! text-black! text-xl!">
                R$ 180
              </p>
            </div>
          </div>
          <div>
            <img src={TShirtBaseboll} alt="" className="rounded-xl mb-3" />
            <p className="font-semibold! text-black! mb-2">
              Camiseta Oversize Listrada
            </p>
            <img src={ProductRate} alt="" className=" mb-2" />
            <div className="flex gap-3">
              <p className="font-semibold! text-black! text-xl!">
                R$ 130
              </p>
              <p className="font-semibold! text-gray-400! text-xl! line-through">
                R$ 160
              </p>
              <span className="bg-red-100 py-1 px-3 text-sm! rounded-2xl text-red-400 font-semibold!">
                -30%
              </span>
            </div>
          </div>
        </div>
        <div className="w-full mt-10 flex justify-center">
          <button className="border rounded-4xl! py-3 px-20 border-gray-300 cursor-pointer">Ver Todos</button>
        </div>
      </section>
      <hr className="text-gray-300" />
      <section>
        <h3 className="text-4xl w-full text-center mt-13 mb-15">MAIS VENDIDOS</h3>
        <div className="flex justify-between gap-4">
          <div>
            <img src={TShirtLongsize} alt="" className="rounded-xl mb-3" />
            <p className="font-semibold! text-black! mb-2">
              T-shirt With Tape Details
            </p>
            <img src={ProductRate} alt="" className=" mb-2" />
            <div>
              <p className="font-semibold! text-black! text-xl!">
                R$ 120
              </p>
            </div>
          </div>
          <div>
            <img src={Jeans2} alt="" className="rounded-xl mb-3" />
            <p className="font-semibold! text-black! mb-2">
              Skinny Fit Jeans
            </p>
            <img src={ProductRate} alt="" className=" mb-2" />
            <div className="flex gap-3">
              <p className="font-semibold! text-black! text-xl!">
                R$ 240
              </p>
              <p className="font-semibold! text-gray-400! text-xl! line-through">
                R$ 260
              </p>
              <span className="bg-red-100 py-1 px-3 text-sm! rounded-2xl text-red-400 font-semibold!">
                -20%
              </span>
            </div>
          </div>
          <div>
            <img src={CasualLong} alt="" className="rounded-xl mb-3" />
            <p className="font-semibold! text-black! mb-2">
              Checkered Shirt
            </p>
            <img src={ProductRate} alt="" className=" mb-2" />
            <div>
              <p className="font-semibold! text-black! text-xl!">
                R$ 180
              </p>
            </div>
          </div>
          <div>
            <img src={TShirtBaseboll} alt="" className="rounded-xl mb-3" />
            <p className="font-semibold! text-black! mb-2">
              Sleev Striped T-shirt
            </p>
            <img src={ProductRate} alt="" className=" mb-2" />
            <div className="flex gap-3">
              <p className="font-semibold! text-black! text-xl!">
                R$ 130
              </p>
              <p className="font-semibold! text-gray-400! text-xl! line-through">
                R$ 160
              </p>
              <span className="bg-red-100 py-1 px-3 text-sm! rounded-2xl text-red-400 font-semibold!">
                -30%
              </span>
            </div>
          </div>
        </div>
        <div className="w-full mt-10 flex justify-center">
          <button className="border rounded-4xl! py-3 px-20 border-gray-300 cursor-pointer">Ver Todos</button>
        </div>
      </section>
    </>
  )
}

export default Home;