import React from 'react'
import styles from './index.module.css'
import { NavLink } from 'react-router-dom'
import { Turn as Hamburger } from 'hamburger-react' //https://hamburger-react.netlify.app/

const Header = ({isMediumScreen, isToggleMenu, setToggleMenu}) => {
  const handleClick = () => {
    setToggleMenu(!isToggleMenu);
    console.log(!isToggleMenu)
  }
  return (
    <div className={styles.container}  >
        <NavLink
            to='/'
             className={styles.logo}>
                          Logo
        </NavLink>
     { isMediumScreen &&  
     <div
     style={{padding: '0', zIndex: '999'}}
     onClick={handleClick}>
     <Hamburger
     toggled={isToggleMenu}
      size={18}/>
       </div> }
        </div>
  )
}

export default Header