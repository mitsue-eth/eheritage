import styles from "./page.module.scss";
import Lock from "../components/Logo/lock";
import Stars from "../components/Stars/stars";

export default function Home() {
  return (
    <div className='relative z-0 flex flex-col items-center min-h-full'>
      <Stars />
      <header className='flex min-h-[80px] items-center justify-center'>
        This it Header
      </header>
      <main className='flex flex-col items-center justify-center flex-1'>
        <div className='max-w-xs w-60'>
          <Lock />
        </div>
        {/* <span className="mt-1 text-2xl hover:text-indigo-500 hover:cursor-pointer">
          eHeritage
        </span> */}
      </main>
      <footer className='flex min-h-[80px] items-center justify-center'>
        This is Footer
      </footer>
    </div>
  );
}
