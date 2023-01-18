import { useEffect, useState } from "react";
import axios from 'axios'


function App() {
  const [drones, setDrones] = useState({})
  console.log('drones: ', drones)
  useEffect(() => {
    axios.get('http://localhost:4000/drones')
    .then((response) => {
      setDrones(response.data)
      console.log('response: ', response.data)
    })
    
  }, [])
  
}

export default App;
