// import Image from "next/image";
import styles from "./page.module.scss";
import Image from "next/image";
import LockImage from "../public/Logo/lock.png";
// import styless from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.stars}></div>
      <main className={styles.main}>
        <Image
          src={LockImage}
          alt="eHeritage Logo"
          className="hover:cursor-pointer hover:saturate-200 relative"
        />
        <span className="text-2xl -mt-2 hover:text-indigo-500 hover:cursor-pointer">
          eHeritage
        </span>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
