/* eslint-disable @next/next/no-img-element */
// import styles from "./page.module.scss";
import Divider from "../components/Divider";
import LogoIcon from "../components/Logo/logo-icon";
import Stars from "../components/Stars";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";

export default function Home() {
  return (
    <div className='relative z-0 flex flex-col items-center min-h-full px-6'>
      <Stars />
      <nav className='flex items-center justify-between w-full py-5'>
        <div className='flex w-8 h-8'>
          <LogoIcon />
        </div>
        <span className='mr-auto text-lg'>eHeritage</span>

        <div className='w-8 h-8'>
          <RxHamburgerMenu className='w-full h-full' />
        </div>
      </nav>
      <main className='flex flex-col items-center justify-center flex-1 w-full'>
        {/* <div className='max-w-xs w-60'>
          <Lock />
        </div> */}
        <section className='relative flex items-center justify-center w-full py-80 sm:py-10'>
          <div className='absolute left-[-337px] top-[-183px]'>
            <img
              src='/supporting/svg-blur.svg'
              alt='blur'
              className='w-full h-auto max-w-none'
            />
          </div>
          <div className='absolute right-[-219px] top-[21px]'>
            <img
              src='/supporting/svg-glow.svg'
              alt='blur'
              className='w-full h-auto max-w-none'
            />
          </div>
          <div className='absolute left-[-226px] bottom-[257px]'>
            <img
              src='/supporting/svg-glow.svg'
              alt='blur'
              className='w-full h-auto max-w-none'
            />
          </div>
          <div className='absolute right-[-200px] bottom-[87px]'>
            <img
              src='/supporting/svg-glow.svg'
              alt='blur'
              className='w-full h-auto max-w-none'
            />
          </div>
          Section 1
        </section>
        <section className='py-80 sm:py-10'>
          <Divider />
          Section 2
          <Divider />
        </section>
        <section className='py-80 sm:py-10'>Section 3</section>
      </main>
      <footer className='flex min-h-[80px] items-center justify-center w-full'>
        This is Footer
      </footer>
    </div>
  );
}
