import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MainContainer = ({ users }) => {
  console.log(users);
  return (
    <div className="container">
      <div>
        <p>Text....</p>
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
MainContainer.propTypes = {
  users: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default MainContainer;
