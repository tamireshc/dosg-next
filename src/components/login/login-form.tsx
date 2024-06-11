"use client";

import login from "@/actions/login";
import { useFormState, useFormStatus } from "react-dom";
import Button from "../forms/button";

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
  return (
    <>
      <form action={action}>
        <input type="text" placeholder="usuário" name="username" />
        <input type="text" placeholder="password" name="password" />
        <FormButton />
        <p>{state.error}</p>
      </form>
    </>
  );
}
