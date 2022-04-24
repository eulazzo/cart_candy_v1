import React from "react";

import {
  Room,
  Phone,
  MailOutline,
} from "@material-ui/icons";

const ContactFooterInfo = () => {
  return (
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
  );
};

export default ContactFooterInfo;
