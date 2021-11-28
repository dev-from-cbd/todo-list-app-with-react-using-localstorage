import React from "react";

const Form = ({ todo, change, submit, error }) => {
  return (
    <form onSubmit={submit}>
      <div className="form-group row">
        <div className="col-9">
          <input
            type="text"
            className="form-control-plaintext"
            value={todo}
            onChange={change}
          />
          {error && <small className="form-text text-danger">{error}</small>}
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
