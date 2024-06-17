import photosGet from "@/actions/photos-get";
import Feed from "@/components/feed/feed";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Postar | Minha conta",
};

export default async function ContaPage() {
  const data = await photosGet();

  return (
    <main>
      <Feed photos={[]} />
    </main>
  );
}
