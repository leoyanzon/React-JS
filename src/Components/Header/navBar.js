import React from "react";
import logo from "../../Assets/3d-logo.png"
import styled from 'styled-components';
import CartWidget from "./cartWidget"
const NavBar = () =>{

    return(
        <>
        <div style={styles.headerLogo}>
            <img style = {styles.headerImg} src={logo} alt="" />
        </div>
        <h1>3D Models</h1>
        <div style={styles.headerMenu}> 
            <Button>Buscar</Button>
            <Button>Descargas</Button>
            <Button>Contacto</Button>
            <CartWidget />
        </div>

       
        </>
    )
}

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "white" : "none"};
  color: ${props => props.primary ? "none" : "white"};

  &:hover {
    color: #BED1F8;
    border: 2px solid #BED1F8;
  }

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 0.5em;
  border: 2px solid white;
  border-radius: 3px;
`;

const styles = {
    headerLogo: { 
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "center",
        padding: "0 2em"
    },
    headerMenu: { 
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 2em"
    },
    headerImg:{
        width: "60px",
        height: "auto",
        padding: "0.8em"

    }
}

export default NavBar