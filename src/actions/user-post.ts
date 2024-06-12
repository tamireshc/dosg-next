"use server"

import { USER_POST } from '@/functions/api';
import login from './login';

export default async function userPost(state: {}, formData: FormData) {
	const username = formData.get("username") as string | null
	const email = formData.get("email") as string | null
	const password = formData.get("password") as string | null

	try {
		if (!username || !password || !email) throw new Error("Preencha os dados")

		const { url } = USER_POST()

		const response = await fetch(
			url,
			{
				method: 'POST',
				body: formData,
			},
		);

		if (!response.ok) throw new Error("Email, Senha ou usuário  já cadastrado")

		const data = await response.json();

		const { ok } = await login({ ok: true, error: "" }, formData)

		if (!ok) throw new Error("Erro ao Logar")

		return { data: null, ok: true, error: "" }

	} catch (error: unknown) {
		if (error instanceof Error) {
			return { data: null, ok: false, error: error.message }
		} else {
			return { data: null, ok: false, error: "Erro genérico" }
		}
	}
}