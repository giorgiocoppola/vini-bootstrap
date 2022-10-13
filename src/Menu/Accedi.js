
import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function Accedi() {


    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [message,setMessage] = useState("");
    const [message2,setMessage2] = useState("");
    const [message3,setMessage3] = useState("");
    const [accesso,setAccesso] = useState([]);


   
   

    const handleSubmit = (e) => {

      if(email === "" && password === "" ) {

          setMessage("*Campo obbligatorio");
          setTimeout(function() { setMessage("")},3000);
          setMessage2("*Campo obbligatorio");
          setTimeout(function() { setMessage2("")},3000);
          
      }  
     
      if(email === "" ) {

        
        setMessage("*Campo obbligatorio");
        setTimeout(function() { setMessage("")},3000);
          
      }

      if(password === "" ) {


        setMessage2("*Campo obbligatorio");
        setTimeout(function() { setMessage2("")},3000);
          
      }
      
      setAccesso( [ ...accesso, {
                                  id: accesso.length + 1,
                                  email:email,
                                  password:password
                                }

                  ])
                  
      e.preventDefault();
      setEmail("");
      setPassword("");  
      setMessage3("Messaggio inviato")
      setTimeout( function() { setMessage3("")},3000)

 }

 

  return (
    <div className='accedi-pagina'>
  
       <nav class="navbar bg-danger">
          <div class="container-fluid">
              <span class="navbar-brand mb-0 h1 text-light fs-2">Cantina Sociale Bordeaux</span>

              <button type="button" class="btn btn-dark fs-4"><Link className='text-decoration-none text-light' to='/'>Home</Link></button>
          </div>
       </nav>

       <main className="accedi-main">

          <h1 className='text-center  text-primary fw-bolder fs-1 mt-5'>Accedi</h1>

          <div className="pag-form pb-5">

       
<form className="border border-info rounded bg-info w-50 mx-auto p-4 mt-5">
    <div className="mb-3">
       <label htmlFor="email" className="form-label fs-4 text-light">Email</label>
       <input type="email" className="form-control border-info" id="email" value={email} onChange={ (e) => setEmail(e.target.value) } />
       <p className="card-text text-center fw-bolder text-danger">{message}</p>

     
    

    </div>

    <div className="mb-3">
       <label htmlFor="password" className="form-label fs-4 text-light">Password</label>
       <input type="password" className="form-control border-info" id="password" value={password} onChange={ (e) => setPassword(e.target.value)} />
       <p className="card-text text-center fw-bolder text-danger">{message2}</p>
    </div>
    <p className="card-text text-center text-dark">Per poterti registrare <Link to='/registrazione' className="link-light text-decoration-none text-danger fw-bolder" >clicca qui</Link> </p>
    <br />

    <div className="row g-3">

       <button type="submit" onClick={handleSubmit} className="btn btn-success fs-4">Invia</button>
       <p className="card-text text-center fw-bolder text-success">{message3}</p>

    </div>
   
    
</form> 

</div>
        </main>
        

        <Footer/>
    </div>
  )
}

export default Accedi