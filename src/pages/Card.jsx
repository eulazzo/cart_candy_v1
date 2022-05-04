import { ProductList, Spinner, Button, Header } from "../components/";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, reset } from "../redux/cartSlice";

const Card = () => {
  const cart = useSelector((state) => state.cart);
  const [freeShipping] = useState(cart.total);
  const dispatch = useDispatch();

  const resetCart = () => dispatch(reset());

  const removeProduct = (prod) => dispatch(removeItem(prod));

  if (!cart.products.length)
    return <Spinner message="O carrinho está vazio!" />;

  return (
    <div className="min-h-screen container mx-auto">
      <Header />
      <div className="flex items-center justify-center">
        <div className="bg-white border-2 shadow-md  w-80 rounded-lg font-poppins">
          <h3 className="text-center font-bold text-sm py-2 border-b-2">
            Meu Carrinho
          </h3>

          {cart.products?.map((prod) => (
            <ProductList
              key={prod.id}
              id={prod.uniqueId}
              removeProduct={() => removeProduct(prod)}
              imageUrl={prod.imageUrl}
              name={prod.name}
              price={prod.price}
              sellingPrice={prod.sellingPrice}
              quantity={prod.quantity}
            />
          ))}

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
          <Button resetCart={resetCart} text="Limpar Carrinho" />
        </div>
      </div>
    </div>
  );
};

export default Card;
