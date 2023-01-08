import './App.css'
import React,{useState, useEffect} from 'React';

function App() {

     const [state, setState] = useState(2)
     const [data, setData] = useState([]);

      useEffect(()=> {
        async function getData() {
        const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`)   
        
        const res = await get.json();

        setData(res); 
        console.log(res);
        }
        getData();
      }, [state])

 

  return (
    <div className="App">
           
    </div>
  )
}

export default App






