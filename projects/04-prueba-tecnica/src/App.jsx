import "./App.css";
import { useEffect, useState } from "react";


const API_FACTS = "https://catfact.ninja/fact";
const API_CATS = "https://cataas.com/cat/says/hello";

function App() {

  const [fact,setFact] = useState('lorem ipsum')

  useEffect( () =>{
    fetch(API_FACTS)
    .then(res => res.json())
    .then(data => setFact(data.fact))
  },[])
  return (
    <>
    <main>
    <h1>App de gatitos</h1>
    <p>{fact}</p>
    </main>
      
    </>
  );
}

export default App;
