import React,{ useEffect,useContext, useState } from 'react';
import { GlobalState } from '../../../GlobalState';
import Axios from 'axios';
import Tutorialitem from '../tutorialItem/Tutorialitem';
import { useHistory,useParams } from 'react-router-dom';



const initialState={
    title:'',
    description:'',
}

function Tutorials(){
    //para mostrar
    const state=useContext(GlobalState)
    const [tutorials]=state.tutorialAPI.tutorials
    const [callback,setCallback]=state.tutorialAPI.callback
    //para setear 
    const [tutorial,setTutorial]=useState(initialState)
    const [onEdit,setOnEdit] =useState(false)
    const params=useParams()
    const history = useHistory()
    //Obtener valores
    const handleChangeInput=e=>{
        const {name,value}=e.target
        setTutorial({...tutorial,[name]:value})
    }

  

    const handleSubmit=async e=>{
        e.preventDefault()

        try{
            if(onEdit){
                await Axios.put(`/api/tutorial/${tutorial._id}`,{...tutorial})
                
            }else{
                await Axios.post('/api/tutorial',{...tutorial})
               
            }
            
       /*      .then((response) => {})
            .catch((error) => { 
                
                console.log(error.response.status);  
            
                if(error.response.status===400){ refreshPage()}
            }) */
            setCallback(!callback)
            history.push("/")
            
        }catch(err){
            alert(err.response.data.msg)
        }
    }
    const deleteTutorial=async(id)=>{
        try{
            const deletetutorial=Axios.delete(`api/tutorial/${id}`)
                await deletetutorial
                setCallback(!callback)
                history.push("/")
        }
      
        catch(err){
            alert(err.response.data.msg)
        }
    }

    useEffect(() => {
        if(params.id){
            setOnEdit(true)
            tutorials.forEach(tutorial=>{
                if(tutorial._id === params.id){
                    setTutorial(tutorial)
                }
            })
        }else{
            setTutorial(initialState)
            setOnEdit(false)
        }
        
    }, [params.id,tutorials])
  
    return(
    <div  >
        <div className="form-style">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label  htmlFor="email">Title:</label>
                    <input className="form-control" type="text" name="title" id="title" required
                    value={tutorial.title} onChange={handleChangeInput}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea  className="form-control" type="text" name="description" id="description" required
                    value={tutorial.description} rows="5" onChange={handleChangeInput}></textarea>
                </div>
                    
                    <button type="submit" className="btn btn-primary  btn-sm btn-block"> {onEdit ? "Update" : "Create"}</button>
            </form>
        </div><br/>

        <table className="table">
                <thead>
                    <tr className="text-center">
                        <th>Title</th>
                        <th>Action</th>
                    </tr>
                </thead>
                    <tbody className="table-hover ">
                        {tutorials.map(tutorial=>{
                        return <Tutorialitem key={tutorial._id} tutorial={tutorial} deleteTutorial={deleteTutorial}/>
                        })
                    }  
                    </tbody>          
            </table>
            
    </div>

     
    )
}

export default Tutorials

