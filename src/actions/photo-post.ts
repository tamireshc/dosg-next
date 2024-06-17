'use server';

import { PHOTO_POST } from '@/functions/api';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function photoPost(state: {}, formData: FormData) {
	const token = cookies().get('token')?.value;
	const nome = formData.get('nome') as string | null;
	const idade = formData.get('idade') as string | null;
	const peso = formData.get('peso') as string | null;
	const img = formData.get('img') as File;


	try {
		if (!token || !nome || !idade || !peso || img.size === 0)
			throw new Error('Preencha os dados.');
		const { url } = PHOTO_POST();

		const response = await fetch(url, {
			method: 'POST',
			headers: {
				Authorization: 'Bearer ' + token,
			},
			body: formData,
		});

		if (!response.ok) throw new Error('Email ou usuário já cadastrado.');
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