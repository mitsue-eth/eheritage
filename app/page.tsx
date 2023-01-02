import styles from "./page.module.scss";
import Lock from "../components/Logo/lock";
import Stars from "../components/Stars/stars";

export default function Home() {
  return (
    <div className={styles.container}>
      <Stars />
      <main className={styles.main}>
        <div className="max-w-xs w-60">
          <Lock />
        </div>
        {/* <span className="text-2xl mt-1 hover:text-indigo-500 hover:cursor-pointer">
          eHeritage
        </span> */}
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
