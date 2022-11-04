import { NextPage } from "next";
import { SubmitHandler, useForm } from "react-hook-form";
import { signIn, useSession } from 'next-auth/react'
import { toast } from "react-toastify";
import { getError } from "../utils/error"
import Layout from "../components/layout";
import styles from "../styles/login.module.css"
import { useEffect } from "react";
import Router, { useRouter } from "next/router";


type FormValues = {
  email: string;
  password: string;
}

const Login : NextPage = () => {

  const { data: session } = useSession();

  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect as string || '/')
    }

  }, [router, session, redirect])

  const {
    handleSubmit,
    register,
    formState: {errors}
  } = useForm<FormValues>();

  const submitHandler: SubmitHandler<FormValues> = async ({email, password}) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      })
      if (result?.error) {
        toast.error(result.error)
      }
    } catch (err) {
      toast.error(getError(err))
    }
  }


  return(
    <Layout>
      <form className={styles.loginForm} onSubmit={handleSubmit(submitHandler)}>
        <div className={styles.field}>
          <label>
            Email
          </label>
          <input type="email"
          {...register('email', {required: 'Please enter email'})} 
          id="email" 
          autoFocus/>
          {errors.email && <div className={styles.errorText}>{errors.email.message as string}</div>}
        </div>

        <div className={styles.field}>
          <label>
            Password
          </label>
          <input type="password"
          {...register('password', {required: 'Please enter password'})} 
          id="password" />
          {errors.password && <div className={styles.errorText}>{errors.password.message as string}</div>}
        </div>

        <input className={styles.submit} type="submit" value="Login" />
      </form>
    </Layout>
  )
}

export default Login;