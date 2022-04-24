import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Hero, Product, Header, Spinner, Footer } from "../components/index";

const Home = () => {
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
    <div className="container mx-auto  ">
      <Header />
      <Hero />
      <div className="my-10">
        <div className=" my-5">
          <h2 className="text-3xl sm:text-left text-center">Produtos</h2>
        </div>
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 ">
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
      <Footer />
    </div>
  );
};

export default Home;
