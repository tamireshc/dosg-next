import photosGet from "@/actions/photos-get";
import userGet from "@/actions/user-get";
import Feed from "@/components/feed/feed";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Postar | Minha conta",
};

export default async function ContaPage() {
  const data = await userGet();

  const photosList = await photosGet({ user: data?.data?.username });

  return (
    <main>
      {photosList?.data?.length ? (
        <Feed photos={photosList?.data} user={data?.data?.username} />
      ) : (
        <div>
          <p style={{ marginBottom: "2rem" }}>Nenhuma foto encontrada</p>
          <Link href={"/conta/postar"} className="button">
            Postar Foto
          </Link>
        </div>
      )}
    </main>
  );
}
