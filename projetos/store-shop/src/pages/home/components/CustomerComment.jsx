import Check from "../../../assets/images/icones/check.png"

function CustomerComment({rate, customerName, customerComment}) {
  return (
    <>
      <div className="border-gray-200 border rounded-2xl py-5 px-5">
        <img src={rate} alt="" />
        <div className="flex gap-1 my-2">
          <p>{customerName}</p>
          <img src={Check} alt="" />
        </div>
        <p className="text-sm!">{customerComment}</p>
      </div>
    </>
  )
}

export default CustomerComment;