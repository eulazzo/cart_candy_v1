import { Add, Remove } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);

  const [freeShipping, setFreeShipping] = useState(false);
  const [productsSum, setProductsSum] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(`./acima.json`, {
      headers: {
        Accept: "Application/json",
      },
    })
      .then((res) => res.json())
      .then((res) =>
        setProduct(res.items.filter((prodID) => prodID.uniqueId === id)[0])
      )
      .catch((res) => console.log("Error", res));
    setLoading(false);
  }, [id]);

  if (loading) return;

  return (
    <div className=" mx-auto w-[500px]">
      <img
        className="w-[150px] h-[200px] border-2 p-1 cursor-pointer"
        src={product?.imageUrl}
        alt="product"
      />
      <div className="flex flex-col  w-[80%]  ">
        <p className="font-semibold flex-1 text-xs">{product?.name}</p>
      </div>
      <span className="text-gray-400 text-xs mt-1">
        R${product?.sellingPrice}
      </span>
      <p className="text-sm">R${product?.price}</p>
      <div className="flex items-center w-[50%] justify-between">
        <div className="flex items-center gap-2">
          <Remove className="cursor-pointer" />
          <span>1</span>
          <Add className="cursor-pointer" />
          <button className="bg-btnColor text-white px-8 py-2 rounded-md cursor-pointer hover:bg-blue-800">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
