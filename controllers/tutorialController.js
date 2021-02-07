const Tutorial=require('../models/tutorialModel').Tutorial;


module.exports={
    getTutorial:async(req,res)=>{
        try{
        const tutorials= await Tutorial.find().lean()

                res.json({
                    status:'success',
                    tutorials:tutorials
                })
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    createTutorial:async(req,res)=>{
        try{
            const {title,description,published}=req.body;
            const tutorial=await Tutorial.findOne({title:title.toLowerCase()})
            if(tutorial){
                return res.status(400).json({msg:"This tutorial already exists."})
            }else{
                const newTutorial =new Tutorial({
                    title:title.toLowerCase(),description
                })
                await newTutorial.save()
                
                res.json({msg:"created a new tutorial"}) 
               
            }

        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    deleteTutorial:async(req,res)=>{
        try{
            await Tutorial.findByIdAndDelete(req.params.id)
            res.json({msg:"Deleted tutorial"})
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    updateTutorial:async(req,res)=>{
        try{
            const {title,description,id}=req.body;
            await Tutorial.findByIdAndUpdate({_id:req.params.id},{
                title:title.toLowerCase(),description
            })
            res.json({msg:"Updated tutorial"})
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    }
}

