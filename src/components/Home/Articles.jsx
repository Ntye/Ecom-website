import React from "react";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";



const ArticlesData = [
    {
      id: 1,
      img: Img1,
      title: "Women Ethnic",
      rating: 5.0,
      color: "white",
      aosDelay: "0",
    },
    {
      id: 2,
      img: Img2,
      title: "Women western",
      rating: 4.5,
      color: "Red",
      aosDelay: "200",
    },
    {
      id: 3,
      img: Img3,
      title: "Goggles",
      rating: 4.7,
      color: "brown",
      aosDelay: "400",
    },
    {
      id: 4,
      img: Img4,
      title: "Printed T-Shirt",
      rating: 4.4,
      color: "Yellow",
      aosDelay: "600",
    },
    {
      id: 5,
      img: Img2,
      title: "Fashin T-Shirt",
      rating: 4.5,
      color: "Pink",
      aosDelay: "800",
    },
  ];
  

const Articles = () => {
    return (
        <div className="mt-14 mv-12">
           <div className="container">
            {/* Header Section */}
            <div className="text-center mb-10 max-w-[600px] mx-auto">
                <p className="text-sm text-primary">Top Selling Products</p>
                <h1 className="text-3xl font-bold">Products</h1>
                <p className="text-xs text-gray-400">Lorem ipsum dolor sit amet, consectetur 
                    adipisicing elit. Dignissimos qui tempora alias 
                    explicabo ipsum quae expedita, voluptatibus eum et blanditiis rem. Laboriosam nobis natus 
                    pariatur harum earum fugiat dolorem? Quis.
                </p>
            </div>

            {/* Body Section */}
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-3
                md:grid-cols-4 lg:grid-cols-5 place-items-center
                gap-5">
                    {/* Card section */}
                    {
                        ArticlesData.map((data)=> (
                            <div>
                            </div>

                        ))
                    }

                </div>
            </div>
        </div>
    </div>
    );
};


export default Articles;
