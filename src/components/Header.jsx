import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className="container mx-auto md:flex md:flex-row  md:justify-between text-center text-sm sm:text-base  top-0 sticky z-50  bg-white py-5">
      <Link to={"/"}>
        <div className="flex flex-row justify-center cursor-pointer">
          <div className=" w-10 h-10 rounded-lg flex items-center">
            <img src="./img/cart-logo.svg" alt="" />
          </div>
          <h1 className="text-3xl text-gray-600 ml-2">Cart Candy </h1>
        </div>
      </Link>
      <div>
        <span className="text-gray-600 hover:text-btnColor px-3 sm:px-4 cursor-pointer">
          Home
        </span>
        <span
          href="#"
          className="text-gray-600 hover:text-btnColor px-3 sm:px-4 cursor-pointer"
        >
          Shop
        </span>

        <span
          href="#"
          className="text-gray-600 hover:text-btnColor px-3 sm:px-4 cursor-pointer"
        >
          Contact
        </span>
        <Link to={"/cart"}>
          <span
            href="#"
            className="bg-btnColor text-gray-50 hover:bg-blue-700 p-3 px-3 sm:px-5 rounded-full cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6 inline-block"
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
            Cart ({quantity})
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
