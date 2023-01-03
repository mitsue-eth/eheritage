"use client";

import styles from "./lock.module.scss";
import { motion } from "framer-motion";

const delays = {
  frame: 6,
  duga: 6,
  polygonSmallTop: 1,
  polygonSmallBottom: 1,
  polygonBig: 3,
  letters: 4,
  sand: 3,
};

const textVariants = {
  start: {
    opacity: 0,
    transition: {
      duration: 2,
    },
  },
  end: {
    opacity: 1,
    transition: {
      duration: 2,
      delay: delays.letters,
    },
  },
};

const sandVariants = {
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
      delay: delays.sand,
    },
  },
};

export default function Lock() {
  return (
    <motion.svg
      id='logo'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 400 400'
    >
      <motion.path
        id='lock-frame'
        className={styles.lockFrame}
        d='m347,168.84v142.32c0,28.51-23.33,51.84-51.84,51.84H104.84c-28.51,0-51.84-23.33-51.84-51.84v-142.32c0-26.45,20.08-48.44,45.74-51.47,2-.25,4.04-.37,6.1-.37h190.32c2.06,0,4.1.12,6.1.37,25.66,3.03,45.74,25.02,45.74,51.47Z'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 3,
          delay: delays.frame,
          // ease: "easeInOut",
        }}
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: delays.duga,
          duration: 3,
        }}
        id='duga-closed'
        className={styles.duga}
        d='m301.26,117.37c-2-.25-4.04-.37-6.1-.37h-3.16c-20.94-44.18-53-72.99-92-72.99s-70.06,28.81-91,72.99h-4.16c-2.06,0-4.1.12-6.1.37,21.45-49.87,58.79-82.87,101.26-82.87s79.81,33,101.26,82.87Z'
      />
      <motion.g id='polygon'>
        <motion.polygon
          initial={{ pathLength: 1, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{
            duration: 2,
            delay: delays.polygonSmallTop,
          }}
          id='polygon-small-top'
          className={styles.polygons}
          points='200 181.029 181.413 191.76 181.413 213.222 200 223.953 218.587 213.222 218.587 213.222 218.587 191.76 '
        />
        <motion.polygon
          initial={{ pathLength: 1, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{
            duration: 2,
            delay: delays.polygonSmallBottom,
          }}
          id='polygon-small-bottom'
          className={styles.polygons}
          points='200 267.056 218.471 256.325 218.471 256.325 218.471 234.863 200 224.132 181.298 234.863 181.298 256.325'
        />
        <motion.polygon
          initial={{ pathLength: 1, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{
            duration: 2,
            delay: delays.polygonBig,
          }}
          id='polygon-big'
          className={styles.polygons}
          points='237.325 245.649 237.325 202.55 200 181 162.675 202.55 162.675 245.649 200 267.199 237.325 245.649'
        />
      </motion.g>

      <motion.g id='text'>
        <motion.path
          variants={textVariants}
          initial='start'
          animate='end'
          className={styles.text}
          d='m97.291,322.632c.084,4.999,3.234,7.058,6.973,7.058,2.646,0,4.285-.462,5.629-1.05l.63,2.646c-1.26.588-3.529,1.302-6.763,1.302-6.259,0-9.998-4.158-9.998-10.25,0-6.175,3.613-10.964,9.578-10.964,6.595,0,8.36,5.797,8.36,9.536,0,.756-.084,1.344-.168,1.722h-14.24Zm10.838-2.646c.042-2.31-.966-5.965-5.125-5.965-3.739,0-5.377,3.403-5.671,5.965h10.796Z'
        />
        <motion.path
          variants={textVariants}
          initial='start'
          animate='end'
          className={styles.text}
          d='m122.659,303.812v11.889h13.694v-11.889h3.655v28.313h-3.655v-13.274h-13.694v13.274h-3.697v-28.313h3.697Z'
        />
        <motion.path
          variants={textVariants}
          initial='start'
          animate='end'
          className={styles.text}
          d='m163.61,318.852h-10.964v10.25h12.266v3.024h-15.963v-28.313h15.333v3.025h-11.636v8.989h10.964v3.024Z'
        />
        <motion.path
          variants={textVariants}
          initial='start'
          animate='end'
          className={styles.text}
          d='m172.176,304.191c1.891-.379,4.537-.589,7.058-.589,3.907,0,6.427.715,8.191,2.311,1.386,1.261,2.226,3.192,2.226,5.377,0,3.739-2.352,6.218-5.335,7.226v.084c2.185.798,3.487,2.856,4.159,5.755.924,3.991,1.597,6.68,2.185,7.771h-3.781c-.462-.798-1.092-3.234-1.89-6.764-.84-3.864-2.353-5.377-5.671-5.503h-3.445v12.267h-3.697v-27.935Zm3.697,12.896h3.739c3.907,0,6.385-2.142,6.385-5.377,0-3.696-2.646-5.251-6.511-5.293-1.807,0-3.024.169-3.613.337v10.333Z'
        />
        <motion.path
          variants={textVariants}
          initial='start'
          animate='end'
          className={styles.text}
          d='m201.072,303.812v28.313h-3.697v-28.313h3.697Z'
        />
        <motion.path
          variants={textVariants}
          initial='start'
          animate='end'
          className={styles.text}
          d='m215.437,306.922h-8.611v-3.109h20.962v3.109h-8.654v25.204h-3.696v-25.204Z'
        />
        <motion.path
          variants={textVariants}
          initial='start'
          animate='end'
          className={styles.text}
          d='m234.966,323.221l-2.898,8.905h-3.822l9.661-28.313h4.369l9.661,28.313h-3.906l-3.024-8.905h-10.04Zm9.284-2.856l-2.772-8.149c-.631-1.849-1.051-3.529-1.471-5.167h-.126c-.378,1.68-.84,3.402-1.387,5.125l-2.772,8.191h8.528Z'
        />
        <motion.path
          variants={textVariants}
          initial='start'
          animate='end'
          className={styles.text}
          d='m279.615,330.866c-1.639.588-4.873,1.554-8.695,1.554-4.285,0-7.813-1.092-10.586-3.738-2.437-2.353-3.949-6.134-3.949-10.544.042-8.401,5.839-14.619,15.333-14.619,3.276,0,5.881.757,7.058,1.303l-.883,2.982c-1.512-.672-3.402-1.218-6.259-1.218-6.89,0-11.384,4.284-11.384,11.384,0,7.183,4.284,11.426,10.922,11.426,2.395,0,4.032-.336,4.873-.756v-8.443h-5.756v-2.941h9.326v13.611Z'
        />
        <motion.path
          variants={textVariants}
          initial='start'
          animate='end'
          className={styles.text}
          d='m302.42,318.852h-10.964v10.25h12.266v3.024h-15.963v-28.313h15.333v3.025h-11.636v8.989h10.964v3.024Z'
        />
      </motion.g>
      <motion.g variants={sandVariants} initial='start' animate='end'>
        <motion.path
          id='sand-bottom'
          className={styles.sandmass}
          d='m186.041,257.504l.852-.649,2.102-1.601,2.679-2.041,2.582-1.967c.603-.46,1.202-.927,1.811-1.379.644-.478,1.269-.983,2.008-1.307.544-.239,1.126-.401,1.72-.443.786-.055,1.563.151,2.254.533.456.252.854.588,1.265.905.793.614,1.585,1.229,2.379,1.842l2.633,2.034,2.661,2.055,1.983,1.532c.209.161.418.323.627.484l-13.713,7.954s-13.843-7.954-13.843-7.954Z'
        />
        <motion.path
          id='sand-top'
          className={styles.sandmass}
          d='m200.021,222.79l-17.543-10.096v-13.056s13.726-1.94,22.268,2.438c8.542,4.378,12.777.502,12.777.502v10.068l-17.501,10.143Z'
        />
        <motion.line
          id='sand-line'
          className={styles.sand}
          initial={{ pathLength: 0.2, pathSpacing: 0.2, pathOffset: 0 }}
          animate={{ pathLength: 0.2, pathSpacing: 0.2, pathOffset: 0.4 }}
          transition={{
            duration: 1,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
          }}
          x1='200.021'
          y1='222.122'
          x2='200.021'
          y2='248.2'
        />
      </motion.g>
    </motion.svg>
  );
}
