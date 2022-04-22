import { Add, Remove } from "@material-ui/icons";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import { addProduct } from "../redux/cartSlice";
import Spinner from "../components/Spinner";
import { Button } from "@material-ui/core";

const ProductPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

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

  if (loading) return <Spinner message="Loadin product info..." />;

  return (
    <div className=" max-w-7xl mx-auto">
      <Header />
      <div className="w-[700px] mx-auto flex mt-20 justify-around">
        <img
          className="w-[350px] h-[350px] border-2 p-1 cursor-pointer"
          src={product?.imageUrl}
          alt="product"
        />
        <div className="  ml-10 flex flex-col ">
          <div className="flex-1  ">
            <p className="text-xl font-poppins">{product?.name}</p>
            <p className="text-gray-400 text-xs mt-1 font-poppins">
              R${product?.sellingPrice}
            </p>
            <p className="text-base font-poppins">R${product?.price}</p>
            <p className="text-gray-500 font-poppins">
              Lorem, ipsum dolor sit amet Animi Animi consectetur adipisicing
              elit. Animi adipisicing
            </p>
          </div>

          <div className="flex items-center ">
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
                className="bg-btnColor text-white px-20 py-2 rounded-md cursor-pointer hover:bg-blue-800 font-poppins"
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
