import BannerCasual from "../../../assets/images/banners/banner-casual.png"
import BannerFormal from "../../../assets/images/banners/banner-formal.png"
import BannerParty from "../../../assets/images/banners/banner-party.png"
import BannerGym from "../../../assets/images/banners/banner-gym.png"

function BrowseStyle() {
  return (
    <>
      <section className="bg-gray-200 py-15 mt-15 rounded-4xl">
        <h3 className="text-4xl w-full text-center mb-15">NAVEGE PELO SEU ESTILO</h3>
        <div className="flex flex-col gap-6">
          <div className="flex gap-6  justify-center">
            <img src={BannerCasual} alt="" />
            <img src={BannerFormal} alt="" />
          </div>
          <div className="flex gap-6  justify-center">
            <img src={BannerParty} alt="" />
            <img src={BannerGym} alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default BrowseStyle;