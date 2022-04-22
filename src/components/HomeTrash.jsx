import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import Product from "./Product";

const Home = () => {
  const [loading, setLoading] = useState(null);
  const [products, setProducts] = useState([]);
  const [freeShipping, setFreeShipping] = useState(false);
  const [productsSum, setProductsSum] = useState([]);
  const [quantity, setQuantity] = useState(1);

  // useEffect(() => {
  //   setLoading(true);
  //   fetch(`./abaixo.json`, {
  //     headers: {
  //       Accept: "Application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((res) => setProducts(res.items))
  //     .catch((res) => console.log("Error", res));
  //   setLoading(false);
  // }, []);

  useEffect(() => {
    // (previus) => [...previus, ...res.items]
    setLoading(true);
    fetch(`./acima.json`, {
      headers: {
        Accept: "Application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setProducts(res.items))
      .catch((res) => console.log("Error", res));
    setLoading(false);
  }, []);

  return (
    <div>
      <div className="max-w-7xl mx-auto ">
        <header className="py-5 border-b-2 flex justify-between">
          <h3 className="text-btnColor font-extrabold text-3xl">
            Teste Carrinho
          </h3>
          <Link to={"/cart"}>
            <div className="text-2xl cursor-pointer ml-4">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </div>
          </Link>
        </header>
        <h4 className=" font-extrabold mt-10 text-xl">Produtos</h4>
        <div className="grid grid-cols-5">
          {products.map(
            ({ uniqueId, id, imageUrl, name, sellingPrice, price }) => (
              <Link to={`/${uniqueId}`}>
                <Product
                  key={id}
                  imageUrl={imageUrl}
                  name={name}
                  sellingPrice={sellingPrice}
                  price={price}
                />
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
