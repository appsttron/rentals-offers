import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {Button} from "@mui/material";

export default function Home() {
  return (
    <>
      <Head>
        <title>Asurion Rentals +</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <div className={styles.headerContainer}>
              <>asurion</>
              <>rental +</>
              <Button variant={'contained'} className={styles.asurionButton}>Hello</Button>
          </div>

          <div className={styles.headerContainer}>
              <img src={'./dektop_hero_image.png'}/>
              <img src={'./mobile_desktop_image.png'}/>
          </div>
      </main>
    </>
  );
}
