// import styles from "./page.module.scss";
import Divider from "../components/Divider";
import LogoIcon from "../components/Logo/logo-icon";
import Stars from "../components/Stars";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Home() {
  return (
    <div className='relative z-0 flex flex-col items-center min-h-full px-6'>
      <Stars />
      <nav className='flex items-center justify-between w-full py-5'>
        <div className='w-8 h-8'>
          <LogoIcon />
        </div>
        <div className='w-8 h-8'>
          <RxHamburgerMenu className='w-full h-full' />
        </div>
      </nav>
      <main className='flex flex-col items-center justify-center flex-1'>
        {/* <div className='max-w-xs w-60'>
          <Lock />
        </div> */}
        <section className='py-80 sm:py-10'>Section 1</section>
        <section className='py-80 sm:py-10'>
          <Divider />
          Section 2
          <Divider />
        </section>
        <section className='py-80 sm:py-10'>Section 3</section>
      </main>
      <footer className='flex min-h-[80px] items-center justify-center'>
        This is Footer
      </footer>
    </div>
  );
}
