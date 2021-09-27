import React from "react" ;
import { Link  } from "react-router-dom";

// CSS file
import styles from "./SumitNavigation.module.css" ;

function SumitNavigation( ) {
    return (
      <div className = {styles.navigation}>
        <h1>SumitNavigation</h1>
        <div className = {styles.navigationButtonContainer}>   
          <Link to = "/">
            <button className = {styles.navigationButton}>Home</button>     
          </Link>
          <Link to = "/contact">
            <button className = {styles.navigationButton}>Contact</button> 
          </Link>
        </div>
         
      </div>

    ); 
}
export default SumitNavigation ;