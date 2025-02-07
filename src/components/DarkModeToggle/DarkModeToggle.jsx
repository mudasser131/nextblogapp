"use client"

import React, { useContext } from 'react'
import styles from './darkmode.module.css'
import { Sun, Moon } from "lucide-react";
import { ThemeContext } from '../../../context/ThemeContext';


const DarkModeToggle = () => {

const {toggle, mode} = useContext(ThemeContext)

    return (
    <div className={styles.container} onClick={toggle }>
<div className="icon">
<Moon className="text-gray-500" />

</div>
<div className="icon ">
    <Sun className="text-yellow-500" />
</div>

<div className={styles.ball}  style={mode === "light" ? {left: "2px"} : {right : "2px"} }/>
    </div>
  )
}

export default DarkModeToggle