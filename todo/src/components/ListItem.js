import React from "react";

const ListItem = ({ title, delHandler }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      {title}
      <div>
        <button className="btn btn-sm btn-danger mr-2" onClick={delHandler}>
          <i className="far fa-trash-alt"></i>
        </button>
        <button className="btn btn-sm btn-success" onClick={delHandler}>
          <i className="fas fa-check"></i>
        </button>
      </div>
    </li>
  );
};

export default ListItem;
