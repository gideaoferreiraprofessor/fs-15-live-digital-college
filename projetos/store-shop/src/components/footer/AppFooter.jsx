import { InputGroup } from "@primereact/ui/inputgroup";
import { InputText } from "@primereact/ui/inputtext";
import VisaCard from "../../assets/images/brands/Visa.png"
import GPayCard from "../../assets/images/brands/g-pay.png"
import Mastercard from "../../assets/images/brands/Mastercard.png"
import PaypalCard from "../../assets/images/brands/Paypal.png"
import PayCard from "../../assets/images/brands/Pay.png"

function AppFooter() {
  const iconsWidthAndHeight = 20
  return (
    <div className='flex justify-center ss-bg-gray mt-40'>
      <footer className='w-300 pb-8 pt-30 relative'>
        <div className='bg-black py-6 px-14 flex justify-between items-center rounded-2xl absolute -top-20 w-full'>
          <h3 className='text-white! text-4xl'>
            FIQUE ATUALIZADO COM<br />
            NOSSAS ÚLTIMAS OFETAS
          </h3>
          <form className='w-80'>
            <InputGroup.Root>
              <InputGroup.Addon  className="rounded-l-4xl!">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 21 21">
                  <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12.5 5.5h-8a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5" /><path d="m4.5 8.5l5 3l5-3m2-5v4m-2-2h4" /></g></svg>
              </InputGroup.Addon>
              <InputText placeholder="Pesquisar" className="rounded-r-4xl!"/>
            </InputGroup.Root>
            <button className="bg-white w-full py-3 rounded-4xl! mt-3 cursor-pointer">Inscreva-se em nossa newsletter</button>
          </form>
        </div>

        <div className='border-b border-gray-200 pb-8 flex gap-15'>
          <div className='w-75'>
            <h3 className='mb-8 text-3xl'>SHOP.CO</h3>
            <p  className='mb-8 text-sm!'>
              Qual roupa que combina com seu estilo e<br />
              qual delas vc se sente bem em vestir. De<br />
              mulheres até homens.
            </p>
            <div className='flex gap-4'>
              <svg xmlns="http://www.w3.org/2000/svg" width={iconsWidthAndHeight} height={iconsWidthAndHeight} viewBox="0 0 20 20">
                <path fill="currentColor" d="M17.316 6.246q.011.244.011.488c0 4.99-3.797 10.742-10.74 10.742c-2.133 0-4.116-.625-5.787-1.697a7.58 7.58 0 0 0 5.588-1.562a3.78 3.78 0 0 1-3.526-2.621a3.86 3.86 0 0 0 1.705-.065a3.78 3.78 0 0 1-3.028-3.703v-.047a3.8 3.8 0 0 0 1.71.473a3.775 3.775 0 0 1-1.168-5.041a10.72 10.72 0 0 0 7.781 3.945a3.8 3.8 0 0 1-.097-.861a3.773 3.773 0 0 1 3.774-3.773a3.77 3.77 0 0 1 2.756 1.191a7.6 7.6 0 0 0 2.397-.916a3.8 3.8 0 0 1-1.66 2.088a7.6 7.6 0 0 0 2.168-.594a7.6 7.6 0 0 1-1.884 1.953" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width={iconsWidthAndHeight} height={iconsWidthAndHeight} viewBox="0 0 20 20">
                <path fill="currentColor" d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4m2.274 6.634h-1.443c-.171 0-.361.225-.361.524V8.6h1.805l-.273 1.486H10.47v4.461H8.767v-4.461H7.222V8.6h1.545v-.874c0-1.254.87-2.273 2.064-2.273h1.443z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width={iconsWidthAndHeight} height={iconsWidthAndHeight} viewBox="0 0 20 20">
                <path fill="currentColor" d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.101.9 2 2 2h14c1.1 0 2-.899 2-2V3c0-1.1-.9-2-2-2M9.984 15.523a5.54 5.54 0 0 0 5.538-5.539c0-.338-.043-.664-.103-.984H17v7.216a.69.69 0 0 1-.693.69H3.693a.69.69 0 0 1-.693-.69V9h1.549c-.061.32-.104.646-.104.984a5.54 5.54 0 0 0 5.539 5.539M6.523 9.984a3.461 3.461 0 1 1 6.922 0a3.461 3.461 0 0 1-6.922 0M16.307 6h-1.615A.694.694 0 0 1 14 5.308V3.691c0-.382.31-.691.691-.691h1.615c.384 0 .694.309.694.691v1.616c0 .381-.31.693-.693.693" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width={iconsWidthAndHeight} height={iconsWidthAndHeight} viewBox="0 0 20 20">
                <path fill="currentColor" d="M10.015 9.949h-.03c-1.191 0-2.24-.303-2.861.268a1.57 1.57 0 0 0-.527 1.197c0 1.852 1.483 2.08 3.389 2.08h.029c1.905 0 3.389-.229 3.389-2.08c0-.443-.156-.856-.527-1.197c-.622-.571-1.671-.268-2.862-.268M8.393 12.48c-.363 0-.656-.408-.656-.91s.293-.908.656-.908s.657.406.657.908c.001.502-.293.91-.657.91m3.213 0c-.363 0-.657-.408-.657-.91s.294-.908.657-.908c.362 0 .656.406.656.908c.001.502-.293.91-.656.91M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4m.876 13.539c-.172 0-.514 0-.876.002c-.362-.002-.704-.002-.876-.002c-.76 0-3.772-.059-3.772-3.689c0-.834.286-1.445.755-1.955c-.074-.184-.078-1.232.32-2.236c0 0 .916.1 2.301 1.051c.289-.081.781-.122 1.272-.122s.982.041 1.273.121c1.385-.951 2.301-1.051 2.301-1.051c.398 1.004.395 2.053.32 2.236c.469.51.755 1.121.755 1.955c-.001 3.632-3.013 3.69-3.773 3.69" /></svg>
            </div>
          </div>
          <div className='w-40'>
            <p className='mb-8 text-1xl font-semibold! text-black! tracking-[0.3rem]'>EMPRESA</p>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href="">Sobre</a>
              </li>
              <li>
                <a href="">Funcionalidades</a>
              </li>
              <li>
                <a href="">Vagas</a>
              </li>
              <li>
                <a href="">Carreira</a>
              </li>
            </ul>
          </div>
          <div className='w-40'>
            <p className='mb-8 text-1xl font-semibold! text-black! tracking-[0.3rem]'>AJUDA</p>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href="">Suporte do cliente</a>
              </li>
              <li>
                <a href="">Detalhes de entrega</a>
              </li>
              <li>
                <a href="">Termos e condições</a>
              </li>
              <li>
                <a href="">Política de privacidade</a>
              </li>
            </ul>
          </div>
          <div className='w-40'>
            <p  className='mb-8 text-1xl font-semibold! text-black! tracking-[0.3rem]'>PERGUNTAS</p>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href="">Conta</a>
              </li>
              <li>
                <a href="">Entregas</a>
              </li>
              <li>
                <a href="">Pedidos</a>
              </li>
              <li>
                <a href="">Pagamentos</a>
              </li>
            </ul>
          </div>
          <div className='w-40'>
            <p className='mb-8 text-1xl font-semibold! text-black! tracking-[0.3rem]'>RECURSOS</p>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href="">eBooks gratis</a>
              </li>
              <li>
                <a href="">Tutoriais</a>
              </li>
              <li>
                <a href="">Como fazer - Blog</a>
              </li>
              <li>
                <a href="">Playlist do Youtube</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-4 pb-10 flex justify-between">
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="flex gap-2 items-center">
            <div className="bg-white p-2 rounded-sm w-10">
              <img src={VisaCard} alt="" className=""/>
            </div>
            <div className="bg-white p-2 rounded-sm w-10 flex justify-center">
              <img src={Mastercard} alt="" className="w-3" />
            </div>
            <div className="bg-white p-2 rounded-sm w-10">
              <img src={PaypalCard} alt=""/>
            </div>
            <div className="bg-white p-2 rounded-sm w-10">
              <img src={PayCard} alt=""/>
            </div>
            <div className="bg-white p-2 rounded-sm w-10">
              <img src={GPayCard} alt=""/>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AppFooter