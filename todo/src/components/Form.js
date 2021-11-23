import React from "react";

const Form = ({ todo, change }) => {
  return (
    <form>
      <div className="form-group row">
        <div className="col-9">
          <input
            type="text"
            className="form-control-plaintext"
            value={todo}
            onChange={change}
          />
        </div>

        <div className="col-3">
          <button type="submit" className="btn btn-primary">
            App ToDo
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
