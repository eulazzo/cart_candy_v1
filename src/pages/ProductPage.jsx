import { Add, Remove } from "@material-ui/icons";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { addProduct } from "../redux/cartSlice";
import { Footer, Header, Spinner } from "../components/index";

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

  //update Cart
  const handleClick = () => dispatch(addProduct({ ...product, quantity }));

  const addOrRemove = (type) => {
    type === "add"
      ? setQuantity(quantity + 1)
      : quantity > 1 && setQuantity(quantity - 1);
  };

  if (loading) return <Spinner message="Loadin product info..." />;

  return (
    <div className="container mx-auto ">
      <Header />
      <div className="mx-auto flex mt-14 gap-5 justify-around w-1/2 px-5 ">
        <div>
          <img
            className="w-[100%] h-[100%] border-2 p-1 cursor-pointer shadow-lg rounded-lg"
            src={product?.imageUrl}
            alt="product"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex-1">
            <p className="text-2xl font-poppins">{product?.name}</p>
            <p className="text-gray-400 text-xs mt-1 font-poppins">
              R${product?.sellingPrice}
            </p>
            <p className="text-base font-poppins">R${product?.price}</p>
            <p className="text-gray-500 font-poppins mt-4">
              Lorem, ipsum dolor sit amet Animi Animi consectetur adipisicing
              elit. Animi adipisicing
            </p>
            <div className="flex flex-row my-3 items-center cursor-pointer">
              <p className=" mr-2">Color: </p>{" "}
              <div className="bg-black rounded-full h-5 w-5 shadow-md mr-2"></div>
              <div className="bg-blue-800 rounded-full h-5 w-5 shadow-md mr-2"></div>
              <div className="bg-btnColor rounded-full h-5 w-5 shadow-md mr-2"></div>
              <div className="bg-red-800 rounded-full h-5 w-5 shadow-md mr-2"></div>
              <div className="bg-green-700 rounded-full h-5 w-5 shadow-md mr-2"></div>
            </div>
          </div>

          <div className=" flex">
            <div className="flex items-center ">
              <Remove
                onClick={() => addOrRemove("minus")}
                className="cursor-pointer"
              />
              <span>{quantity}</span>
              <Add
                onClick={() => addOrRemove("add")}
                className="cursor-pointer"
              />
            </div>
            <button
              onClick={handleClick}
              className="bg-btnColor text-white px-12 ml-2 py-2  rounded-full cursor-pointer hover:bg-blue-800 font-poppins font-medium    
              shadow-md my-3  hover:shadow-md
              active:scale-90 transition duration-150
              "
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
