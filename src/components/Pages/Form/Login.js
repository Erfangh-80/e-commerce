import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import { notify } from "./toast/toast.js";
import { validate } from "./validation/validate.js";

import "react-toastify/dist/ReactToastify.css";
import Styles from "../../../assets/styles/Form.module.css";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [toached, setToached] = useState({});

  useEffect(() => {
    setErrors(validate(data, "login"));
  }, [data]);

  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const FocusHandler = (event) => {
    setToached({ ...toached, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(Object.keys(errors).length === 0){
      notify("you login successfuly", "success");
    }else{
      setToached({
        email: true,
        password: true
      })
      notify("invalid error", "error");
    }
  };

  return (
    <div className={Styles.container}>
      <form onSubmit={submitHandler} className={Styles.formContainer}>
        <h2 className={Styles.header}>Login</h2>
        <div className={Styles.formFeild}>
          <label>Email</label>
          <input
            className={errors.email && toached.email ? Styles.uncompleted : Styles.formInput}
            type="text"
            name="email"
            onChange={changeHandler}
            onFocus={FocusHandler}
          />
          {errors.email && toached.email && <span>{errors.email}</span>}
        </div>
        <div className={Styles.formFeild}>
          <label>Password</label>
          <input
            className={errors.password && toached.password ? Styles.uncompleted : Styles.formInput}
            type="password"
            name="password"
            onChange={changeHandler}
            onFocus={FocusHandler}
          />
          {errors.password && toached.password && (
            <span>{errors.password}</span>
          )}
        </div>
        <div className={Styles.formButtons}>
          <Link to="/signup">Sign Up</Link>
          <button type="submit">Login</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
