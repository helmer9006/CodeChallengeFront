import React from "react";
import useRequest from "./hook/useRequest";

const quiz = () => {
  const amount = 10;
  const difficulty = "hard";
  const type = "boolean";

  const data = useRequest(
    `amount=${amount}&difficulty=${difficulty}&type=${type}`
  );
  console.log(data);
  return (
    <div classNameName="container ">
      <h1 className="text-center ">Asked Questions</h1>
      <div className="d-grid gap-2">
        <div className="card border-secondary mb-3">
          <div className="card-header">Header</div>
          <div className="card-body">
            <h4 className="card-title">Secondary card title</h4>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <fieldset className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Not
                </label>
              </div>
            </fieldset>
          </div>
        </div>
        <button type="button" className="btn btn-outline-secondary">
          Back
        </button>
      </div>
    </div>
  );
};

export default quiz;
