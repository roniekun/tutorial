import React from 'react'
import styles from './index.module.css'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <NavLink>Boiler plate</NavLink>
      <NavLink>useState Hook</NavLink>
      <NavLink>useEffect Hook</NavLink>
      <li></li>
      <li></li>

    </div>
  )
}

export default Sidebar