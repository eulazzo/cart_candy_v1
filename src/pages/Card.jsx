import Button from "../components/Button";
import ProductList from "../components/ProductList";

import { useState } from "react";
import { useSelector } from "react-redux";

const Card = () => {
  const cart = useSelector((state) => state.cart);
  const [freeShipping] = useState(cart.total);

  return (
    <div className="bg-bgColor min-h-screen  flex items-center justify-center">
      <div className="bg-white  w-80 rounded-lg font-poppins">
        <h3 className="text-center font-bold text-sm py-2 border-b-2">
          Meu Carrinho
        </h3>

        {cart.products?.map(
          ({ uniqueId, imageUrl, name, price, sellingPrice, quantity }) => (
            <ProductList
              key={uniqueId}
              imageUrl={imageUrl}
              name={name}
              price={price}
              sellingPrice={sellingPrice}
              quantity={quantity}
            />
          )
        )}

        <div className="flex flex-col border py-3 ">
          <div className="flex mx-3 justify-between items-center">
            <span className="font-bold">Total</span>
            <span className="font-semibold">R${cart.total.toFixed(2)}</span>
          </div>
          {freeShipping > 10 && (
            <div className="mx-auto py-1 ">
              <span className="bg-freeShippingBg text-freeShippingText text-xs py-[5px] px-4 rounded-2xl">
                Parabéns, Sua compra tem frete grátis!
              </span>
            </div>
          )}
        </div>

        <Button text="Finalizar Compra" />
      </div>
    </div>
  );
};

export default Card;
