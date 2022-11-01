import { NextPage } from "next";
import React, { useRef } from "react";
import Layout from "../components/layout";
import styles from "../styles/login.module.css"

const Login : NextPage = () => {

  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  return(
    <Layout>
      <form className={styles.loginForm}>
        <div className={styles.field}>
          <label>
            Email
          </label>
          <input ref={email} type="text" name="name" />
        </div>

        <div className={styles.field}>
          <label>
            Password
          </label>
          <input ref={password} type="text" name="name" />
        </div>

        <input className={styles.submit} type="submit" value="Login"></input>
      </form>
    </Layout>
  )
}

export default Login;