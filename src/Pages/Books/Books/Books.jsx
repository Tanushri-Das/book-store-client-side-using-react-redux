import React, { useState } from "react";
import Tab from "../../../Components/CustomTabs/Tab";
import TabItem from "../../../Components/CustomTabs/TabItem";
import BooksTab from "../BooksTab/BooksTab";
import { useGetProductsQuery } from "../../../features/api/apiSlice";

const Books = () => {
  const { data: books, error, isLoading } = useGetProductsQuery();
  const [tabIndex, setTabIndex] = useState(0);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const mysteryAndThriller = books.filter(
    (book) => book.category === "Mystery and Thriller"
  );
  const scienceFiction = books.filter(
    (book) => book.category === "Science Fiction and Fantasy"
  );
  const historicalFiction = books.filter(
    (book) => book.category === "Historical Fiction"
  );
  const selfHelp = books.filter(
    (book) => book.category === "Self-Help and Personal Development"
  );
  const biography = books.filter(
    (book) => book.category === "Biography and Memoir"
  );
  const classicLiterature = books.filter(
    (book) => book.category === "Classic Literature"
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
          {tabIndex === 0 && <BooksTab books={mysteryAndThriller} />}
          {tabIndex === 1 && <BooksTab books={scienceFiction} />}
          {tabIndex === 2 && <BooksTab books={historicalFiction} />}
          {tabIndex === 3 && <BooksTab books={selfHelp} />}
          {tabIndex === 4 && <BooksTab books={biography} />}
          {tabIndex === 5 && <BooksTab books={classicLiterature} />}
        </div>
      </div>
    </div>
  );
};

export default Books;