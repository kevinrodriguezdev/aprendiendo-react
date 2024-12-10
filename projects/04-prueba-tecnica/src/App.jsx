import "./App.css";
import { useEffect, useState } from "react";


const API_FACTS = "https://catfact.ninja/fact";
const API_CATS = `https://cataas.com`;

function App() {

  const [fact,setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect( () =>{
    fetch(API_FACTS)
    .then(res => res.json())
    .then(data => {
      const { fact } = data
      setFact(fact)

      const threeFirstWords = fact.split(' ',3).join(' ')
      console.log(threeFirstWords)
      

      fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { _id } = response
        const url = `/cat/${_id}/says/${threeFirstWords}`
        setImageUrl(url)
      })
    })
  },[])
  return (
    <>
    <main>
    <h1>App de gatitos</h1>
    <button>Get a new fact</button>
    {fact && <p>{fact}</p>}
    {imageUrl && <img src={API_CATS+ imageUrl} alt="cat"/>}
    </main>
      
    </>
  );
}

export default App;
