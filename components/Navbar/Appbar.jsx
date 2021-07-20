import React, {useState, useEffect}from 'react'
import styles from './Appbar.module.css'
import { Navbar } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa';
import { IoFlash } from "react-icons/io5";
import Link from 'next/link'

export default function Appbar(props) {
    const [active, setActive] = useState(false)
    const [value, setValue] = useState("")
    useEffect(() => {
        if(value != "" && active === false){
            setValue("")
        }
    })
    const setLink = () => {
        if(value != ""){
            return (
                <Link href={`http://localhost:3000/search/${value}`}>
                    <button className={styles.appbar_btn}><FaSearch className={styles.icon}/></button>
                </Link>
            )
        }
        else{
            return (
                <button onClick={e => {e.preventDefault(); setActive(true)}} className={styles.appbar_btn}><FaSearch className={styles.icon}/></button>
            )
        }
    }

    return (
        <Navbar className={styles.app_bar}>
            <Navbar.Brand>
                
                
                <a href='/'><h2 className={styles.brand_txt}>Today Weather</h2></a>
               
            </Navbar.Brand>
            <ul className={styles.nav_list}>
                <li className={styles.list_item}>
                    <div className={styles.search_box}>
                        
                        {setLink()}
                        <input onChange={e => {setValue(e.target.value)}} value={value} className={active? styles.active: styles.input} type="text" placeholder="Search location"/>
                    </div>
                    
                </li>
                <li className={styles.list_item}>
                    <button className={styles.appbar_btn}><IoFlash className={styles.icon} /></button>
                </li>
            </ul>
        </Navbar>
    )
}
