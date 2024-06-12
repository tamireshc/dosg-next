"use client";

import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import Button from "../forms/button";
import Input from "../forms/input";
import stylesInput from "../forms/input.module.css";
import styles from "./login-form.module.css";
import userPost from "@/actions/user-post";

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled={pending}>Cadastrando ...</Button>
      ) : (
        <Button>Cadastrar</Button>
      )}
    </>
  );
}

export default function LoginCriarForm() {
  const [state, action] = useFormState(userPost, {
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
        <Input label='Email' name='email' type='email' />
        <Input label='Senha' name='password' type='password' />
        <FormButton />
        <p className={stylesInput.error}>{state.error}</p>
      </form>
    </>
  );
}
