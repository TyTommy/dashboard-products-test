import React, { useState } from "react";
import { Input, Tabs } from "antd";
import MostPopular from "./MostPopularProduct";
import AllProducts from "./AllProduct"; 

const { Search } = Input;
const { TabPane } = Tabs;

const Products = () => {
  const [searchValue, setSearchValue] = useState("");

  const onSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div>
      <div className="p-4 w-full max-w-[350px]">
        <Search
          style={{ width: "500px" }}
          placeholder="Search here..."
          enterButton
          onChange={onSearchChange}
        />
      </div>

      <div className="p-4">
        <Tabs defaultActiveKey="1">
          <TabPane tab="All Products" key="1">
            <AllProducts searchValue={searchValue} />
          </TabPane>
          <TabPane tab="Most Popular" key="2">
            <MostPopular />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Products;
