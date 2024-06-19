'use server';

import { COMMENT_POST } from '@/functions/api';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

export default async function commentPost(state: {}, formData: FormData) {
  const token = cookies().get('token')?.value;
  const comment = formData.get('comment') as string | null;
  const id = formData.get('id') as string | null;


  try {
    if (!token || !comment || !id)
      throw new Error('Preencha os dados.');
    const { url } = COMMENT_POST(id);

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData,
    });

    if (!response.ok) throw new Error('Email ou usuário já cadastrado.');
    const data = await response.json() as Comment
    revalidateTag('comment'); // para revalidar o fetch de photos do feed com a tag criada nas opçoes do fetch
    return { data, ok: true, error: "" }

  } catch (error: unknown) {
    if (error instanceof Error) {
      return { data: null, ok: false, error: error.message }
    } else {
      return { data: null, ok: false, error: "Erro genérico" }
    }
  }

}