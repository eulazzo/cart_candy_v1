const Product = ({ imageUrl, name, price, sellingPrice }) => {
  return (
    <div className="border-2 rounded-xl h-[100%] ">
      <div className="flex h-[80%] flex-col py-2 px-2   items-center">
        <img className="w-[50%] h-[50%] mx-auto" src={imageUrl} alt="product" />
        <span className="text-center">{name}</span>
        <span className="mt-1 text-gray-400 text-xs ">R${price}</span>
        <span>R${sellingPrice}</span>
      </div>
      <button className="text-center rounded-b-xl bg-btnColor hover:bg-blue-900 text-white w-[100%] py-5">
        Comprar Agora
      </button>
    </div>
  );
};

export default Product;

// <div className=" my-5 ">
//       <img
//         className="w-[150px] h-[200px] border-2 p-1 cursor-pointer"
//         src={imageUrl}
//         alt="product"
//       />
//       <div className="flex flex-col py-2">
//         <p className="font-medium flex-1 text-xl">{name}</p>
//       </div>
//       <span className="text-gray-400 text-xs mt-1">R${sellingPrice}</span>
//       <p className="text-sm">R${price}</p>
//       <button className="bg-btnColor text-white px-8 py-2 rounded-md cursor-pointer hover:bg-blue-800">
//         Comprar Agora
//       </button>
//     </div>

{
  /* <div className=" my-5   flex flex-col">
<img
  className="h-52 flex-grow  object-cover border-2 p-1 cursor-pointer"
  src={imageUrl}
  alt="product"
/>
<div className="flex flex-col py-2 content-start">
  <p className="font-medium flex-1 text-xl">{name}</p>
  <span className="text-gray-400 text-xs mt-1 flex-1">
    R${sellingPrice}
  </span>
  <p className="text-sm">R${price}</p>
  <button className="bg-btnColor text-white px-8 py-2 rounded-md cursor-pointer hover:bg-blue-800">
    Comprar Agora
  </button>
</div>
</div> */
}
