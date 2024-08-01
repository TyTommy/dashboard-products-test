import axios from "axios"; // axios import qiling
import React, { useEffect, useState } from "react";
import { Table, Alert } from "antd";

const MostPopular = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products`)
      .then((res) => {
        const mostPopular = res.data.products.filter((product) => product.rating >= 4.5);
        const sortedData = mostPopular.sort((a, b) => b.rating - a.rating);
        setData(sortedData);
        setError(null);
      })
      .catch((err) => {
        console.log(err);
        setError("Error fetching data");
      });
  }, []);

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
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
    },
  ];

  return (
    <div className="p-4">
      {error && <Alert message={error} type="error" showIcon />}

      {data && data.length > 0 ? (
        <Table
          dataSource={data}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 10 }} 
        />
      ) : (
        <div className="text-center">No popular products found</div>
      )}
    </div>
  );
};

export default MostPopular;
