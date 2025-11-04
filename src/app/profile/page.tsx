'use client'

import styles from '@/styles/ProfilePage.module.css'

export default function ProfilePage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Top Navigation */}
      <header className={styles.topNav}>
        <div className={styles.brand}>
          <img src="/astu-logo.png" alt="ASTU Logo" className={styles.logoImage} />
          <span className={styles.logoText}>ASTU</span>
        </div>
        <nav className={styles.navLinks}>
          <a href="#">complien</a>
          <a href="#">result</a>
          <a href="#">comment</a>
          <a href="#">profile</a>
        </nav>
      </header>

      {/* Main Layout */}
      <div className={styles.mainLayout}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.profileBox}>
            <p>name: Hawi Girma</p>
            <p>employerID: SE</p>
            <p>email: example@gmail.com</p>
            <p>personal_info edit</p>
            <p>emergency_contact_info edit</p>
            <p>education_background edit</p>
          </div>
          
        </aside>

        {/* Main Content */}
        <main className={styles.content}>
          <div className={styles.cardRow}>
            <div className={styles.card}>
              <h3>self ev. test</h3>
              <button className={styles.button}>start test</button>
            </div>
            <div className={styles.card}>
              <h3>Peer evaluation form</h3>
              <button className={styles.button}>Select peer</button>
            </div>
          </div>

          <div className={styles.resultSection}>
            <button className={styles.button}>my result</button>
            <button className={styles.button}>download result</button>
          </div>
        </main>
      </div>
    </div>
  )
}
