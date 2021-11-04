import React from "react";
import {southernSurfaceSample} from "../Data/SouthernSurfaceSample";
import {mountGrand} from "../Data/MountGrand";
import {mosgiel} from "../Data/Mosgiel";
import {portChalmers} from "../Data/PortChalmers";
import {southernMountGrand} from "../Data/Southern-MountGrand";

const Alert = () => {
let test;
    for(let i = 0; i < mosgiel.length; i++){
      //console.log(mosgiel[i].result)
        if(mosgiel[i].result > 0.003){
            test += "High levels of "  + mosgiel[i].name + " in Mosgiel."
        }
    }

    return (
        <div>{<p>{test}</p>}</div>
    )
}

export default Alert;