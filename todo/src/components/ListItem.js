import React from "react";

const ListItem = ({ id, title, delHandler, doneHandler }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      {title}
      <div>
        <button
          className="btn btn-sm btn-danger mr-2"
          onClick={() => delHandler(id)}
        >
          <i className="far fa-trash-alt"></i>
        </button>
        <button
          className="btn btn-sm btn-success"
          onClick={() => doneHandler(id)}
        >
          <i className="fas fa-check"></i>
        </button>
      </div>
    </li>
  );
};

export default ListItem;
