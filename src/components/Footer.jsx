import { Facebook, Instagram, Pinterest, Twitter } from "@material-ui/icons";

import { ContacFooterInfo, ListFooterItem } from "./";

const Footer = () => {
  return (
    <footer>
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
                className="socialmedia
               bg-facebookColor"
              >
                <Facebook />
              </div>
              <div
                className="socialmedia
               bg-instagramColor"
              >
                <Instagram />
              </div>
              <div className="socialmedia bg-twitterColor">
                <Twitter />
              </div>
              <div className=" socialmedia bg-pinterestColor">
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
            <ListFooterItem name={"Home"} />
            <ListFooterItem name={"About Us"} />
            <ListFooterItem name={"Doces"} />
            <ListFooterItem name={"Contact Us"} />
          </div>

          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-2 font-bold tracking-widest text-gray-900">
              Our Specialties
            </h2>
            <ListFooterItem name={"Bolos"} />
            <ListFooterItem name={"Bombons"} />
            <ListFooterItem name={"Churros"} />
            <ListFooterItem name={"Brigadeiro"} />
          </div>
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-2 font-bold tracking-widest text-gray-900">
              Contact
            </h2>
            <ContacFooterInfo />
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
