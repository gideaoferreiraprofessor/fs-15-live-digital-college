import MostSoldProducts from "./components/MostSoldProducts"
import NewProducs from "./components/NewProducs"
import MainBanner from "./components/MainBanner"
import BrandsCompany from "./components/BrandsCompany";
import BrowseStyle from "./components/BrowseStyle";
import Testimonials from "./components/Testimonials";

function Home() {
  return (
    <>
      <MainBanner />
      <BrandsCompany />
      <NewProducs />
      <hr className="text-gray-300 mt-15" />
      <MostSoldProducts />
      <BrowseStyle />
      <Testimonials />
    </>
  )
}

export default Home;