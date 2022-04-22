import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  Room,
  Phone,
  MailOutline,
} from "@material-ui/icons";

export const Footer = () => {
  return (
    <div className="flex items-center mt-10 ">
      <div className="flex-1 flex flex-col p-5">
        <h1 className="text-2xl font-semibold">TestCart</h1>
        <p className="my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non minus
          velit fuga quam sunt eligendi quisquam nam expedita maiores! Hic omnis
          autem aspernatur rerum quaerat ducimus architecto enim incidunt
          tempore.
        </p>

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

      <div className="flex-1 p-5 mb-20 ">
        <h1 className="text-2xl font-semibold ">Useful Links</h1>
        <ul className="m-0 p-0 list-none  flex flex-wrap mt-1">
          <li className="w-[50%] ml-[10px] cursor-pointer">Doces</li>
          <li className="w-[50%] ml-[10px] cursor-pointer">Massas</li>
          <li className="w-[50%] ml-[10px] cursor-pointer">Doces</li>
          <li className="w-[50%] ml-[10px] cursor-pointer">Doces</li>
          <li className="w-[50%] ml-[10px] cursor-pointer">Massas</li>
        </ul>
      </div>

      <div className="flex-1 p-5">
        <h1 className="text-2xl font-semibold mb-4">Contact</h1>
        <div className="flex items-center mb-5">
          <Room style={{ marginRight: "10px " }} /> 276, Brasil - MG
        </div>
        <div className="flex items-center mb-5">
          <Phone style={{ marginRight: "10px " }} />1 434 4343 8
        </div>
        <div className="flex items-center mb-5">
          <MailOutline style={{ marginRight: "10px " }} />
          sac@talkto.com
        </div>
        `;
        <img
          className="w-[50%]"
          alt="payment"
          src="https://i.ibb.co/Qfvn4z6/payment.png"
        />
      </div>
    </div>
  );
};
