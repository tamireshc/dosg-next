'use server';

import { PHOTO_DELETE } from '@/functions/api';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function photoDelete(id: string) {
  const token = cookies().get('token')?.value;



  try {
    if (!token)
      throw new Error('Token inválido');
    const { url } = PHOTO_DELETE(id);

    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });

    if (!response.ok) throw new Error('Erro ao deletar a foto');
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { data: null, ok: false, error: error.message }
    } else {
      return { data: null, ok: false, error: "Erro genérico" }
    }
  }

  revalidateTag('photos'); // para revalidar o fetch de photos do feed com a tag criada nas opçoes do fetch
  redirect('/conta');
}