const router=require('express').Router()
const tutorialController=require('../controllers/tutorialController')

router.route('/tutorial')
    .get(tutorialController.getTutorial)
    .post(tutorialController.createTutorial)

    router.route('/tutorial/:id')   
    .delete(tutorialController.deleteTutorial)
    .put(tutorialController.updateTutorial)



module.exports=router