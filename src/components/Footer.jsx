import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  Room,
  Phone,
  MailOutline,
} from "@material-ui/icons";

const Footer = () => {
  return (
    <footer className="">
      <div
        className="
        container
        flex flex-col flex-wrap
        px-4
        py-16
        mx-auto
        md:items-center
        lg:items-start
        md:flex-row md:flex-nowrap
      "
      >
        <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
          <p
            className="
            flex
            items-center
            justify-center
            text-4xl
            font-medium
            text-blue-700
            md:justify-start
            font-poppins
          "
          >
            Cart Candy
          </p>
          <p className="mt-2 text-sm text-justify text-gray-500 font-poppins">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            at sequi cum, impedit fuga in placeat illo eum minima possimus est
            perferendis distinctio explicabo eos natus consequuntur blanditiis
            odio optio?
          </p>
          <div className="flex mt-4">
            <input
              type="text"
              className="
              h-auto
              p-2
              text-sm
              border border-grey-light
              round
              text-grey-dark
            "
              placeholder="Your email address"
            />
            <button className="h-auto p-3 text-xs text-white bg-btnColor rounded-md font-poppins">
              Subscribe
            </button>
          </div>
          <div className="flex justify-center mt-4 lg:mt-2">
            <div className="flex items-center">
              <div
                className="w-10 h-10 text-white rounded-full flex items-center justify-center mr-[20px] cursor-pointer
            bg-facebookColor
            "
              >
                <Facebook />
              </div>
              <div
                className="w-10 h-10 text-white rounded-full flex items-center justify-center mr-[20px] cursor-pointer
            bg-instagramColor
            "
              >
                <Instagram />
              </div>
              <div
                className="w-10 h-10 text-white rounded-full flex items-center justify-center mr-[20px] cursor-pointer
            bg-twitterColor
            "
              >
                <Twitter />
              </div>
              <div
                className="w-10 h-10 text-white rounded-full flex items-center justify-center mr-[20px] cursor-pointer
            bg-pinterestColor
            "
              >
                <Pinterest />
              </div>
            </div>
          </div>
        </div>
        <div className="justify-between w-full mt-4 text-center lg:flex">
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-2 font-bold tracking-widest text-gray-900">
              Useful Links
            </h2>
            <ul className="mb-8 space-y-2 text-sm list-none">
              <li>
                <p className="text-gray-600 hover:text-gray-800">Home</p>
              </li>
              <li>
                <p className="text-gray-600 hover:text-gray-800">About Us</p>
              </li>
              <li>
                <p className="text-gray-600 hover:text-gray-800">Doces</p>
              </li>
              <li>
                <p className="text-gray-600 hover:text-gray-800">Contact Us</p>
              </li>
            </ul>
          </div>
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-2 font-bold tracking-widest text-gray-900">
              Our Specialties
            </h2>
            <ul className="mb-8 space-y-2 text-sm list-none">
              <li>
                <p className="text-gray-600 hover:text-gray-800">Bolos</p>
              </li>
              <li>
                <p className="text-gray-600 hover:text-gray-800">Bombons</p>
              </li>
              <li>
                <p className="text-gray-600 hover:text-gray-800">Churros</p>
              </li>
              <li>
                <p className="text-gray-600 hover:text-gray-800">Brigadeiro</p>
              </li>
            </ul>
          </div>
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-2 font-bold tracking-widest text-gray-900">
              Contact
            </h2>
            <ul className="mb-8 space-y-2 text-sm list-none ">
              <li>
                <div className=" text-gray-600 hover:text-gray-800 flex items-center justify-center">
                  <Room /> 276, Brasil - MG
                </div>
              </li>
              <li>
                <div className="text-gray-600 hover:text-gray-800 flex items-center justify-center ">
                  <Phone style={{ marginRight: "10px " }} />1 434 4343 8
                </div>
              </li>
              <li>
                <div className="  text-gray-600 hover:text-gray-800 flex items-center justify-center">
                  <MailOutline style={{ marginRight: "5px " }} />
                  sac@cart.com
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center -mt-12">
        <p className="text-base text-gray-400">developed by @eulazzo - 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
