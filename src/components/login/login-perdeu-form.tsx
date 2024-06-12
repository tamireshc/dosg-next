"use client";

import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import Button from "../forms/button";
import Input from "../forms/input";
import stylesInput from "../forms/input.module.css";
import styles from "./login-form.module.css";
import passwordLost from "@/actions/password-lost";

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled={pending}>Enviando ...</Button>
      ) : (
        <Button>Enviar</Button>
      )}
    </>
  );
}

export default function LoginPerdeuForm() {
  const [state, action] = useFormState(passwordLost, {
    ok: false,
    error: "",
    data: null,
  });

  return (
    <>
      <form action={action} className={styles.form}>
        <Input label='Email / Usuário' name='login' type='text' />
        <input
          type='hidden'
          name='url'
          value={`${window.location.href.replace("perdeu", "resetar")}`}
        />
        {state.data ? <p>Email enviado</p> : <FormButton />}
        <p className={stylesInput.error}>{state.error}</p>
      </form>
    </>
  );
}
