import { useEffect, useState } from "react";
import axios from 'axios'


function App() {
  const [drones, setDrones] = useState()
 
  useEffect(() => {
    const response =axios.get('http://localhost:4000/drones').then((response) => {
    })
    console.log('response: ', response)
    
  }, [])
  
}

export default App;
