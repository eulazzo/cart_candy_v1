const Product = ({ imageUrl, name, price, sellingPrice }) => {
  return (
    <div className="border-2 rounded-xl h-[100%] ">
      <div className="flex h-[80%] flex-col py-2 px-2   items-center">
        <img className="w-[50%] h-[50%] mx-auto" src={imageUrl} alt="product" />
        <span className="text-center">{name}</span>
        <span className="mt-1 text-gray-400 text-xs ">R${price}</span>
        <span>R${sellingPrice}</span>
      </div>
      <button className="text-center rounded-b-xl bg-btnColor hover:bg-blue-900 text-white w-[100%] py-6 border-0">
        Comprar Agora
      </button>
    </div>
  );
};

export default Product;
