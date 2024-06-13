import LoginResetarForm from "@/components/login/login-resetar-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perdeu a senha Dogs",
  description: "Recupere a sua senha",
};

export const dynamic = "force-dynamic";

type ResetarSearchparams = {
  searchParams: {
    key: string;
    login: string;
  };
};

export default function ResetarPage({ searchParams }: ResetarSearchparams) {
  return (
    <div className="animeLeft">
      <h1 className="title"> Resete a senha</h1>
      <LoginResetarForm
        keyToken={searchParams.key}
        login={searchParams.login}
      />
    </div>
  );
}
