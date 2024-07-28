// import React, { useState } from "react";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
// import ProductsTab from "../ProductsTab/ProductsTab";
// import { useGetProductsQuery } from "../../../Hooks/useProducts";
// import './Products.css'

// const Products = () => {
//   const { data: products, error, isLoading } = useGetProductsQuery(); // Use the hook directly
//   const [tabIndex, setTabIndex] = useState(0);
//   console.log("products data", products);

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   const mysteryAndThriller = products.filter(
//     (product) => product.category === "Mystery and Thriller"
//   );
//   const scienceFiction = products.filter(
//     (product) => product.category === "Science Fiction and Fantasy"
//   );
//   const historicalFiction = products.filter(
//     (product) => product.category === "Historical Fiction"
//   );
//   const selfHelp = products.filter(
//     (product) => product.category === "Self-Help and Personal Development"
//   );
//   const Biography = products.filter(
//     (product) => product.category === "Biography and Memoir"
//   );
//   const classicLiterature = products.filter(
//     (product) => product.category === "Classic Literature"
//   );

//   return (
//     <div className="m-20 ">
//       <h2 className="text-2xl font-semibold mb-6 text-center">Books</h2>
//       <div className="m-12">
//         <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
//           <TabList>
//             <Tab>Mystery and Thriller</Tab>
//             <Tab>ScienceFiction</Tab>
//             <Tab>Historical Fiction</Tab>
//             <Tab>Self Help</Tab>
//             <Tab>Biography</Tab>
//             <Tab>Classic Literature</Tab>
//           </TabList>
//           <TabPanel>
//             <ProductsTab books={mysteryAndThriller} />
//           </TabPanel>
//           <TabPanel>
//             <ProductsTab books={scienceFiction} />
//           </TabPanel>
//           <TabPanel>
//             <ProductsTab books={historicalFiction} />
//           </TabPanel>
//           <TabPanel>
//             <ProductsTab books={selfHelp} />
//           </TabPanel>
//           <TabPanel>
//             <ProductsTab books={Biography} />
//           </TabPanel>
//           <TabPanel>
//             <ProductsTab books={classicLiterature} />
//           </TabPanel>
//         </Tabs>
//       </div>
//     </div>
//   );
// };

// export default Products;




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
