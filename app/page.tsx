/* eslint-disable @next/next/no-img-element */
// import styles from "./page.module.scss";
import Divider from "../components/Divider";
import LogoIcon from "../components/Logo/logo-icon";
import Stars from "../components/Stars";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";
import { fdatasync } from "fs";
import { GFS_Didot } from "@next/font/google";
import { formatDiagnostic } from "typescript";

export default function Home() {
  return (
    <div className=''>
      {/* <Stars /> */}
      <nav className='absolute top-0 left-0 right-0 flex items-center justify-between w-full px-6 py-5 z-[999]'>
        <div className='flex w-8 h-8'>
          <LogoIcon />
        </div>
        <span className='mr-auto text-lg'>eHeritage</span>

        <div className='w-8 h-8'>
          <RxHamburgerMenu className='w-full h-full' />
        </div>
      </nav>
      <main className='flex flex-col items-center justify-center w-full'>
        <header className='relative flex items-center justify-center w-full min-h-screen pt-32 overflow-hidden'>
          {/* hero-bg-wrap */}
          <div className='absolute left-0 right-0 top-0 bottom-0 -z-10 bg-[#222326]'>
            <div className='absolute top-0 bottom-0 left-0 right-0 bg-tiles-pattern bg-[length:142px_71px] z-[1] [background-position:50%_0]'></div>
          </div>
          {/* page-padding */}
          <div className='px-6'>
            {/* container-medium-relative */}
            <div className='relative w-full max-w-6xl mx-auto'>
              {/* home-hero-bg-glow */}
              <div className='absolute top-0 bottom-0 left-0 right-0 z-0'>
                <div className='absolute left-[-330px] top-[-180px] w-[660px]'>
                  <img
                    src='/supporting/svg-blur.svg'
                    alt='blur'
                    width='944'
                    height='798'
                    className='w-full h-auto max-w-none'
                  />
                </div>
                <div className='absolute right-[-210px] top-[20px] w-[590px]'>
                  <img
                    src='/supporting/svg-glow.svg'
                    alt='blur'
                    className='w-full h-auto max-w-none'
                  />
                </div>
                <div className='absolute left-[-226px] bottom-[257px] w-[780px]'>
                  <img
                    src='/supporting/svg-glow.svg'
                    alt='blur'
                    className='w-full h-auto max-w-none'
                  />
                </div>
                <div className='absolute right-[-200px] bottom-[87px] w-[600px]'>
                  <img
                    src='/supporting/svg-glow.svg'
                    alt='blur'
                    className='w-full h-auto max-w-none'
                  />
                </div>
              </div>
              {/* home-hero-header */}
              <div className='max-w-xl mb-24 relative z-[2] flex flex-col my-auto items-center text-center'>
                <p className='my-10 text-4xl'>This is eHeritage</p>
              </div>
              {/* container-small */}
              <div className=''></div>
              {/* home-hero-logos-wrap */}
              <div className=''></div>
            </div>
          </div>
        </header>
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
