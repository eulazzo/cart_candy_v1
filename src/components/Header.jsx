import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <header className="py-5 border-b-2 flex justify-between">
      <Link to="/">
        <h3 className="text-btnColor font-extrabold text-3xl">TestCart</h3>
      </Link>
      <Link to={"/cart"}>
        <div className="text-2xl cursor-pointer ml-4">
          <Badge badgeContent={quantity} color="primary">
            <ShoppingCartOutlined />
          </Badge>
        </div>
      </Link>
    </header>
  );
};

export default Header;
