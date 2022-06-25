import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import Layout from '../layout/Layout';
import remoto from '../../../assets/images/remoto.png';

export default function HomePage() {
    const items=JSON.parse(localStorage.getItem('user-info'));
    //const items2=JSON.parse(localStorage.getItem('cursosi-info'));
    //const items3=JSON.parse(localStorage.getItem('curso-info'));
console.log(items.id)
    const [cursos,setCursos]=useState([]);

//Funciona
    useEffect(()=>{
      let url="http://127.0.0.1:8080/cursoes"
      fetch(url)
        .then((res)=>res.json())
        .then((json)=>{
          //console.log(json);
          setCursos((json._embedded.cursoes));
        });
    },[]);

    const historyC = useHistory();

        return (
                <div className="text-center fondo ">
                <Layout>
                <header>
                    
                </header>
                <h1 className="main-title home-page-title text-white">Bienvenido a My Virtual Academy</h1>
            
                <hr className='line'></hr>
                <div>
                    <h3 class="text-white">Lista de Cursos</h3>
                    {cursos.length === 0?(
                      <h4>Cargando ...</h4>
                    ):(
                      <section>
                   <div class="container">
                        <div className='scroll_horizontal'>
                            <div class="row" >
                            {cursos.map( curso=>( 
                                    <div class="col-4" key={curso.id}>
                                    <div class="card mx_auto">
                                            <img src={curso.imagen} class="card-img-top" alt="..."/>
                                            <div class="card-body" >
                                                <h5 class="card-title">{curso.name}</h5>
                                                <p class="card-text">S/.{curso.precio}</p><br></br>
                                                <p class="card-text">{curso.description}</p>
                                                <button 
                                                //onClick={cursoi}
                                                onClick={()=>cursoi(curso._links.curso.href)}
                                                id="sub_btn" class="btn btn-primary" 
                                                type="submit">Empezar  Curso</button>
                                            </div>
                                        </div>
                                    </div>
                            ))}
                            </div>
                      </div>
                    </div> 
                    </section>
                    )}
                    <hr className='line'/>
                    <section class="about-services">
                    <div class="contenedor">
                        
                        <h2 class="titulo">Nuestros servicios</h2>
                        <div class="servicio-cont">
                            <div class="servicio-ind">
                                <img src={remoto} alt=""/>
                                <h3>Name</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, expedita!</p>
                            </div>
                            <div class="servicio-ind">
                                <img src={remoto} alt=""/>
                                <h3>Name</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, expedita!</p>
                            </div>
                            <div class="servicio-ind">
                                <img src={remoto} alt=""/>
                                <h3>Name</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, expedita!</p>
                            </div>
                        </div>
                    </div>
                </section>
                </div>
                </Layout>
            </div>)
          
/*
                    <p>
                        <button 
                        onClick={curso_i}
                        id="sub_btn" type="submit">Curso</button>
                    </p>
                    <p>
                    <button 
                        onClick={curso}
                        id="sub_btn" type="submit">Curso listado consola</button>
                    </p>
 */
      async function curso(){
            let result = await fetch("http://localhost:8080/cursoes");
            const data = await result.json();
            console.log(data)
         
            localStorage.setItem("curso-info",JSON.stringify(data))
           
        }

       async function cursoi(urlCurso){ 

        let result2 = await fetch("http://127.0.0.1:8080/users/"+items.id+"/cursoUser")
        const data2 = await result2.json();
        console.log(data2)
        
        var listaNombresCursos=[]
        for(var item of data2._embedded.cursoUsers ){
            let result3 = await fetch(item['_links'].curso.href)
            const data3 = await result3.json();
            console.log(data3._links.curso.href)
            listaNombresCursos.push(data3._links.curso.href)
        }
        console.log(urlCurso)
        console.log(listaNombresCursos)

        if(listaNombresCursos.includes(urlCurso)){
            window.confirm("Ya se encuentra inscrito en el curso");
        }else{
            let url1 = urlCurso
            console.log(url1)
            let url2="http://localhost:8080/users/"+items.id
            console.log(url2)
            let item={url1,url2};
            let result = await fetch("http://localhost:8080/cursoUsers",{
                
                method:'POST',
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json" 
                },
                body:JSON.stringify(
                    {"curso":url1,
                    "user": url2}
                )
            });

        historyC.push("/cursosInscritos")
        }
        
/*
        let url1 = urlCurso
        console.log(url1)
        let url2="http://localhost:8080/users/"+items.id
        console.log(url2)
        let item={url1,url2};
        let result = await fetch("http://localhost:8080/cursoUsers",{
            
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json" 
            },
            body:JSON.stringify(
                {"curso":url1,
                "user": url2}
            )
        });

        historyC.push("/cursosInscritos")
*/
        }

        async function curso_i(){
          let result = await fetch("http://127.0.0.1:8080/users/1/cursoUser")

         // .then(data => console.log(data));
          const data = await result.json();
          console.log(data)
          console.log(data._embedded.cursoUsers)
          console.log(data._embedded.cursoUsers[0].nota3)
          console.log(data._embedded.cursoUsers[0]._links.curso.href)
          let uri = data._embedded.cursoUsers[0]._links.curso.href;
          let result1 = await fetch(uri)
          const data1 = await result1.json();
          console.log(data1.name)
          //localStorage.setItem("user-info",JSON.stringify(data))
         //localStorage.setItem("cursosi-info",JSON.stringify(data))
          /*
          historyC.push("/home")*/
      }

}