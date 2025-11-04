// components/Sidebar.tsx
import Link from 'next/link'
import styles from './Sidebar.module.css'

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.logo}>ASTU Manager</h2>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/employees">Employees</Link>
        <Link href="/reports">Reports</Link>
        <Link href="/settings">Settings</Link>
      </nav>
    </aside>
  )
}
