import React from "react";
import styles from "../componentsStyles/LoginRegister.module.css";
import Login from "./Login.component";
import Register from "./Register.component";

function LoginRegister(props) {
  return (
    <div className={styles.container}>
      <Login {...props} />
      <Register />
    </div>
  );
}

export default LoginRegister;
