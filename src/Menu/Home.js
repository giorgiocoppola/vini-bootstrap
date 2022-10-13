import React from 'react'
import vini from '../minicomponents/vini'
import Header from '../components/Header'
import  Footer from'../components/Footer'
import Vini from '../components/Vini'

function Home() {
  return (
    <div className="App">
      
       <Header /> 
  
         <div className ="d-flex flex-row flex-wrap justify-content-center justify-items-center mt-5">
         {
           vini.map((vino) =>{
           return <Vini key={vino.id} {...vino} />
          }) }
         </div>
        <Footer />

         </div>
             
    
  )
}

export default Home


