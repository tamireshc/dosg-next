"use server"

import { TOKEN_POST } from '@/functions/api';
import { cookies } from 'next/headers';

export default async function login(state: {}, formData: FormData) {
  const username = formData.get("username") as string | null
  const password = formData.get("password") as string | null

  try {
    if (!username || !password) throw new Error("Preencha os dados")

    const { url } = TOKEN_POST()

    const response = await fetch(
      url,
      {
        method: 'POST',
        body: formData,
      },
    );

    if (!response.ok) throw new Error("Senhá ou usuário inválido")

    const data = await response.json();
    cookies().set('token', data.token, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24, // 1 dia em segundos
    });

    return { data: null, ok: true, error: "" }

  } catch (error: unknown) {
    if (error instanceof Error) {
      return { data: null, ok: false, error: error.message }
    } else {
      return { data: null, ok: false, error: "Erro genérico" }
    }
  }
}