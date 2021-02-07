import  { useState,useEffect } from 'react'
import Axios from 'axios'

function TutorialAPI(){
 const [tutorials,setTutorial]=useState([]);

 const [callback,setCallback]=useState(false)

 useEffect(()=>{
     const getTutorial=async()=>{
         const res=await Axios.get('/api/tutorial')
         setTutorial(res.data.tutorials)
     }
     getTutorial()
     
 },[callback])

    return{
        callback:[callback,setCallback],
        tutorials:[tutorials,setTutorial]
    }
}

export default TutorialAPI