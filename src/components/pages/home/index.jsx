import React from 'react'
import styles from './index.module.css'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = () => {
const to = '/introduction'
const navigate = useNavigate()
const handleClick = (to) => {
  navigate(to)
}
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{
      duration: .3
    }}
    exit={{opacity:0}}
    className={styles.container}>

        <h1 className= {styles.title}>Welcome to my <br /> React Basic</h1>
        <p>Hi! my name is Ronie, this is a website where i will recap the basic of  web development using React Library</p>
        <p>this will be my way to demonstrate what i have already learned, all consepts, and coding practice will be shown here.  </p>

        <button
        onClick={()=> handleClick(to)}
        className={styles.gsbtn}>
           get started</button>
         </motion.div>
  )
}

export default Home