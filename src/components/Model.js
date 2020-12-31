import React, { useContext, useState } from "react";
import { ContextProvider } from "../Global/Context";

const Model = () => {
  const { model, closeModel } = useContext(ContextProvider);
  const [state, setState] = useState({
    register: true,
    login: false,
  });
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleForm = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const formsToggle = () => {
    setState({
      ...state,
      register: !state.register,
      login: !state.login,
    });
  };
  const closeForm = (e) => {
    const className = e.target.getAttribute("class");
    if (className === "model") {
      closeModel();
    }
  };
  return (
    <>
      {model ? (
        <div className="model" onClick={closeForm}>
          <div className="model__container">
            {state.register ? (
              <div className="model__form">
                <form>
                  <div className="model__group">
                    <img src={require("../assets/instagram.png").default} />
                  </div>
                  <div className="model__group">
                    <input
                      type="text"
                      name="username"
                      className="model__input"
                      placeholder="Username"
                      onChange={handleForm}
                      value={inputs.username}
                      required
                    />
                  </div>

                  <div className="model__group">
                    <input
                      type="email"
                      name="email"
                      className="model__input"
                      placeholder="Email"
                      onChange={handleForm}
                      value={inputs.email}
                      required
                    />
                  </div>

                  <div className="model__group">
                    <input
                      type="password"
                      name="password"
                      className="model__input"
                      placeholder="Password"
                      onChange={handleForm}
                      value={inputs.password}
                      required
                    />
                  </div>
                  <div className="model__group">
                    <input
                      type="submit"
                      value="Register"
                      className="btn btn-smart"
                    />
                  </div>
                  <div className="model__group">
                    <span onClick={formsToggle}>
                      Already have an account ?{" "}
                    </span>
                  </div>
                </form>
              </div>
            ) : (
              <div className="model__form">
                <form>
                  <div className="model__group">
                    <img src={require("../assets/instagram.png").default} />
                  </div>

                  <div className="model__group">
                    <input
                      type="email"
                      name="email"
                      className="model__input"
                      placeholder="Email"
                    />
                  </div>

                  <div className="model__group">
                    <input
                      type="password"
                      name="password"
                      className="model__input"
                      placeholder="Password"
                    />
                  </div>
                  <div className="model__group">
                    <input
                      type="submit"
                      value="Register"
                      className="btn btn-smart"
                    />
                  </div>
                  <div className="model__group">
                    <span onClick={formsToggle}>Create a new account ?</span>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Model;
