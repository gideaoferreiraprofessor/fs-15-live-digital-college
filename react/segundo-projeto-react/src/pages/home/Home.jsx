import Categories from "./categories/Categories"
import MostSold from "./most-sold/MostSold"
import Off from "./off/Off"
import Newsletter from "./newsletter/Newsletter"

function Home() {
    return (
        <>
            <div className="mb-3">
                <Categories />
            </div>
            <div className="mb-3">
                <MostSold />
            </div>
            <div className="mb-3">
                <Off />
            </div>
            <Newsletter />
        </>
    )
}

export default Home