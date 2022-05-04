import { Link } from "react-router-dom";
import { ColorOption } from ".";

const Product = ({ imageUrl, uniqueId, name, price, sellingPrice }) => {
  return (
    <div className="shadow-lg rounded-lg border-[1px]">
      <img src={imageUrl} className="p-10" alt="product" />

      <div className="p-5">
        <h3>
          {/* TODO:mudar isso */}
          <span>{name.slice(0, 20)}...</span>
        </h3>
        <div className="flex flex-row my-3 items-center">
          <ColorOption bgcolor="bg-blue-800" />
          <ColorOption bgcolor="bg-btnColor" />
          <ColorOption bgcolor="bg-red-800" />
          <ColorOption bgcolor="bg-green-700" />
          <ColorOption bgcolor="bg-yellow-500" />
        </div>

        <div className="flex flex-row my-3 items-center">
          <span className=" text-gray-400 rounded-md px-2 py-1 mr-2 text-xs">
            R$ {sellingPrice}
          </span>
          <span className="  text-gray-800 rounded-md px-2 py-1 mr-2 text-lg">
            R$ {price}
          </span>
        </div>

        <div className="flex flex-col xl:flex-row justify-between">
          <Link to={`/${uniqueId}`} key={uniqueId}>
            <button
              className="bg-gradient-to-r from-btnColor to-blue-900 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-blue-900 hover:from-btnColor hover:to-blue-400 flex flex-row justify-center
            shadow-md   hover:shadow-md
            active:scale-90 transition duration-150
            "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Comprar Agora
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
