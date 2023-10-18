import { useState,useEffect, } from 'react'
import styles from './app.module.css'
import Header from './components/header'
import Sidebar from './components/sidebar'
import Main from './components/main'
import Footer from './components/footer'
import Navigation from './components/navigation'

const App = () => {
  const [isMediumScreen, setMediumScreen] = useState(false)
  const [isToggleMenu, setToggleMenu] = useState (false)

  useEffect(() => {

    const handleResize = () => {
      setMediumScreen(window.innerWidth <= 1024);
      setToggleMenu(false);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMediumScreen]);


  return (
    <div className={styles.container} > 
 <Navigation
 isMediumScreen={isMediumScreen}
  isToggleMenu={isToggleMenu}/>

    <div className={styles.header}> 
         <Header isMediumScreen={isMediumScreen}
                        isToggleMenu={isToggleMenu}
                        setToggleMenu={setToggleMenu}/>
         </div>
      {!isMediumScreen && 
    <div className={styles.sidebar}>
       <Sidebar/>
       </div>}
      <div className={styles.main}> 
     <Main/>
     </div>
    <div className={styles.footer}>
      <Footer/>
      </div>
      

  
 
   
    </div>
  )
}

export default App