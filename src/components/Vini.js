import React,{useState, useEffect} from 'react'



const Vini = ({id,nome,img,prezzo,max,handleDelete}) => {


    const [count,setCount] = useState(0);
    const [message,setMessage] = useState("");
   
    
    const min = 0;

    useEffect( () => {

      if(count === 1) {

      
      console.log(`Aggiungo ${count} bottiglia di ${nome} nel menu' `);

      } else {

      console.log(`Aggiungo ${count} bottiglie di ${nome} nel menu' `);
      }
    },[nome,count]);

    const incrementa = () => {

      if(count >= max) {

          setCount(max);
          setMessage("Hai raggiunto il massimo degli ordini disponibili");
          setTimeout(function() { setMessage("")},3000);
         

      } else {

          setCount(count + 1);
          
    
      }

    }

    const decrementa = () => {

      if(count <= min) {

          setCount(min);;

      } else {

          setCount(count - 1);
      }

    }

    const resetta = () => {

      setCount(0);
    }

    const acquista = () => {

       if(count === 0) {
           
        setMessage("*Inserimento numero dell' ordine obbligatorio");
        setTimeout(function() { setMessage("")},3000);

       } else {

        setMessage("Prodotto aggiunto");
        setTimeout(function() { setMessage("")},3000);
        setCount(0);
       

       }
    }

  return (
    <div className="vini mb-5">
         <div className="card pb-4 me-5" style={{width: "400px", textAlign:'center'}}>
            <img src={img} className="card-img-top" alt={nome} width="400px" height="400px" />
            <div className="card-body">
               <h5 className="card-title fs-4 text-success">{nome}</h5>
              <p className="card-text fs-4">{prezzo} €</p>
              <p className="card-text fs-4">{count}</p>
            </div>

            <div className="btn-1">
               <button className="btn bg-primary text-light" onClick={incrementa}>+</button>
               <button className="btn bg-primary text-light ms-3" onClick={decrementa}>-</button>
               <button className="btn bg-primary text-light ms-3" onClick={resetta}>Reset</button>
            </div>

            <div className="btn-2 mt-3">
              
              <button className="btn bg-primary text-light" onClick={acquista}>Acquista</button> 
              <button className="btn bg-primary text-light ms-3" onClick={()=> handleDelete(id)}>Elimina</button> 
              <p className="card-text text-danger">{message}</p> 
 
          </div>
         </div>
  
     
              
    </div>
  )
}

export default Vini