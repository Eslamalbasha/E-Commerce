import React from "react";
import CategoryContainer from "../../Components/Category/Categoryontainer";
import Pagination from "../../Components/Uitily/Pagination";

const AllCategoryPage = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryContainer />
      <Pagination />
    </div>
  );
};

export default AllCategoryPage;
