'use server';

import { PHOTO_GET } from '@/functions/api';
import { Photo } from './photos-get';


type Comment = {
  comment_ID: string,
  comment_post_ID: string,
  comment_author: string,
  comment_content: string,
};

export type PhotoData = {
  photo: Photo,
  comments: Comment[]
}

export default async function photoGet(id: string) {

  try {


    const { url } = PHOTO_GET(id);

    const response = await fetch(url, {
      next: {
        revalidate: 60,
        tags: ["photos", "comment"]
      }
    });
    if (!response.ok) throw new Error('Erro ao pegar a foto.');
    const data = (await response.json()) as PhotoData;
    console.log("data", data)
    return { data, ok: true, error: '' };

  } catch (error: unknown) {
    if (error instanceof Error) {
      return { data: null, ok: false, error: error.message }
    }
  }
}