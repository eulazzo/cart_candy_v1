const Product = ({
  imageUrl,
  name,
  price,
  sellingPrice,
  quantity,
  removeProduct,
}) => {
  return (
    <div className="flex items-center m-3">
      <img
        className="w-[75px] h-[75px] border-2 p-1"
        src={imageUrl}
        alt="product"
      />
      <div className="flex flex-col ml-3 w-[80%]">
        <p className="font-semibold flex-1 text-xs">{name}</p>

        <div
          onClick={removeProduct}
          className="flex items-center cursor-pointer"
        >
          <img className="h-4 w-4" src="./img/minus.png" alt="minus button" />
          <span className="font-light text-sm opacity-70 ml-1">
            Remove item
          </span>
        </div>
        <span className="text-gray-400 text-xs mt-1">R${sellingPrice}</span>
        <span className="text-sm">R${(price * quantity).toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Product;
