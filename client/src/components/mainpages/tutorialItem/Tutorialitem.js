import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faEdit } from '@fortawesome/free-solid-svg-icons'


function Tutorialitem({tutorial,deleteTutorial}) {
   
    return (         
        <tr >
            <td className="text-sm">
                <b>{tutorial.title} </b> <br></br>
                <small>Description: {tutorial.description}</small> 
            </td>
 
        <td className="project-actions text-fixed">
            {/* <a  className="btn bg-warning btn-flat" to={`/edit_tutorial/${tutorial._id}`}><i><FontAwesomeIcon icon={faEdit} /></i></a>&nbsp;    */} 
            <button onClick={()=>deleteTutorial(tutorial._id)} className="btn btn-danger btn-flat "  >    
                <i><FontAwesomeIcon icon={faTrash} /></i> 
            </button>
            &nbsp;
            <>
            <Link className="btn bg-warning btn-flat" id="btn_view" to={`/${tutorial._id}`}>
            <i><FontAwesomeIcon icon={faEdit} /></i>
                </Link>
            </>  
        </td>         
    </tr>  
    )
}
export default Tutorialitem
