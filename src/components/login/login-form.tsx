import login from "@/actions/login";

export default function LoginForm() {
  return (
    <>
      <form action={login}>
        <input type="text" placeholder="usuário" name="username" />
        <input type="text" placeholder="password" name="password" />
        <button>Entrar</button>
      </form>
    </>
  );
}
