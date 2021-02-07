import React from 'react'
import {Switch,Route} from 'react-router-dom'


import Tutorials from './tutorialpage/Tutorials' 

function Pages() {
   
    return (
            <Switch>
                <Route path="/" exact component={Tutorials}></Route>
                <Route path="/:id" exact component={Tutorials}></Route>
            </Switch>
    )
}

export default Pages