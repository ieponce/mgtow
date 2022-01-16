import React from 'react'
import { Template } from '../template/Template';
import { useState } from 'react'



{/*
      const [templatesList, setTemplatesList] = useState([
        // {"name":"Normas APA", "image":"/normal_apa.png"},
        { "name": "Normas APA", "image": "https://portfolio-isaias.s3.us-east-2.amazonaws.com/templates_images/normal_apa.png", "text": "La normas APA son estándares creados por la American Psychological Association, con el fin de unificar la forma de presentación de trabajos escritos a nivel internacional, diseñadas especialmente para proyectos de grado o cualquier tipo de documentos de investigación." },
        { "name": "Carta", "image": "https://portfolio-isaias.s3.us-east-2.amazonaws.com/templates_images/estilo_carta.jpg" },
        { "name": "Estilo CV", "image": "https://portfolio-isaias.s3.us-east-2.amazonaws.com/templates_images/estilo_cv2.jpeg" },
        { "name": "Normas APA V7", "image": "https://portfolio-isaias.s3.us-east-2.amazonaws.com/templates_images/apa_v7.png" }
    
      ]);

*/}
export default function Formats() {



    const [templatesList, setTemplatesList] = useState([
        // {"name":"Normas APA", "image":"/normal_apa.png"},
        { "name": "Normas APA", "image": "./1.jpg", "text": "La normas APA son estándares creados por la American Psychological Association, con el fin de unificar la forma de presentación de trabajos escritos a nivel internacional, diseñadas especialmente para proyectos de grado o cualquier tipo de documentos de investigación." },
        { "name": "Carta", "image": "/2.jpg" },
        { "name": "Estilo CV", "image": "/3.jpg" },
        { "name": "Normas APA V7", "image": "/4.jpg" }
    
      ]);
      const [queryList, setQueryList] = useState(templatesList);
     

      
  const search_function=(e)=>{
    let st=e.target.value;
    let query=queryList.filter(template_obj=>template_obj.name.toLocaleLowerCase().includes(st));
    setTemplatesList(query);
}
    return (
        <section className="bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h3 className="section-title">ByeWord Templates</h3>
                    </div>

                </div>
                <div className="d-flex">
                    <nav className="nav nav-pills " >
                        <a className="nav-link active" href="#">All</a>
                        <a className="nav-link" href="#">Popular</a>
                        <a className="nav-link" href="#">Latest</a>
                        <a className="nav-link" href="#">Upload your theme</a>

                    </nav>

                </div>
                <input id="text2" name="text2" type="text" onChange={search_function} className="form-control d-lg-none d-xl-block p-8" placeholder="Search...">
                </input>
                <div className="row">
                   
                {templatesList.map((temp, index) => {
               
            return (

            
                <div className="col-12 col-sm-6 col-md-4 animate__animated animate__fadeInLeft" key={index} >
                <Template name={temp.name} image_url={temp.image}  />
                </div>
            )

          })
          }

                </div>
            </div>
        </section>
    )
}
