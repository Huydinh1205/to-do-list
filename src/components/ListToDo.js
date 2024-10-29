import React from "react";
import ItemToDo from "./ItemToDo";

const ListToDo = ({
  items,
  showIncomplete,
  handleChangeStatus,
  handleRemoveItem,
}) => {
  return (
    <ul>
      {items
        .filter((element) => {
          return showIncomplete ? element.status === false : true;
        })
        .map((item) => {
          return (
            <ItemToDo
              key={item.id}
              {...item}
              onChangeStatus={handleChangeStatus}
              onRemoveItem={handleRemoveItem}
            />
          );
        })}
    </ul>
  );
};

export default ListToDo;
