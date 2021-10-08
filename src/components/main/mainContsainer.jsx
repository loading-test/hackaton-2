import React from "react";
import { Link } from "react-router-dom";

const MainContainer = () => {
  return (
    <div className="container">
      <div>
        <p>Text...</p>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card" style={{ width: 18 + "rem" }}>
              <img src="#" alt="картинка" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">card</p>
                <Link to="#">Открыть</Link>
                <Link to="#">Добавить в избранное</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
