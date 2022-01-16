import 'bulma/css/bulma.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faLinkedinIn, faGithub}  from '@fortawesome/free-brands-svg-icons'
export const  Footer =()=>{
const photo_style={
    maxHeight:'115px',
    borderRadius:"35px",
    display:'flex',
    opacity:'0.85',


}
const navbar_style={
    maxHeight:'250px',
    backgroundColor:'black',
    padding:'1.0%', 
    display:'flex',
    
    flexWrap:'wrap',
    opacity:'0.85'
}
const divide={
    paddingLeft:"15%"

}
const divide2={
    paddingLeft:"35%"

}
const logo_name={
    fontSize:'1.5em',
    color:"white",
    padding:'20px 20px 0px 25px',
    justifyContent:'left'
   
}
const opacidad={
  opacity:'0.85'
}
const holi={
   
    justifyContent:'right'
   
}



return (
<nav className='navbar is-fixed-top role="navigation" aria-label="main navigation"' style={navbar_style}>
<div className='divider'  style={divide}>
                
                        </div>
       
        <div className='navbar-brand is-size-1'  style={holi}>
                
<a >
          <img src="https://portfolio-isaias.s3.us-east-2.amazonaws.com/logo.png" alt="site-logo" style={photo_style}></img>
        
             
</a>
          
        </div>


        <div className='navbar-brand' style={opacidad} >
                

         
          <a  style={logo_name} >
           ByeWord!
        
                    </a>     
                   


          

        </div>
        
        
      
       
        <div className="navbar-end is-right" style={divide2} >
            
      <div className="navbar-item ">
      
        <div className="buttons ">
       
       
          
          <a href="https://www.linkedin.com/in/isaias-ponce-569109104/" target="_blank"  className="button ">
              
            <span className="icon ">
                <FontAwesomeIcon icon={faLinkedinIn}/>
                </span>
          </a>
          <a href="https://github.com/emilioPonceAlvarado16" target="_blank" className="button" >
              <span className="icon">
          <FontAwesomeIcon icon={faGithub}/>
          </span>
          </a>

          <a href="mailto:isaiasponce-12@hotmail.es" target="_blank" className="button" >
              <span className="icon">
          <FontAwesomeIcon icon={faEnvelope}/>
          </span>
          </a>
        </div>
      </div>
    </div>

        
</nav>
)
}