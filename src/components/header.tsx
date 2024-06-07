import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  const user = false;
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} href={"/"}>
          <Image
            src={"/assets/dogs.svg"}
            alt="Dogs"
            width={28}
            height={22}
            priority
          />
        </Link>
        {user ? (
          <Link className={styles.login} href={"/conta"}>
            dods
          </Link>
        ) : (
          <Link className={styles.login} href={"/login"}>
            login/criar
          </Link>
        )}
      </nav>
    </header>
  );
}
