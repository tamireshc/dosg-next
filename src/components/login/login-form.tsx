"use client";

import login from "@/actions/login";
import Link from "next/link";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import Button from "../forms/button";
import Input from "../forms/input";
import styles from "../forms/input.module.css";

function FormButton() {
  const { pending } = useFormStatus();

  return <Button disabled={pending}>Entrar</Button>;
}

export default function LoginForm() {
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
      <form action={action}>
        <Input label="Usuário" name="username" type="text" />
        <Input label="Senha" name="password" type="password" />
        <FormButton />
        <p className={styles.error}>{state.error}</p>
      </form>
      <Link href="/login/perdeu">Perdeu a senha?</Link>
    </>
  );
}
