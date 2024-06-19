import Link from "next/link";

export default function NotFound() {
  return (
    <section className='container'>
      <h1 className='title' style={{ marginBottom: "2rem" }}>
        Página não encontrada
      </h1>
      <Link className='button' href={"/"}>
        Volte para a home
      </Link>
    </section>
  );
}
