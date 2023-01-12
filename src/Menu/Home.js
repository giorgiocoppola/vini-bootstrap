import React, { useState } from 'react'
import vini from '../minicomponents/vini'
import Header from '../components/Header'
import  Footer from'../components/Footer'
import Vini from '../components/Vini'

function Home() {

   const [elencovini,setElencovini] = useState([...vini])

    const handleDelete = id => {

        const deletevini = vini.filter( vino => vino.id !== id );
        setElencovini(deletevini);
    }

  return (
    <div className="App">
      
       <Header /> 
  
         <div className ="d-flex flex-row flex-wrap justify-content-center justify-items-center mt-5">
         {
           elencovini.map((vino) =>{
           return <Vini key={vino.id} {...vino} handleDelete={handleDelete} />
          }) }
         </div>
        <Footer />

         </div>
             
    
  )
}

export default Home


