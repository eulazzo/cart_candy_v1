import { Add, Remove } from "@material-ui/icons";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { addProduct } from "../redux/cartSlice";
import { Footer, Header, Spinner, ColorOption } from "../components/index";

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
    // TODO: melhorar página
    <div className="container mx-auto ">
      <Header />
      <div
        className="flex-col mt-14 gap-5  mx-auto sm:h-[400px] justify-center
        md:flex md:flex-row    
      "
      >
        <img
          className="border-2 p-1 cursor-pointer shadow-lg rounded-lg  
          "
          src={product?.imageUrl}
          alt="product"
        />

        <div className="flex flex-col w-[310px] ml-10 md:ml-0 md:mt-0 mt-5">
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
              <p className=" mr-2">Color: </p>
              <ColorOption bgcolor="bg-blue-800" />
              <ColorOption bgcolor="bg-btnColor" />
              <ColorOption bgcolor="bg-red-800" />
              <ColorOption bgcolor="bg-green-700" />
              <ColorOption bgcolor="bg-yellow-500" />
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
