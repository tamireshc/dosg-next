import photosGet from "@/actions/photos-get";
import Feed from "@/components/feed/feed";

export default async function Home() {
  const data = await photosGet();
  if (!data?.data) return null;
  return (
    <section className="container mainContainer">
      <Feed photos={data?.data} />
    </section>
  );
}
