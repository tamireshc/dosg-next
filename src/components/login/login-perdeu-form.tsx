"use client";

import login from "@/actions/login";
import Link from "next/link";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import Button from "../forms/button";
import Input from "../forms/input";
import stylesInput from "../forms/input.module.css";
import styles from "./login-form.module.css";

function FormButton() {
  const { pending } = useFormStatus();

  return <Button disabled={pending}>Entrar</Button>;
}

export default function LoginPerdeuForm() {
  const [state, action] = useFormState(login, {
    ok: false,
    error: "",
    data: null,
  });

  React.useEffect(() => {
    if (state.ok) window.location.href = "/conta";
  }, [state.ok]);

  return (
    <>
      <form action={action} className={styles.form}>
        <Input label='Usuário' name='username' type='text' />
        <Input label='Senha' name='password' type='password' />
        <FormButton />
        <p className={stylesInput.error}>{state.error}</p>
      </form>
      <Link href='/login/perdeu' className={styles.perdeu}>
        Perdeu a senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site</p>
        <Link href='/login/criar' className='button'>
          Cadastre-se
        </Link>
      </div>
    </>
  );
}
