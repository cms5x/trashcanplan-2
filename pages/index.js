import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TrashcanPlan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          TrashcanPlan
        </h1>

        <p className={styles.description}>
          To & From the Curbside
        </p>

        <p className={styles.description}>
          Rain or shine, we will take your trash cans to and from the curb every week for you!
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Pricing</h3>
            <p>$20/mo</p>
            <p>no contract - cancel anytime</p>
          </div>

          <div className={styles.card}>
            <h3>Contact Us</h3>
            <p>Location: Langley Oaks</p>
            <p><a href="mailto:info@trashcanplan.com">info@trashcanplan.com</a></p>
          </div>

        </div>
      </main>

      <footer className={styles.footer}>
          Copyright 2021 TrashcanPlan.com
      </footer>

    </div>
  )
}
