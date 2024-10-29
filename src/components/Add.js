import React from "react";

const Add = ({ handleChangeInput, inputData, handleAddItem }) => {
  return (
    <div className="add">
      <hr style={{ border: "1px solid #f66e69" }} />
      <h3>Add to the To-do-list</h3>
      <input type="text" onChange={handleChangeInput} value={inputData} />
      <button onClick={handleAddItem}>ADD ITEM</button>
    </div>
  );
};

export default Add;
