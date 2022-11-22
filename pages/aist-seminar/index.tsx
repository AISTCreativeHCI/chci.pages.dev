import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AIST Creative HCI Seminar</title>
        <meta name="description" content="Web pages for AIST Creative HCI Seminar" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          AIST Creative HCI Seminar
        </h1>

        <p className={styles.description}>
          At AIST (National Institute of Advanced Industrial Science and Technology), we strive to develop technologies that help people unleash their creativity, which should be the prominent role of human beings in the age of AI.
        </p>
        <p className={styles.description}>
          This seminar series will invite rising stars in the Human-Computer Interaction field and cover diverse topics which are directly/indirectly connected to creativity support research. The seminar series is supported by the advisory board of senior and prestigious HCI researchers based in Japan.
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h2>Schedule</h2>
            <p>The first edition of the seminar is going to be held on <strong>March 7 (Tue), 2023</strong>.</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Details to come</h2>
            <p>We plan to hold the first edition as a hybrid event. Stay tuned!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.aist.go.jp"
          target="_blank"
          rel="noopener noreferrer"
        >
          organized by{' '}
          <span className={styles.logo}>
            <Image src="/aist-logo.png" alt="AIST Logo" width={150} height={26} />
          </span>
        </a>
      </footer>
    </div>
  )
}
