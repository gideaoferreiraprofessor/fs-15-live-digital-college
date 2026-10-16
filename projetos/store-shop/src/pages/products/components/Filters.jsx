import FilterIcon from "../../../assets/images/icones/filters.png"
import DropdownArrow from "../../../assets/images/icones/dropdown-arrow.png"
import ArrowUp from "../../../assets/images/icones/arrow-up.png"

function Filters() {
  return (
    <>
      <div className="border border-gray-200 rounded-2xl w-80 p-4">
        <div className="flex justify-between items-center">
          <p className="font-extrabold! text-black!">FILTROS</p>
          <img src={FilterIcon} alt="" />
        </div>
        <hr className="text-gray-300 mt-6 mb-6" />
        <div>
          <div className="flex justify-between items-center mb-3">
            <p>Camisetas</p>
            <img src={DropdownArrow} alt="" />
          </div>
          <div className="flex justify-between items-center mb-3">
            <p>Shorts</p>
            <img src={DropdownArrow} alt="" />
          </div>
          <div className="flex justify-between items-center mb-3">
            <p>Camisas</p>
            <img src={DropdownArrow} alt="" />
          </div>
          <div className="flex justify-between items-center mb-3">
            <p>Moletom </p>
            <img src={DropdownArrow} alt="" />
          </div>
          <div className="flex justify-between items-center">
            <p>Jeans </p>
            <img src={DropdownArrow} alt="" />
          </div>
        </div>
        <hr className="text-gray-300 mt-6 mb-6" />
        <div className="flex justify-between items-center">
          <p className="font-extrabold! text-black!">PREÇO</p>
          <img src={ArrowUp} alt="" />
        </div>
        <hr className="text-gray-300 mt-6 mb-6" />
        <div className="flex justify-between items-center">
          <p className="font-extrabold! text-black!">CORES</p>
          <img src={ArrowUp} alt="" />
        </div>
        <div className="flex flex-wrap justify-between mb-4">
          <div className="border border-gray-200 rounded-4xl w-10 h-10 bg-green-600"></div>
          <div className="border border-gray-200 rounded-4xl w-10 h-10 bg-red-600"></div>
          <div className="border border-gray-200 rounded-4xl w-10 h-10 bg-yellow-300"></div>
          <div className="border border-gray-200 rounded-4xl w-10 h-10 bg-orange-400"></div>
          <div className="border border-gray-200 rounded-4xl w-10 h-10 bg-blue-400"></div>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="border border-gray-200 rounded-4xl w-10 h-10 bg-blue-800"></div>
          <div className="border border-gray-200 rounded-4xl w-10 h-10 bg-violet-700"></div>
          <div className="border border-gray-200 rounded-4xl w-10 h-10 bg-[#F506A4]"></div>
          <div className="border border-gray-200 rounded-4xl w-10 h-10 bg-white"></div>
          <div className="border border-gray-200 rounded-4xl w-10 h-10 bg-black"></div>
        </div>
        <hr className="text-gray-300 mt-6 mb-6" />
        <div className="flex justify-between items-center">
          <p className="font-extrabold! text-black!">TAMANHOS</p>
          <img src={ArrowUp} alt="" />
        </div>
        <hr className="text-gray-300 mt-6 mb-6" />
        <div className="flex justify-between items-center">
          <p className="font-extrabold! text-black!">ESTILOS</p>
          <img src={ArrowUp} alt="" />
        </div>
        <button className="bg-black w-full mt-10 rounded-4xl text-white py-3 cursor-pointer">
          Aplicar filtros
        </button>
      </div>
    </>
  )
}

export default Filters;