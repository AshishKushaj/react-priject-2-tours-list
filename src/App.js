import React, {  useEffect ,useState } from 'react';
import './App.css';
import List from './List';
import Loading from './Loading';


function App() {
  
  const [tours , setTours] = useState([]);
  const [loading, setLoading] = useState([]);
  


  // -------------------------removing tour-----------------------------------
  const removeTour = (id)=>{
    const newTour = tours.filter(tour => id!==tour.id);

    setTours(newTour);
  }

  // ------------------------------------------------------------


  const fetchTour = async ()=>{      //fetching data from api
    setLoading(true);

    const res = await fetch('https://course-api.com/react-tours-project');
    const tours = await res.json();

    setTours(tours)
    setLoading(false);
  }

  useEffect(()=>{   //invoking the fetchTour function
    fetchTour();
  }, []); 


  // ------------------------------------------------------------


  if(loading){    // temporarily display loading 
    return(
      <Loading/>
    )
  }

  // ------------------------------------------------------------
  if(tours.length === 0){
    return(
      <div className='tc ma3'>
        <h1>No Tours left</h1>

        <button
        className='ma3'
          onClick={() =>{
            fetchTour()
          }
        }
        >Relode</button>
      </div>
    )
  }


  // ------------------------------------------------------------

  
  return (
    <div>
      <List tours={tours} removeTour={removeTour}/>

    </div>
  );
}

export default App;
