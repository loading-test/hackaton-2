import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./mainContainer.css";
import Preloader from "../../utils/preloader";
import { Link } from "react-router-dom";

const MainContainer = ({ users }) => {

  const favoritTogle = (id) => {
    if (!localStorage.getItem("favoritUsers")) {
      localStorage.setItem("favoritUsers", JSON.stringify([]));
    }
    const favoritArray = JSON.parse(localStorage.getItem("favoritUsers"));

    if (!favoritArray.includes(id)) {
      favoritArray.push(id)
      localStorage.setItem("favoritUsers", JSON.stringify(favoritArray))
    } else {
      localStorage.setItem("favoritUsers", JSON.stringify(favoritArray.filter((localId) => localId != id)))
    }
  }
  if (users) {
    return (
      <>
        <div className="main-text">
          <p>Text....</p>
        </div>
        <div className="container">
          <div className="row">
            {users &&
              users.map((item) => {
                return (
                  <div className="col-6 col-sm-3 mt-3" key={item.id}>
                    <div className="card" style={{ width: 18 + "rem" }}>
                      <img
                        src={item.src}
                        alt="картинка"
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{`${item.age} года`}</p>
                        <p className="about">{item.aboutMe}</p>

                        <div className="link-btn-card
                          <Link to={`/${item.id}`}>
                            <button className="btn btn-outline-secondary">
                              Открыть
                            </button>
                          </Link>
                          <button className="btn btn-secondary" onClick={() => favoritTogle(item.id)}>
                            В избранное
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  } else {
    return <Preloader />;
  }
};
MainContainer.propTypes = {
  users: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default MainContainer;
