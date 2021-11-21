import React from "react";

const Form = () => {
  return (
    <form>
      <div className="form-group row">
        <div className="col-9">
          <input type="text" className="form-control-plaintext" />
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
