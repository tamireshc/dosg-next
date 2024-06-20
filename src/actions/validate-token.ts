'use server';

import { TOKEN_VALIDATE_POST } from '@/functions/api';
import { cookies } from 'next/headers';

export default async function validateToken() {

  try {
    const token = cookies().get("token")?.value
    const { url } = TOKEN_VALIDATE_POST();

    if (!token) throw new Error("Acesso negado")

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });

    if (!response.ok) throw new Error('Erro ao validar token');

    const data = (await response.json())
    return { data, ok: true, error: '' };

  } catch (error: unknown) {
    if (error instanceof Error) {
      return { data: null, ok: false, error: error.message }
    }
  }
}
