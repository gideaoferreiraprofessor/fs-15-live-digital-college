import Filters from "./components/Filters";
import ListProducts from "./components/ListProducts";

function Products() {
  return (
    <>
      <div className="flex gap-4 items-start">
        <Filters />
        <ListProducts />
      </div>
    </>
  )
}

export default Products;