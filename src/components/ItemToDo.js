import React, { useState } from "react";

const ItemToDo = ({ label, status, id, onChangeStatus, onRemoveItem }) => {
  return (
    <li>
      <label className={status ? "done" : ""}>{label} </label>
      <span className="btn-action">
        <input
          type="checkbox"
          className="btn-done"
          checked={status}
          onChange={() => {
            onChangeStatus(id);
          }}
        />
        <span
          className="btn-delete"
          onClick={() => {
            onRemoveItem(id);
          }}
        >
          ✘
        </span>
      </span>
    </li>
  );
};

export default ItemToDo;
//
