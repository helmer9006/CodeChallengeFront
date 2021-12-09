import React from "react";

const quiz = ({ questions }) => {
  console.log(questions);

  return (
    <div className="mt-5 text-center">
      <h1 className="">Asked Questions</h1>
      <div className="d-grid gap-2">
        <div className="card border-secondary m-3 p-5">
          {/* <div className="card-header">Header</div> */}
          <div className="card-body">
            <h4 className="card-title my-4">Secondary card title</h4>
            <p className="card-text my-4 px-5">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>

            <button
              type="button"
              className="btn btn-outline-secondary px-5 m-2"
            >
              Yes
            </button>

            <button
              type="button"
              className="btn btn-outline-secondary px-5 m-2"
            >
              Not
            </button>
          </div>
        </div>
      </div>
      <h1 className="text-center h4">1 of 10</h1>
    </div>
  );
};

export default quiz;
