import SearchBar from "../searchBar/SearchBar"
import { NavLink } from "react-router-dom"

import styles from './Nav.module.css'
import home from "../../Img/home.jpg"

export default function Nav({onSearch}){
    
    return(
        <div className={styles.backgroundhome} >
            <div className={styles.searchBar}>  
                <SearchBar onSearch={onSearch}/>
                
                <button>
                    <NavLink to="/home">Home</NavLink>
                </button>

                <button>
                    <NavLink to="/about">About</NavLink>
                </button>

                <button>
                    <NavLink to="/favorites">Favorites</NavLink>
                </button>
            
            </div>
        </div>
    
    )
}
