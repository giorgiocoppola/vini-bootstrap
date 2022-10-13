import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'



function Registrazione() {

   const [nome,setNome] = useState("");
   const [cognome,setCognome] = useState("");
   const [datadinascita,setDatadinascita] = useState("");
   const [luogodinascita,setLuogodinascita] = useState("");
   const [indirizzo,setIndirizzo] = useState("");
   const [residenza,setResidenza] = useState("");
   const [sesso,setSesso] = useState("");
   const [telefono,setTelefono] = useState("");
   const [cellulare,setCellulare] = useState("");
   const [email,setEmail] = useState("");
   const [password,setPassword] = useState("");
   const [messaggio,setMessaggio] = useState("");
   const [checkbox,setCheckbox] = useState("");
   const [avviso1,setAvviso1] = useState("");
   const [avviso2,setAvviso2] = useState("");
   const [avviso3,setAvviso3] = useState("");
   const [avviso4,setAvviso4] = useState("");
   const [avviso5,setAvviso5] = useState("");
   const [avviso6,setAvviso6] = useState("");
   const [avviso7,setAvviso7] = useState("");
   const [avviso8,setAvviso8] = useState("");
   const [avviso9,setAvviso9] = useState("");
   const [avviso10,setAvviso10] = useState("");
   const [avviso11,setAvviso11] = useState("");
   const [avviso12,setAvviso12] = useState("");
   const [persona,setPersona] = useState([]);


   const handleSubmit = (e) => {

      if(nome === "" && cognome === "" && datadinascita === "" && luogodinascita === "" && indirizzo === "" && residenza === "" && sesso === "" && email === "" && password === "" && checkbox == "") {

         setAvviso1("*Campo obbligatorio");
         setTimeout(function() { setAvviso1("")},3000);
         setAvviso2("*Campo obbligatorio");
         setTimeout(function() { setAvviso2("")},3000);
         setAvviso3("*Campo obbligatorio");
         setTimeout(function() { setAvviso3("")},3000);
         setAvviso4("*Campo obbligatorio");
         setTimeout(function() { setAvviso4("")},3000);
         setAvviso5("*Campo obbligatorio");
         setTimeout(function() { setAvviso5("")},3000);
         setAvviso6("*Campo obbligatorio");
         setTimeout(function() { setAvviso6("")},3000);
         setAvviso7("*Campo obbligatorio");
         setTimeout(function() { setAvviso7("")},3000);
         setAvviso8("*Campo obbligatorio");
         setTimeout(function() { setAvviso8("")},3000);
         setAvviso9("*Campo obbligatorio");
         setTimeout(function() { setAvviso9("")},3000);
         setAvviso10("*Campo obbligatorio");
         setTimeout(function() { setAvviso10("")},3000);
         setAvviso11("*Campo obbligatorio");
         setTimeout(function() { setAvviso11("")},3000);
         setAvviso12("*Campo obbligatorio");
         setTimeout(function() { setAvviso12("")},3000);
         
     } 

     if(nome === "" ) {

        
      setAvviso1("*Campo obbligatorio");
      setTimeout(function() { setAvviso1("")},3000);
        
    }

    if(cognome === "" ) {

        
      setAvviso2("*Campo obbligatorio");
      setTimeout(function() { setAvviso2("")},3000);
        
    }

    if(datadinascita === "" ) {

        
      setAvviso3("*Campo obbligatorio");
      setTimeout(function() { setAvviso3("")},3000);
        
    }

    if(luogodinascita === "" ) {

        
      setAvviso4("*Campo obbligatorio");
      setTimeout(function() { setAvviso4("")},3000);
        
    }

    if(indirizzo === "" ) {

        
      setAvviso5("*Campo obbligatorio");
      setTimeout(function() { setAvviso5("")},3000);
        
    }

    if(residenza === "" ) {

        
      setAvviso6("*Campo obbligatorio");
      setTimeout(function() { setAvviso6("")},3000);
        
    }

    if(sesso === "" ) {

        
      setAvviso7("*Campo obbligatorio");
      setTimeout(function() { setAvviso7("")},3000);
        
    }

    if(telefono === "" ) {

        
      setAvviso8("*Campo obbligatorio");
      setTimeout(function() { setAvviso8("")},3000);
        
    }

    if(cellulare === "" ) {

        
      setAvviso9("*Campo obbligatorio");
      setTimeout(function() { setAvviso9("")},3000);
        
    }

    if(email === "" ) {

        
      setAvviso10("*Campo obbligatorio");
      setTimeout(function() { setAvviso10("")},3000);
        
    }

    if(password === "" ) {

        
      setAvviso11("*Campo obbligatorio");
      setTimeout(function() { setAvviso11("")},3000);
        
    }

    if(checkbox === "" ) {

        
      setAvviso12("*Campo obbligatorio");
      setTimeout(function() { setAvviso12("")},3000);
        
    }
   

      e.preventDefault();
      setNome("");
      setCognome("");
      setDatadinascita("");
      setLuogodinascita("");
      setIndirizzo("");
      setResidenza("");
      setSesso("");
      setTelefono("");
      setCellulare("");
      setEmail("");
      setPassword("");
      setMessaggio("");
      setCheckbox(""); 
      setPersona( [...persona, { id : persona.length + 1,
                               nome: nome, 
                               cognome: cognome,
                               datadinascita: datadinascita,
                               luogodinascita: luogodinascita,
                               indirizzo: indirizzo,
                               residenza: residenza,
                               sesso: sesso,
                               telefono: telefono,
                               cellulare: cellulare,
                               email: email,
                               password: password,
                               messaggio: messaggio,
                               checkbox: checkbox
                            }
                   ] )
     // alert("Accesso avvenuto con successo");
  }




    return (

     <div className="registrazione-pagina">

        <nav class="navbar bg-danger">
           <div class="container-fluid">
              <span class="navbar-brand mb-0 h1 text-light fs-2"><Link className="text-light text-decoration-none" to='/'>Cantina Sociale Bordeaux</Link></span>
         
           </div>
        </nav>

        <main className="registrazione-main">

             <h1 className="text-center text-primary fw-bolder fs-1 p-5">Registrazione</h1>

             <form className = "border border-info rounded bg-info w-75 mx-auto mb-5 p-5" >

                <div className="row g-3">

                   <div className="col md-6">

                      <label for="name" className="form-label fs-4 text-light">Nome:</label>
                      <input type="text" name="name" className="form-control border-info" value={nome} onChange = { (e) => setNome(e.target.value)} placeholder="Inserisci il nome" /> 
                      <p className="text-danger fs-5 text-center fw-bolder">{avviso1}</p>

                   </div> 

                   <div className="col md-6">

                      <label for="surname" className="form-label fs-4 text-light">Cognome:</label>
                      <input type="text" name="surname" id="cognome" className="form-control border-info" value={cognome} onChange = { (e) => setCognome(e.target.value)} placeholder="Inserisci il cognome" />
                      <p className="text-danger fs-5 text-center fw-bolder">{avviso2}</p>

                   </div>   
                   

                </div>
         
                                 

                <div className="row g-3">

                  <div className="col md-6">

                     <label for="date" className="form-label fs-4 text-light">Data di nascita:</label>
                     <input type="date" name="date" className="form-control border-info" id="datadinascita" value={datadinascita} onChange={ (e) => setDatadinascita(e.target.value) } />
                     <p className="text-danger text-center fs-5 fw-bolder">{avviso3}</p>

                  </div>

                  <div className="col md-6">
                     <label for="luogo" className="form-label fs-4 text-light" >Luogo di nascita:</label>
                     <input type="text" name="luogo"  className="form-control border-info" id="luogodinascita" value={luogodinascita} onChange= { (e) => setLuogodinascita(e.target.value)} />
                     <p className="text-danger text-center fs-5 fw-bolder">{avviso4}</p>
                  </div>

                  </div>               

                <div className="row g-3">
               
                <div className="col md-6">

                  <label for="address" className="form-label fs-4 text-light" >Indirizzo:</label>
                  <input type="text" name="address" className="form-control border-info" value={indirizzo} onChange={ (e) => setIndirizzo(e.target.value) } />
                  <p className="text-danger text-center fs-5 fw-bolder">{avviso5}</p>

                </div>
               <div className="col md-6">
                  <label for="residenza" className="form-label fs-4 text-light">Residenza:</label>
                  <input type="text" name="residenza" className="form-control border-info" id="residenza" value={residenza} onChange={ (e) => setResidenza(e.target.value) } />
                  <p className="text-danger text-center fs-5 fw-bolder">{avviso6}</p>
               </div>
              </div>
            
 
           

               <div className="row g-3" id="sesso">

               <div className="col md-6">

                  <label for="sesso" className="form-label fs-4 text-light" id="sesso">Sesso:</label>
                  <input class="form-check-input mt-3 ms-5" type="radio" id="defaultCheck1" checked={sesso} onChange={ (e) => setSesso(e.target.checked) }/>
                  <label for="sesso" className="form-label fs-4 text-light mt-1 ms-2">Maschio</label>
                  </div>

               <div className="col md-6">   
                  <input  className="form-check-input mt-3" name="sesso" type="radio" id="femmina" checked={sesso} onChange={ (e) => setSesso(e.target.checked) } />
                  <label for="sesso" className="form-label fs-4 text-light mt-1 ms-2">Femmina</label>
                  <p className="text-danger  fs-5 fw-bolder" id="avv7">{avviso7}</p>
               </div>

                </div>

               

                 
                  

               
             
                <div className="row g-3">

                  <div className="col md-6">   

                     <label for="tel" className="form-label fs-4 text-light" id="telefono">Telefono:</label>
                     <input type="tel" name="tel" className="form-control border-info" value={telefono} onChange={ (e)=> setTelefono(e.target.value)} />
                     <p className="text-danger text-center fs-5 fw-bolder" id="avv8">{avviso8}</p>
                  </div>

                     <div className="col md-6">

                     <label for="tel" className="form-label fs-4 text-light" id="cellulare">Cellulare:</label>
                     <input type="tel" name="tel" className="form-control border-info" id="input-cell" value={cellulare} onChange={ (e)=> setCellulare(e.target.value)} />
                     <p className="text-danger text-center fs-5 fw-bolder" id="avv9">{avviso9}</p>
                    </div>
                </div>

           

                <div className="row g-3">
                    
                <div className="col md-6">

                   <label for="email" className="form-label fs-4 text-light" id="email">E-mail:</label>
                   <input type="email" name="email"  className="form-control border-info" id="inp-email" value={email} onChange={ (e) => setEmail(e.target.value)} />
                   <p className= "text-danger text-center fs-5 fw-bolder" id="avv10">{avviso10}</p>
                </div>

                
                

                   

                
                <div className="col md-6">
               

                   <label for="password" className="form-label fs-4 text-light" id="password">Password:</label>
                   <input type="password" name="password" className="form-control border-info" id="inp-pass" value={password} onChange={ (e) => setPassword(e.target.value)} />
                   <p className="text-danger text-center fs-5 fw-bolder" >{avviso11}</p>
                </div>

                </div>


                <div className="row g-3">
         
                 <div className="col md-6">
                   <label for="messaggio" className="form-label fs-4 text-light mx-auto" id="label-mess">Messaggio:</label> 

                 </div>
                </div>
                
                <br />
                 <div className="col md-6 w-75 mx-auto">

                   <textarea class="form-control"  id="floatingTextarea2" name="messaggio" cols="80" rows="15" value={messaggio} onChange= { (e) => setMessaggio(e.target.value) }></textarea>

                </div>
           
                <div className="elenco-form" id="dati-personali">

                   <input type="checkbox" className="checklist" id="check" checked={checkbox} onChange= { (e) => setCheckbox(e.target.checked) } />
                   <label for="autorizzazione" className="form-label fs-5 text-light ms-2 mt-4 mb-3"  id="aut">Autorizzo il trattamento dei <span>dati personali</span></label>
                   <p className="text-danger fs-5 fw-bolder">{avviso12}</p>
                </div>



                 <div className="row g-3">

              
                    <button className="btn btn-success fs-4" onClick={handleSubmit}>Invia</button>

                 </div>

            

        </form>

      </main>
  
         <Footer />

     </div>
   

    
  )

}

export default Registrazione