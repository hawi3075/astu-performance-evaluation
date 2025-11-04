// components/EmployeeCard.tsx
import styles from './EmployeeCard.module.css'

type Props = {
  id: string
  name: string
  department: string
}

export default function EmployeeCard({ id, name, department }: Props) {
  return (
    <div className={styles.card}>
      <h3>{name}</h3>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Department:</strong> {department}</p>
      <button className={styles.button}>Complain</button>
    </div>
  )
}
