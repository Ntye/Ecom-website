import React, { useState, useEffect } from "react";
import android_icon from "../image/android.svg";
import apple_icon from "../image/apple.svg";
import global_icon from "../image/global_icon.png";
import { Link } from "react-router-dom";
import down_icon from "../image/down_icon.png";
import up_icon from "../image/up_icon.png";
import logo_100k from "../image/logo_100k.png";
import search from "../image/search.svg";
import { data } from "../data/Data";

const Header = () => {
  const playmarket =
    "https://play.google.com/store/apps/details?id=uz.itmaker.stock";
  const applestore = "https://apps.apple.com/pl/app/100k-shop/id1529911106";
  const [searchProduct, setSearchProduct] = useState("");
  const [render, setRender] = useState(false);
  console.log(searchProduct);

  const searchedProduct = data.filter((product) => {
    if (searchProduct === "") {
      return undefined;
    } else {
      return product.name.toLowerCase().includes(searchProduct);
    }
  });
  console.log(searchedProduct);

  // function SearchBar({placeholder, data}) {}

  return (
    <header className="bg-[#E30909]">
      <div className="w-full max-w-[900px] px-5 mx-auto">
        <div className="container flex items-center justify-between">
          <div className="py-2">
            <div className="flex items-center space-x-4">
              <Link to={playmarket} target="_blank">
                <button className="flex items-center">
                  <img
                    className="w-[18px] mr-1 "
                    src={android_icon}
                    alt="android icon"
                  />
                  <p className="text-white/80 hover:text-white duration-500 font-medium">
                    Google Play
                  </p>
                </button>
              </Link>
              <Link to={applestore} target="_blank">
                <button className="flex items-center">
                  <img
                    className="w-[18px] mr-1"
                    src={apple_icon}
                    alt="apple icon"
                  />
                  <p className="text-white/80 hover:text-white duration-500 font-medium">
                    Appstore
                  </p>
                </button>
              </Link>
            </div>
          </div>


          {/* mening profilim */}
          <div className="flex items-center space-x-2">
            <img className="w-[18px]" src={global_icon} alt="global_icon" />
            <Link
              to="aloqa_uchun"
              className=" cursor-pointer text-white font-medium"
            >
              Aloqa uchun
            </Link>
          </div>
        </div>
      </div>
      <nav>
        <div className="bg-white">
          <div className="w-full max-w-[900px] pl-1 mx-auto">
            <div className=" flex items-center justify-between py-3">
              <div className="flex items-center sm:space-x-[34px] md:space-x-[100px] lg:space-x-[153px] xl:space-x-[120px] space-x-[20px]">
              <Link to="/">
              <img
                className="w-[90px] h-[30px] sm:h-[27px] sm:w-[80px] md:h-[30px] md:w-[80px] lg:w-[105px] lg:h-[25px] xl:w-[110px] xl:h-[35px]"
                src={logo_100k}
                alt="logo_100k"
              />
            </Link>


                <div className="flex flex-col relative">
                  <div className="flex">
                    <div>
                      <input
                        value={searchProduct}
                        onChange={(e) => {
                          setSearchProduct(e.target.value.trim().toLowerCase());
                          setRender((prev) => !prev);
                        }}
                        className="border-2 sm:ml-5 rounded-l-full py-1 text-black px-5 md:w-[350px] sm:w-[350px] lg:w-[300px] w-[450px] xl:w-[360px]"
                        type="text"
                        placeholder="qidiruv..."
                      />
                    </div>
                   <button className="flex items-center bg-red-600 py-1 px-3 rounded-r-full">
                    <img
                      className="w-[15px] h-[25px] md:h-[15px] md:w-[20px] sm:w-[20px] lg:w-[20px] lg:h-[20px] xl:w-[20px] xl:h-[20px]"
                      src={search}
                      alt="search_icon"
                    />
                  </button>

                  </div>
                  {searchedProduct.length > 0 && (
                    <ul className="absolute w-full top-full max-h-64 overflow-auto scroll-style-2 bg-white px-2 py-2 space-y-2">
                      {searchedProduct &&
                        searchedProduct.map((product) => {
                          return (
                            <li key={product.id} className="py-2 hover:bg-gray-100">
                              <Link to={`/${product.category}/${product.id}`}>
                                {data.image}
                                {product.name}
                              </Link>
                            </li>
                          );
                        })}
                    </ul>
                  )}
                </div>
                <div>
                <Link
                  to="https://t.me/yuzkabot"
                  className="w-[30px] h-[50px] hidden sm:[w-30px] sm:h-[50px] md:h-[20px] md:w-[20px] lg:w-[20px] lg:h-[20px] xl:w-[46px] xl:h-[46px]"
                >
                  <b>Telegram</b>
                  <b>bot</b>
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
