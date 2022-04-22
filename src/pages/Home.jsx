import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Product from "../components/Product";
import Header from "../components/Header";
import Spinner from "../components/Spinner";
import { Footer } from "../components/Footer";

const Home = () => {
  // TODO: forma de pagamento(stripe)

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
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

  if (loading) return <Spinner message={"Loading products..."} />;

  return (
    <div>
      <div className="max-w-7xl mx-auto ">
        <Header />
        <h4 className=" font-extrabold mt-10 text-2xl mb-5">Produtos</h4>
        <div className="grid grid-cols-4 gap-10">
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
        <Footer />
      </div>
    </div>
  );
};

export default Home;
