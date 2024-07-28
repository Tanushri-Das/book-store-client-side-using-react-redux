import React, { useState } from "react";
import ProductsTab from "../ProductsTab/ProductsTab";
import { useGetProductsQuery } from "../../../Hooks/useProducts";
import Tab from "../../../Components/CustomTabs/Tab";
import TabItem from "../../../Components/CustomTabs/TabItem";

const Products = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();
  const [tabIndex, setTabIndex] = useState(0);
  console.log("products data", products);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const mysteryAndThriller = products.filter(
    (product) => product.category === "Mystery and Thriller"
  );
  const scienceFiction = products.filter(
    (product) => product.category === "Science Fiction and Fantasy"
  );
  const historicalFiction = products.filter(
    (product) => product.category === "Historical Fiction"
  );
  const selfHelp = products.filter(
    (product) => product.category === "Self-Help and Personal Development"
  );
  const biography = products.filter(
    (product) => product.category === "Biography and Memoir"
  );
  const classicLiterature = products.filter(
    (product) => product.category === "Classic Literature"
  );

  return (
    <div className="m-20">
      <h2 className="text-2xl font-semibold text-center">Books</h2>
      <div className="mt-8">
        <Tab onTabSelected={(index) => setTabIndex(index)}>
          <TabItem>Mystery and Thriller</TabItem>
          <TabItem>Science Fiction</TabItem>
          <TabItem>Historical Fiction</TabItem>
          <TabItem>Self Help</TabItem>
          <TabItem>Biography</TabItem>
          <TabItem>Classic Literature</TabItem>
        </Tab>
        <div className="mt-5">
          {tabIndex === 0 && <ProductsTab books={mysteryAndThriller} />}
          {tabIndex === 1 && <ProductsTab books={scienceFiction} />}
          {tabIndex === 2 && <ProductsTab books={historicalFiction} />}
          {tabIndex === 3 && <ProductsTab books={selfHelp} />}
          {tabIndex === 4 && <ProductsTab books={biography} />}
          {tabIndex === 5 && <ProductsTab books={classicLiterature} />}
        </div>
      </div>
    </div>
  );
};

export default Products;
