import BrandFeatured from "../../Components/Brand/BrandFeatured";
import Discount from "../../Components/Home/Discount";
import HomeCatergory from "../../Components/Home/HomeCatergory";
import Silder from "../../Components/Home/Silder";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";

const HomePage = () => {
  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <Silder />
      <HomeCatergory />
      <CardProductsContainer
        title="Best seller"
        btntitle="More ..."
        pathText="/products"
      />
      <Discount />
      <CardProductsContainer
        title="Best seller"
        btntitle="More ..."
        pathText="/products"
      />
      <BrandFeatured title="Famous Brand" btntitle="All " />
    </div>
  );
};

export default HomePage;
