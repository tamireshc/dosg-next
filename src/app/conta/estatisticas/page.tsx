import statsGet from "@/actions/stats-get";
import { Metadata } from "next";
import dynamic from "next/dynamic";

//lasy loading
const ContaEstatisticas = dynamic(
  () => import("@/components/conta/conta-estatisticas"),
  {
    loading: () => <p>carregando</p>,
    ssr: false, // somente carega no cliente ao abrir a página, não há carregamento no servidor antecipado
  }
);

export const metadata: Metadata = {
  title: "Postar | Estatísticas",
};

export default async function EstatisticasPage() {
  const data = await statsGet();
  if (!data?.data) return null;
  return (
    <section>
      <ContaEstatisticas data={data.data} />
    </section>
  );
}
