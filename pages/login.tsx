import { NextPage } from "next";
import React, { useRef } from "react";
import Layout from "../components/layout";
import styles from "../styles/login.module.css"

const Login : NextPage = () => {

  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);


  const handleSubmit = () => {
    console.log(email.current?.value, password.current?.value)
  }

  return(
    <Layout>
      <form className={styles.loginForm} >
        <div className={styles.field}>
          <label>
            Email
          </label>
          <input ref={email} type="text" name="email" />
        </div>

        <div className={styles.field}>
          <label>
            Password
          </label>
          <input ref={password} type="password" name="password" />
        </div>

        <input className={styles.submit} type="button" value="Login" onClick={handleSubmit}></input>
      </form>
    </Layout>
  )
}

export default Login;