import React from 'react'
import styles from './index.module.css'

const Footer = () => {
  const date = new Date();
  return (
    <div className={styles.container}>
      <h5 className={styles.date}>&copy;All Rights Reserved {date.getFullYear()}</h5>
    </div>
  )
}

export default Footer