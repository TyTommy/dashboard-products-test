import axios from "axios"; // axios import qiling
import React, { useEffect, useState } from "react";
import { Table, Alert } from "antd";

const AllProducts = ({ searchValue }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchValue.trim() === "") {
      setData([]);
      return;
    }

    axios
      .get(`https://dummyjson.com/products/search?q=${searchValue}`)
      .then((res) => {
        const sortedData = res.data.products.sort((a, b) => a.id - b.id);
        setData(sortedData);
        setError(null);
      })
      .catch((err) => {
        console.log(err);
        setError("Error fetching data");
      });
  }, [searchValue]);

  const columns = [
    {
      title: 'Index',
      key: 'index',
      render: (_, record, index) => index + 1, 
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
  ];

  return (
    <div>
      {error && <Alert message={error} type="error" showIcon />}

      {data && data.length > 0 ? (
        <Table
          dataSource={data}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 10 }} 
        />
      ) : (
        <div className="text-center">No products found</div>
      )}
    </div>
  );
};

export default AllProducts;
