import { Link } from "react-router-dom";
import Header from "../components/Header";
const Spinner = ({ message }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <div className="flex justify-center items-center w-[300px] mx-auto h-[80vh]">
        <div>
          <p className="text-lg px-2 font-poppins">{message}</p>
          <Link to="/">
            <p className="bg-blue-100 ml-2 text-center py-1 rounded-3xl hover:bg-blue-200 bg:blue-200  font-poppins">
              Go to homepage
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
