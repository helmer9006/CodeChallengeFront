import React from "react";

const Inicio = (props) => {
  console.log(props);
  const { onSelectBegin } = props;

  return (
    <div className="mt-5">
      <h1 className="text-center py-5">Welcome to the Trivia Challenge!</h1>
      <div className="d-grid gap-2">
        <div className="card border-secondary mb-3">
          {/* <div className="card-header">Header</div> */}
          <div className="card-body">
            <h4 className="card-title text-center my-4">
              You will be presefnted with 10 True or Falsedasdfasdf questions.
            </h4>
            <h4 className="card-title text-center my-4">Can you score 100%?</h4>
          </div>
          <button
            type="button"
            className="btn btn-outline-secondary mx-auto mb-4"
            // onClick={onSelectBegin}
          >
            BEGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
