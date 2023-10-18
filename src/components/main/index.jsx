import React from 'react'
import styles from './index.module.css'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import Intro from '../pages/intro'

const Main = () => {
  return (
    <div className={styles.container}>
      <Routes>
              <Route exact path= '/' element={<Home/>}/>
              <Route exact path= '/introduction' element={<Intro/>}/>
              <Route/>
              <Route/>
      </Routes>
        </div>
  )
}

export default Main