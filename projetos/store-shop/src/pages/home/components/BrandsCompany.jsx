import VersaceBrand from "../../../assets/images/brands/versace.png"
import ZaraBrand from "../../../assets/images/brands/zara-logo.png"
import GucciBrand from "../../../assets/images/brands/gucci-logo.png"
import PradaBrand from "../../../assets/images/brands/prada-logo.png"
import CalvinKleinBrand from "../../../assets/images/brands/calvin-klein.png"

function BrandsCompany() {
  return (
    <div className="bg-black! py-10 flex justify-evenly items-center">
    <img src={VersaceBrand} alt="" />
    <img src={ZaraBrand} alt="" />
    <img src={GucciBrand} alt="" />
    <img src={PradaBrand} alt="" />
    <img src={CalvinKleinBrand} alt="" />
    </div>
  );
}

export default BrandsCompany