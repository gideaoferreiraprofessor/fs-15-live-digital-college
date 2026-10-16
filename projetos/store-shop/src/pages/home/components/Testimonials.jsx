import ArrowRight from "../../../assets/images/icones/arrow-down-bold-right.png"
import ArrowLeft from "../../../assets/images/icones/arrow-down-bold-left.png"
import CustomerComment from "./CustomerComment";
import RateStars from "../../../assets/images/icones/rate-stars.png"
function Testimonials() {
  return (
    <>
      <section className="mt-15">
        <div className="flex justify-between">
          <h3 className="text-4xl">NOSSOS CLIENTES FELIZES</h3>
          <div className="flex items-center gap-2">
            <img src={ArrowLeft} alt="" />
            <img src={ArrowRight} alt="" />
          </div>
        </div>
        <div className="flex gap-5 mt-10">
          <CustomerComment
            rate={RateStars}
            customerName="Sarah M."
            customerComment={`"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`} 
          />
          <CustomerComment
            rate={RateStars}
            customerName="Alex K."
            customerComment={`"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`}
          />
          <CustomerComment
            rate={RateStars}
            customerName="Alex K."
            customerComment={`"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`}
          />
        </div>
      </section>
    </>
  )
}

export default Testimonials;