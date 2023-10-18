import React from 'react'
import styles from './index.module.css'

const Intro = () => {
  return (
    <div className={styles.container}>
      <p>
        Prior to this tutorial you should have already learned the basic of HTML, CSS and Javascript. <br />
      </p>
      <p>You will learn how to set up react router and the use of react hooks.
       This will be your guide to start again a project </p>
      <p>First thing you need is to download  <a href="https://code.visualstudio.com/">VS Code </a> 
       and install it to your local machine </p>
       <br />
      <p>Download these vscode extentions, this will make coding much eassier </p>
      <li>Auto rename tag</li>
      <li>CSS Peek</li>
      <li>ES7+ React/Redux/React-Native snippets</li>
    </div>
  )
}

export default Intro