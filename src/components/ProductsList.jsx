import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Product, Spinner } from "./";
import axios from "axios";

const ProductsList = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("./acima.json");
      setProducts(data.items);
      setError(false);
    } catch (err) {
      console.log(err);
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, [error]);

  if (loading) return <Spinner message={"Loading products..."} />;

  return (
    <div className="my-10">
      <h2 className="my-5 text-3xl sm:text-left text-center">Produtos</h2>

      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 ">
        {!error ? (
          products?.map(({ uniqueId, imageUrl, name, sellingPrice, price }) => (
            <Product
              imageUrl={imageUrl}
              name={name}
              uniqueId={uniqueId}
              sellingPrice={sellingPrice}
              price={price}
            />
          ))
        ) : (
          <span className="col-span-4 text-gray-500 text-center text-lg px-2 font-poppins">
            Não foi possível carregar os produtos
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductsList;
