"use client";

import styles from "./lock.module.scss";
import { motion } from "framer-motion";

const textVariants = {
  start: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
  end: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 2,
    },
  },
};

export default function Lock() {
  return (
    <motion.svg
      id='logo'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 401 401'
    >
      <motion.path
        id='lock-frame'
        className={styles.lockFrame}
        d='m347.5,169.34v142.32c0,28.51-23.33,51.84-51.84,51.84H105.34c-28.51,0-51.84-23.33-51.84-51.84v-142.32c0-26.45,20.08-48.44,45.74-51.47,2-.25,4.04-.37,6.1-.37h190.32c2.06,0,4.1.12,6.1.37,25.66,3.03,45.74,25.02,45.74,51.47Z'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      />
      <motion.g id='polygon'>
        <motion.polygon
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            delay: 2,
          }}
          id='polygon-big'
          className={styles.polygons}
          points='237.825 244.149 237.825 201.05 200.5 179.5 163.175 201.05 163.175 244.149 200.5 265.699 237.825 244.149'
        />
        <motion.polygon
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            delay: 3,
          }}
          id='polygon-small-bottom'
          className={styles.polygons}
          points='218.971 254.825 218.971 233.363 200.384 222.632 181.798 233.363 181.798 254.825 200.384 265.556 218.971 254.825'
        />
        <motion.polygon
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            delay: 3,
          }}
          id='polygon-small-top'
          className={styles.polygons}
          points='219.087 211.722 219.087 190.26 200.5 179.529 181.913 190.26 181.913 211.722 200.5 222.453 219.087 211.722'
        />
      </motion.g>
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 3,
          duration: 2,
        }}
        id='duga-closed'
        className={styles.duga}
        d='m301.76,117.87c-2-.25-4.04-.37-6.1-.37h-3.16c-20.94-44.18-53-72.99-92-72.99s-70.06,28.81-91,72.99h-4.16c-2.06,0-4.1.12-6.1.37,21.45-49.87,58.79-82.87,101.26-82.87s79.81,33,101.26,82.87Z'
      />
      <motion.g id='text'>
        <motion.path
          variants={textVariants}
          initial='start'
          animate='end'
          className={styles.text}
          d='m102.177,327.425c.05,6.451,3.3,10.451,8.101,10.451,4.7,0,6.3-2.65,7.2-4.7h2.55c-1.05,3.3-3.7,7.05-9.851,7.05-7.601,0-10.551-6.55-10.551-12.9,0-7.15,3.55-13.301,10.851-13.301,7.701,0,10.151,6.65,10.151,11.351,0,.7,0,1.4-.05,2.05h-18.401Zm15.851-2.2c-.05-4.95-2.75-8.85-7.651-8.85-5.15,0-7.5,3.6-8.05,8.85h15.701Z'
        />
        <motion.path
          variants={textVariants}
          initial='start'
          animate='end'
          className={styles.text}
          d='m128.727,304.624h2.7v15.251h21.001v-15.251h2.7v35.002h-2.7v-17.251h-21.001v17.251h-2.7v-35.002Z'
        />
        <motion.path
          variants={textVariants}
          initial='start'
          animate='end'
          className={styles.text}
          d='m165.877,327.425c.05,6.451,3.3,10.451,8.101,10.451,4.7,0,6.3-2.65,7.2-4.7h2.55c-1.05,3.3-3.7,7.05-9.85,7.05-7.601,0-10.551-6.55-10.551-12.9,0-7.15,3.55-13.301,10.851-13.301,7.701,0,10.151,6.65,10.151,11.351,0,.7,0,1.4-.05,2.05h-18.401Zm15.851-2.2c-.05-4.95-2.75-8.85-7.65-8.85-5.15,0-7.5,3.6-8.05,8.85h15.701Z'
        />
        <motion.path
          variants={textVariants}
          initial='start'
          animate='end'
          className={styles.text}
          d='m191.627,321.425c0-4.2-.051-6-.051-6.801h2.45c.051.801.101,2.4.101,5.601,1.45-3.75,4.65-6,8.7-6.2v2.7c-5.2.35-8.7,3.95-8.7,9.9v13.001h-2.5v-18.201Z'
        />
        <motion.path
          variants={textVariants}
          initial='start'
          animate='end'
          className={styles.text}
          d='m208.627,302.773h2.5v4.851h-2.5v-4.851Zm0,11.851h2.5v25.002h-2.5v-25.002Z'
        />
        <motion.path
          variants={textVariants}
          initial='start'
          animate='end'
          className={styles.text}
          d='m217.125,314.624h4.65v-7.8h2.5v7.8h5.951v2.351h-5.951v16.251c0,2.8.601,4.4,3.001,4.4.75,0,1.8-.05,2.6-.3v2.2c-.85.35-2.05.449-3.1.449-3.2,0-5.001-1.6-5.001-5.6v-17.401h-4.65v-2.351Z'
        />
        <motion.path
          variants={textVariants}
          initial='start'
          animate='end'
          className={styles.text}
          d='m253.676,334.876c0,2.2.2,3.95.351,4.75h-2.4c-.2-.6-.35-1.7-.45-3.851-.85,1.851-3.05,4.45-8.2,4.45-5.801,0-8.301-3.75-8.301-7.5,0-5.5,4.25-8.001,11.751-8.001h4.75v-2.55c0-2.5-.75-5.851-6.45-5.851-5.051,0-5.801,2.65-6.351,4.7h-2.5c.3-2.75,2-7,8.9-7,5.7,0,8.9,2.4,8.9,7.9v12.951Zm-2.45-8.001h-4.9c-5.55,0-9,1.45-9,5.751,0,3.149,2.25,5.3,5.75,5.3,7.15,0,8.15-4.75,8.15-10.15v-.9Z'
        />
        <motion.path
          variants={textVariants}
          initial='start'
          animate='end'
          className={styles.text}
          d='m282.226,337.926c0,8.001-3.55,12.201-10.801,12.201-6.5,0-9.2-3.65-9.8-7.451h2.55c.9,3.45,3.75,5.101,7.351,5.101,6.5,0,8.301-4.2,8.301-10.551v-2.6c-1.351,3.25-3.801,5-8.351,5-5.851,0-10.351-4.75-10.351-12.501,0-8.4,4.8-13.101,10.7-13.101,5.101,0,7.301,2.4,8.001,4.4.05-1.45.1-3.2.149-3.801h2.351c0,.9-.101,4.851-.101,7.251v16.051Zm-18.451-10.9c0,5.95,3.15,10.25,7.951,10.25,6.25,0,8.15-4.149,8.15-10.65,0-6.601-2-10.25-8.001-10.25-5.75,0-8.101,4.95-8.101,10.65Z'
        />
        <motion.path
          variants={textVariants}
          initial='start'
          animate='end'
          className={styles.text}
          d='m292.174,327.425c.05,6.451,3.3,10.451,8.101,10.451,4.7,0,6.3-2.65,7.2-4.7h2.55c-1.05,3.3-3.7,7.05-9.851,7.05-7.6,0-10.55-6.55-10.55-12.9,0-7.15,3.55-13.301,10.851-13.301,7.7,0,10.15,6.65,10.15,11.351,0,.7,0,1.4-.05,2.05h-18.401Zm15.851-2.2c-.05-4.95-2.75-8.85-7.65-8.85-5.15,0-7.5,3.6-8.05,8.85h15.7Z'
        />
      </motion.g>
    </motion.svg>
  );
}
