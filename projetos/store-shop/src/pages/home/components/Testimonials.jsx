import ArrowRight from "../../../assets/images/icones/arrow-down-bold-right.png"
import ArrowLeft from "../../../assets/images/icones/arrow-down-bold-left.png"
import CustomerComment from "./CustomerComment";
import RateStars from "../../../assets/images/icones/rate-stars.png"
import { Carousel } from '@primereact/ui/carousel';
import { Button } from '@primereact/ui/button';

const comments = [
  {
    rate: RateStars,
    customerName:"Sarah M.",
    customerComment: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
  },
  {
    rate: RateStars,
    customerName: "Alex K.",
    customerComment: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
  },
  {
    rate: RateStars,
    customerName: "Alex K.",
    customerComment: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
  },
  {
    rate: RateStars,
    customerName: "Alex K.",
    customerComment: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
  },
  {
    rate: RateStars,
    customerName: "Alex K.",
    customerComment: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
  }
]

function Testimonials() {
  return (
    <>
      <Carousel.Root className="mt-15"  slidesPerPage={2.45} loop>
        <div className="flex justify-between mb-8">
          <h3 className="text-4xl">NOSSOS CLIENTES FELIZES</h3>
          <div className="flex items-center gap-2">
            <Carousel.Prev as={Button} size="small" severity="secondary" iconOnly>
              <img src={ArrowLeft} alt="" />
            </Carousel.Prev>
            <Carousel.Prev as={Button} size="small" severity="secondary" iconOnly>
              <img src={ArrowRight} alt="" />
            </Carousel.Prev>
          </div>
        </div>
        <Carousel.Content>
          {
            comments.map((item, index) => (
              <Carousel.Item key={index}>
                <CustomerComment
                  rate={item.rate}
                  customerName={item.customerName}
                  customerComment={item.customerComment}
                />
              </Carousel.Item>
            ))
          }
         </Carousel.Content>
      </Carousel.Root>
      {/* <section className="mt-15">
        <div className="flex gap-5 mt-10">
          <CustomerComment
            rate={RateStars}
            customerName="Alex K."
            customerComment={`"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`}
          />
        </div>
      </section> */}
    </>
  )
}

export default Testimonials;