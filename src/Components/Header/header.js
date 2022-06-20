import React from "react";
import NavBar from "./navBar";

//import "./header.css"

const Header = () =>{
    return(
        <header style={styles.header}>
        <NavBar />
        </header>
    )
}

const styles = {
    header: { 
        background: "#001540",
        color: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }
}

export default Header