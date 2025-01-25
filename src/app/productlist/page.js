"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const ProductData = () => {
  const [product, setproduct] = useState([]);
  const getdata = async () => {
    const resp = await fetch("https://dummyjson.com/products");
    const { products } = await resp.json();
    setproduct(products);
  };
  useEffect(() => {
    getdata();
  }, []);
  console.log("product", product);

  return (
    <div>
      <Link href="/">Home</Link>
      {product.map((value, index) => (
        <div key={index}>{value.title}</div>
      ))}
    </div>
  );
};

export default ProductData;
