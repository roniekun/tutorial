import styles from './index.module.css'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import Intro from '../pages/intro'
import { useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

const Main = () => {
  const location = useLocation();
  return (
    <div className={styles.container}>
    <AnimatePresence>
      <Routes location={location} key={location.key}>     
              <Route exact path= '/' element={<Home/>}/>
              <Route exact path= '/introduction' element={<Intro/>}/>
              <Route/>
              <Route/>
      </Routes>
      </AnimatePresence>
        </div>

  )
}

export default Main