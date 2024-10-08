"use client";
import React from "react";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
interface Categorie {
  idCategorie: string;
  nameCategorie: string;
  imageCategorie: string;
}

const ShopByCategorie = () => {
  const categories: Categorie[] = [
    {
      idCategorie: "1",
      nameCategorie: "Man",
      imageCategorie: "/images/wolf.jpeg",
    },
    {
      idCategorie: "2",
      nameCategorie: "Woman",
      imageCategorie: "/images/wolf.jpeg",
    },
    {
      idCategorie: "3",
      nameCategorie: "New",
      imageCategorie: "/images/wolf.jpeg",
    },
    {
      idCategorie: "4",
      nameCategorie: "Kids",
      imageCategorie: "/images/wolf.jpeg",
    },
    {
      idCategorie: "5",
      nameCategorie: "Woman",
      imageCategorie: "/images/wolf.jpeg",
    },
    {
      idCategorie: "6",
      nameCategorie: "New",
      imageCategorie: "/images/wolf.jpeg",
    },
    {
      idCategorie: "7",
      nameCategorie: "Kids",
      imageCategorie: "/images/wolf.jpeg",
    },
  ];

  const [currentIndexCategorie, setCurrentIndexCategorie] = React.useState(1);
  const visibleCategories = categories.slice(
    currentIndexCategorie,
    currentIndexCategorie + 4,
  );
  const handleNext = () => {
    setCurrentIndexCategorie((prevIndex) =>
      prevIndex + 4 >= categories.length ? 0 : prevIndex + 4,
    );
  };

  const handlePrev = () => {
    setCurrentIndexCategorie((prevIndex) =>
      prevIndex - 4 < 0
        ? categories.length - (categories.length % 4)
        : prevIndex - 4,
    );
  };
  return (
    <div className="flex flex-col self-center h-full w-8/12  py-5">
      <div className="flex w-full flex-row justify-between">
        <h1 className="text-2xl font-bold  mb-3 ">Shop by categorie </h1>
        <div>
          {" "}
          <KeyboardArrowLeftIcon
            className="border-2 rounded-xl mr-1 cursor-pointer"
            onClick={handleNext}
          />
          <KeyboardArrowRightIcon
            className="border-2 rounded-xl cursor-pointer"
            onClick={handlePrev}
          />
        </div>
      </div>
      <div className="flex w-full h-fit flex-row justify-center self-center ">
        {visibleCategories.map((catego) => (
          <CategorieCard
            key={catego.idCategorie}
            name={catego.nameCategorie}
            image={catego.imageCategorie}
          />
        ))}
      </div>
      <div className="flex flex-col w-full items-center mt-7 mb-3 ">
        <h1 className="text-xl font-bold  mb-3 ">Best Sellers </h1>
        <div className="flex w-full flex-col">
          <ul className="flex flex-row self-center my-2 w-fit">
            {categories.map((e) => (
              <li
                className="text-xl font-medium relative mx-2 block w-full cursor-pointer
                  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {e.nameCategorie}
              </li>
            ))}
          </ul>
          <div className="flex flex-row w-full flex-wrap my-1">
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
          </div>
        </div>
      </div>
    </div>
  );
};
const ShopCard = () => {
  return (
    <div className="my-5 flex flex-col w-1/4  border-gray-50">
      <div
        style={{
          backgroundImage: `url("/images/wolf.jpeg")`,
        }}
        className="bg-cover py-4 bg-center  h-96 flex mr-5 flex-col items-center justify-end"
      ></div>
      <div>
        <h3 className="slef-start text-lg">Title Product </h3>
        <p className=" ml-2 font-bold">23.00$</p>
      </div>
    </div>
  );
};
const CategorieCard = ({ name, image }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className="bg-cover py-4 bg-center w-1/5 h-96 border-gray-50 rounded-lg flex mr-5 flex-col items-center justify-end"
    >
      <div className="w-20 px-12 flex justify-center py-2 bg-orange-200 rounded-xl">
        {" "}
        {name}
      </div>
    </div>
  );
};
// const Compo = () => {
//   return (
//     <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//       <a href="#">
//         <img className="rounded-t-lg" src="/images/esi.png" alt="" />
//       </a>
//       <div className="p-5">
//         <a href="">
//           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//             Noteworthy technology acquisitions 2021
//           </h5>
//         </a>
//         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//           Here are the biggest enterprise technology acquisitions of 2021 so
//           far, in reverse chronological order.
//         </p>
//         <a
//           href="#"
//           className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         >
//           Read more
//           <svg
//             className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 14 10"
//           >
//             <path
//               stroke="currentColor"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               d="M1 5h12m0 0L9 1m4 4L9 9"
//             />
//           </svg>
//         </a>
//       </div>
//     </div>
//   );
// };

export default ShopByCategorie;
