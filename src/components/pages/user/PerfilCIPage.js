import React, { Component } from 'react';
import axios from 'axios';
import Layout from '../layout/Layout'
import NavbarPerfil from '../Navbar/NavbarPerfil'


class PerfilCIPage extends Component {

    consulta = async () => { 
        const items=JSON.parse(localStorage.getItem('user-info'));
       console.log("Usuario ID: "+items.id)
       await axios.get('http://localhost:8080/users/'+items.id+'/cursoUser/')
      .then(res => {
        console.log(res.data)
        this.setState({ cursosDetail: res.data._embedded.cursoUsers })
        
        var array = res.data._embedded.cursoUsers
        
        console.log(array)
              
        var arrayUnido=[]
       
        var x=0;

        let fillArray = async () => {   
        for(var i=0;i<array.length;i++){
          console.log("Soy valor de i: "+i)
          console.log(array[i])         
          console.log(array[i]['_links'].curso.href)
                  
            await axios.get(array[i]['_links'].curso.href)
            .then(res => {
              console.log("valor de i: "+i+" data "+res.data.name)
              console.log("Soy valor de x: "+x)
              
                arrayUnido.push({cursoDetail: array[x],
                  cursoNombre: JSON.parse(JSON.stringify(res.data.name)),
                  cursoDescription: JSON.parse(JSON.stringify(res.data.description)),
                  cursoImage: JSON.parse(JSON.stringify(res.data.imagen))
                })
              
              x++;
           
              this.setState({ cursosDetailUnidoNombreCurso: arrayUnido})
            }).catch(err => {
              console.log(err);
           });  
        }
      }
      fillArray()
   
      })    
    }  
  
    componentWillMount(){
      
      //var arrayNombres=[];
      
      
      
  
    this.consulta()
  
  }
  
    calcularN1= async(url,index,e) => { 
      console.log(url)
      console.log(index)
      const min = 0;
      const max = 20;
      const rand = min + Math.random() * (max - min);
      await axios.patch(url,{"nota1":Math.round(rand)})
      //this.consulta()
      //this.state.cursosDetailUnidoNombreCurso
      //var promedio=(detalle['nota1']+detalle['nota2']+detalle['nota3'])/3;
  
      this.state.cursosDetailUnidoNombreCurso[index].cursoDetail['nota1']=Math.round(rand);
      console.log(this.state.cursosDetailUnidoNombreCurso[index].cursoDetail['nota1'])
      var nota1=this.state.cursosDetailUnidoNombreCurso[index].cursoDetail['nota1'];
      var nota2= this.state.cursosDetailUnidoNombreCurso[index].cursoDetail['nota2'];
      var nota3= this.state.cursosDetailUnidoNombreCurso[index].cursoDetail['nota3'];
  
      var prom=(nota1+nota2+nota3)/3;
      var promedio= Math.round(prom,0);
      console.log(promedio)
      await axios.patch(url,{"promedio":promedio})
      this.state.cursosDetailUnidoNombreCurso[index].cursoDetail['promedio']=promedio;
      console.log(this.state.cursosDetailUnidoNombreCurso[index].cursoDetail['promedio'])

      this.forceUpdate();
      
    }
    calcularN2= async(url,index) => {
      console.log(url)
      const min = 0;
      const max = 20;
      const rand = min + Math.random() * (max - min);
      await axios.patch(url,{"nota2":Math.round(rand)})

  
      this.state.cursosDetailUnidoNombreCurso[index].cursoDetail['nota2']=Math.round(rand);
      console.log(this.state.cursosDetailUnidoNombreCurso[index].cursoDetail['nota2'])
      var nota1=this.state.cursosDetailUnidoNombreCurso[index].cursoDetail['nota1'];
      var nota2= this.state.cursosDetailUnidoNombreCurso[index].cursoDetail['nota2'];
      var nota3= this.state.cursosDetailUnidoNombreCurso[index].cursoDetail['nota3'];
  
      var prom=(nota1+nota2+nota3)/3;
      var promedio= Math.round(prom,0);
      console.log(promedio)
      await axios.patch(url,{"promedio":promedio})
      this.state.cursosDetailUnidoNombreCurso[index].cursoDetail['promedio']=promedio;
      console.log(this.state.cursosDetailUnidoNombreCurso[index].cursoDetail['promedio'])
      //this.consulta()
      this.forceUpdate();
      
    }
    calcularN3= async(url,index) => {
      console.log(url)
      const min = 0;
      const max = 20;
      const rand = min + Math.random() * (max - min);
      await axios.patch(url,{"nota3":Math.round(rand)})

  
      this.state.cursosDetailUnidoNombreCurso[index].cursoDetail['nota3']=Math.round(rand);
      console.log(this.state.cursosDetailUnidoNombreCurso[index].cursoDetail['nota2'])
      console.log(rand);
      var nota1=this.state.cursosDetailUnidoNombreCurso[index].cursoDetail['nota1'];
      var nota2= this.state.cursosDetailUnidoNombreCurso[index].cursoDetail['nota2'];
      var nota3= this.state.cursosDetailUnidoNombreCurso[index].cursoDetail['nota3'];
  
      var prom=(nota1+nota2+nota3)/3;
      var promedio= Math.round(prom,0);
      console.log(promedio)
      await axios.patch(url,{"promedio":promedio})
      this.state.cursosDetailUnidoNombreCurso[index].cursoDetail['promedio']=promedio;
      console.log(this.state.cursosDetailUnidoNombreCurso[index].cursoDetail['promedio'])
      //this.consulta()
      this.forceUpdate();
      
    }
    

  constructor(props) {
    super(props);
    this.state=({
        cursosDetail: [],
        cursosDetailNombres: [],
        cursosDetailUnidoNombreCurso: []
      
    })
    this.eliminar = this.eliminar.bind(this);
  }

  afterSubmission = (event) => {
    event.preventDefault();
}

eliminar(id,index){
  const items=JSON.parse(localStorage.getItem('user-info'));
  let rpta = window.confirm("¿Desea quitar curso inscrito?");
  if(rpta){
    console.log(id)
    axios.delete(id);
    //Permite borrar del estado sin necesidad de recargar la pagina
    this.state.cursosDetailUnidoNombreCurso.splice(index,1);
    this.forceUpdate();
  }
}

render() {
    return (
        <div className="text-center fondo">
            <Layout>
            <div className='fondo3'>
            <header className='header'>
                
                    <img className="imgperfil" src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'/>
                
           </header>
           </div>
           
           <NavbarPerfil>
        
           <h1>Lista de Detalle de Cursos</h1>
           {console.log(this.state.cursosDetailUnidoNombreCurso)}
           {console.log("a")}
        
          
        {this.state.cursosDetailUnidoNombreCurso.map( (cursosDetailUnidoNombreCurso,index1) =>{
                        //{console.log(cursosDetailUnidoNombreCurso)} 
                        return (
                            
                        <><div class="row">
                            <div class="col-6">
                                <div class="card">
                                    <img src={cursosDetailUnidoNombreCurso.cursoImage} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{cursosDetailUnidoNombreCurso.cursoNombre}</h5>
                                        <strong><p>{cursosDetailUnidoNombreCurso.cursoDescription}</p></strong>
                                        <p class="card-text">El siguiente curso tiene como objetivo a lo largo de su transcurso y desarrollo hacer entender, comprender, poner en practica los conocimientos que sean transmitidos. </p>
                                        <div class="row">
                                          <div class="col">
                                              <button class="btn btn-primary">Click Aquí</button>

                                          </div>
                                          <div class="col">
                                              <button class="btn btn-danger" onClick={()=>this.eliminar(cursosDetailUnidoNombreCurso.cursoDetail['_links'].cursoUser.href,index1)}>Eliminar Curso</button>
                                          </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row py-3">

                                </div>
                            </div><div class="col-3">
                                    <div class="card fondo-card">
                                        <div class="card-body">
                                            <h6></h6>
                                            <p>¿Quieres ver los detalles de tus notas? <br/><strong>Haz click detalles</strong></p>
                                            
                                              <p>Promedio actual:</p>
                                              <p>{cursosDetailUnidoNombreCurso.cursoDetail['promedio']}</p>
                                              <p> {console.log(cursosDetailUnidoNombreCurso.cursoDetail['promedio'])}</p>
                                            
                                            <p class="dropdown">
                                              <button class="dropdown-toggle btn btn-info"  id="dropdownMenuButton1" type="button" data-toggle="dropdown" aria-expanded="false">
                                              Ver detalles ...
                                              </button>

                                              <div class="dropdown-menu detailBG" aria-labelledby="dropdownMenuButton1">
                                                <form onSubmit = {this.afterSubmission} className="formCI">
                                                <div>
                                                  <table className="text-center">
                                                  <tr>

                                                    <td>
                                                      <table>
                                                        <tr>
                                                          <td><strong>Nota1:</strong></td>
                                                        </tr>
                                                        <tr>
                                                          <td>
                                                            {cursosDetailUnidoNombreCurso.cursoDetail['nota1']}
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                        <button class="btn btn-success" onClick={()=>this.calcularN1(cursosDetailUnidoNombreCurso.cursoDetail['_links'].cursoUser.href,index1
                                                        )}>Dar examen</button>
                                                        </tr>
                                                      </table>  
                                                    </td>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <td>
                                                      <table>
                                                        <tr>
                                                          <td><strong>Nota2:</strong></td>
                                                        </tr>
                                                        <tr>
                                                          <td>
                                                            {cursosDetailUnidoNombreCurso.cursoDetail['nota2']}
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                        <button class="btn btn-success" onClick={()=>this.calcularN2(cursosDetailUnidoNombreCurso.cursoDetail['_links'].cursoUser.href,index1
                                                        )}>Dar examen</button>
                                                        </tr>
                                                        
                                                      </table>
                                                      
                                                    </td> 
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <td>
                                                      <table>
                                                        <tr>
                                                          <td><strong>Nota3:</strong></td>
                                                        </tr>
                                                        <tr>
                                                          <td>
                                                            {cursosDetailUnidoNombreCurso.cursoDetail['nota3']}
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                        <button class="btn btn-success" onClick={()=>this.calcularN3(cursosDetailUnidoNombreCurso.cursoDetail['_links'].cursoUser.href,index1
                                                          )}>Dar examen</button>
                                                        </tr>
                                                        
                                                      </table>
                                                      
                                                    </td> 
                                                                  
                                                  </tr>
                                                  </table>
                                                </div>
                                               <br></br> 
                                               
                                                <table>
                                                  <tr>
                                                  <td>Promedio: </td>
                                                  &nbsp;&nbsp;
                                                  <td>{cursosDetailUnidoNombreCurso.cursoDetail['promedio']}</td>
                                                  </tr>
                                                </table>
                                             
                                                </form>
                                              </div>

                                          </p>
                                        </div>
                                    </div>
                                </div>
                                </div></>
                        );
                    })}
                <hr />

           </NavbarPerfil>
            </Layout>
        </div>
    ) 
}
}

export default PerfilCIPage

