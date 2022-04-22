import { Add, Remove } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import { addProduct } from "../redux/cartSlice";

const ProductPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const [freeShipping, setFreeShipping] = useState(false);
  const [productsSum, setProductsSum] = useState([]);
  const [quantity, setQuantity] = useState(0);

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

  const handleClick = () => {
    //update Cart
    dispatch(addProduct({ ...product, quantity }));
  };

  const addOrRemove = (type) => {
    type === "add"
      ? setQuantity(quantity + 1)
      : quantity > 1 && setQuantity(quantity - 1);
  };

  if (loading) return;

  return (
    <div className=" max-w-7xl mx-auto">
      <Header />
      <div className="w-[700px] mx-auto flex">
        <img
          className="w-[350px] h-[350px] border-2 p-1 cursor-pointer"
          src={product?.imageUrl}
          alt="product"
        />
        <div className=" w-[80%]  ">
          <p className="font-semibold flex-1 text-xs">{product?.name}</p>
          <span className="text-gray-400 text-xs mt-1">
            R${product?.sellingPrice}
          </span>
          <p className="text-sm">R${product?.price}</p>
          <div className="flex items-center w-[50%] justify-between">
            <div className="flex items-center gap-2">
              <Remove
                onClick={() => addOrRemove("minus")}
                className="cursor-pointer"
              />
              <span>{quantity}</span>
              <Add
                onClick={() => addOrRemove("add")}
                className="cursor-pointer"
              />
              <button
                onClick={handleClick}
                className="bg-btnColor text-white px-8 py-2 rounded-md cursor-pointer hover:bg-blue-800"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
