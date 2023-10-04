import SearchBar from "../searchBar/SearchBar"
import { NavLink } from "react-router-dom"

import styles from './Nav.module.css'
import navgif from '../../Img/sky.gif'

export default function Nav({onSearch}){
    
    return(
        <div className={styles.backgroundhome} >
            
            <div className={styles.searchBar}>  

                <SearchBar onSearch={onSearch}/>
                
                <button className={styles.button}>
                    <NavLink className={styles.navLink} to="/home">Home</NavLink>
                </button>
                
                <button className={styles.button}>
                    <NavLink className={styles.navLink} to="/favorites">Favorites</NavLink>
                </button>

                <button className={styles.button}>
                    <NavLink className={styles.navLink}to="/about">About</NavLink>
                </button>

            
            </div>
        </div>
    
    )
}
