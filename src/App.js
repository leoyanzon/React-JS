import "./App.css";
import React, { useState} from "react";
import Header from "./Components/Header/header";
import ItemListContainer from "./Containers/itemListContainer";


const App = (props) => {

  const [temas] = useState(["javascript", "react JS", "components"])

  return(
    <>
      <Header></Header>
      <h1>Hola mundo</h1>
      <ul>
      {temas.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <ItemListContainer text = "Aqui van los items List Container"/>

    </>
  )
}
export default App
