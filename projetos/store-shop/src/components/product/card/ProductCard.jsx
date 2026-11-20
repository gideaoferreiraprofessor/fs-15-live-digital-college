
function ProductCard({image, productRate, title, price, priceDiscount, discount}) {
  return (
    <div className="w-full">
      <div className="w-full h-64 rounded-xl mb-3 overflow-hidden flex items-center justify-center">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-contain" 
        />
      </div>
      <p className="font-semibold! text-black! mb-2">
        {title}
      </p>
      <img src={productRate} alt="" className=" mb-2" />
      
        {priceDiscount > 0 && (
          <div className="flex gap-3">
            <p className="font-semibold! text-black! text-xl!">
              R$ {priceDiscount}
            </p>
            <p className="font-semibold! text-gray-400! text-xl! line-through">
              R$ {price}
            </p>
            <span className="bg-red-100 py-1 px-3 text-sm! rounded-2xl text-red-400 font-semibold!">
              -{discount}%
            </span>
          </div>
        )}

      {!priceDiscount && (
        <div className="flex gap-3">
          <p className="font-semibold! text-black! text-xl!">
            R$ {price}
          </p>
        </div>
        )}
    </div>
  );
}

export default ProductCard