import React from "react";

const ListFooterItem = ({ name }) => {
  return (
    <ul className="mb-2 space-y-2 text-sm list-none">
      <li>
        <p className="text-gray-600 hover:text-gray-800">{name}</p>
      </li>
    </ul>
  );
};

export default ListFooterItem;
