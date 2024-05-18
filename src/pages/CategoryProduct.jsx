import React, { useEffect, useState } from "react";
import { data } from "../data/Data.js";
import { Link, useParams } from "react-router-dom";

const CategoryProduct = () => {
  const dataCount = [];
  data.forEach((mahsulot) => {
    const kategoriya = mahsulot.category;
    dataCount[kategoriya] = (dataCount[kategoriya] || 0) + 1;
  });
  const { category } = useParams();

  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    if (category === "Barchasi") {
      setProductsData(data);
    } else {
      const filteredProducts = data.filter(
        (product) => product.category === category
      );
      setProductsData(filteredProducts);
    }
  }, [category]);
  return (
    <div className="bg-gray-50 pb-10">
  <div className="max-w-[1000px] w-full px-5 mx-auto pt-9">    
    {/*<div className="flex gap-5 overflow-x-auto mb-10 py-3">
      <Link
        to="/Barchasi"
        className={`${
          category === "Barchasi" ? "bg-gray-400 text-white " : ""
        } rounded-full border border-gray-400 px-6 py-2 min-w-max transition-colors duration-300`}
      >
        Barchasi
      </Link>
      {Object.keys(dataCount).map((item, index) => (
        <Link
          key={index}
          to={`/${item}`}
          className={`${
            item === category ? "bg-gray-400 text-white" : ""
          } rounded-full border border-gray-400 px-6 py-2 min-w-max transition-colors duration-300`}
        >
          {item}
        </Link>
      ))}
    </div>*/}

    {/* products */}
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-10 mt-3 my-10">
  {productsData.length > 0 ? (
    productsData.map((product) => (
      <li className="border rounded-lg bg-white" key={product.id}>
        <Link to={`/${product.category}/${product.id}`}>
          <img
            className="rounded-lg w-full h-[auto] object-cover"
            src={product.image}
            alt={product.name}
          />
          <div className="p-1">
            <h3 className="text-sm opacity-90">{product.name}</h3>
            <div className="flex items-center my-1">
              <span>
                <b>{product.price},000 </b>
                so`m
              </span>
            </div>
          </div>
        </Link>
      </li>
    ))
  ) : (
    <h1 className="text-center font-bold mx-auto">...</h1>
  )}
</ul>


  </div>
    </div>

  );
};

export default CategoryProduct;
